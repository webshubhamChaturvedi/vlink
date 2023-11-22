const path = require("path");
const fs = require("fs");
const axios = require("axios");
const cloudinary = require("cloudinary").v2;
const slugify = require("slugify");
const filePath = path.join(__dirname, "../public/cloudinaryLinks.json");
const errorFilePath = path.join(
  __dirname,
  "../public/errorCloudinaryLinks.json"
);
const env = require("@next/env");
env.loadEnvConfig(process.cwd());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

// upload image to cloudnary

const uploadImage = (imagePath, imageName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      imagePath,
      { public_id: imageName },
      (error, result) => {
        if (error) {
          if (error.http_code === 401) {
            console.error(
              "Cloudinary storage is full. Cannot upload more images."
            );
            reject(error);
          } else {
            console.error("Denied uploading image:", error);
            reject(error);
          }
        } else {
          resolve(result.secure_url);
        }
      }
    );
  });
};

const createMappingJSON = async () => {
  const baseImageUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await axios.get(`${baseImageUrl}/api/upload/files`);
  const data = response.data;
  const nameAndUrlArray = data.map(({ url, hash, size }) => ({
    url,
    hash,
    size,
  }));

  let jsonFileData = {}; // Initialize with an empty object

  try {
    // Attempt to read the existing JSON file
    jsonFileData = require("../public/cloudinaryLinks.json");
  } catch (error) {
    // If the file doesn't exist or there's an error, continue with an empty object
  }

  const errorObj = [];
  console.log(
    "Please wait, currently fetching Strapi images and creating cloudinaryLinks.json"
  );

  for (const element of nameAndUrlArray) {
    const { url, hash, size } = element;

    // Checking if the asset has a valid image extension before proceeding with upload
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"]; // Add more image extensions if needed
    const hasValidImageExtension = imageExtensions.some((ext) =>
      url.toLowerCase().endsWith(ext)
    );

    if (!hasValidImageExtension) {
      console.error(
        `Asset ${url} does not have a valid image extension. Skipping...`
      );
      errorObj.push({
        error: "Asset does not have a valid image extension",
        hash,
        url,
      });
      continue;
    }
    // If the URL is already in the jsonFileData and the hash matches, skip uploading
    if (jsonFileData[url] === hash) {
      console.log(
        `URL ${url} is already uploaded with the same hash. Skipping...`
      );
      continue;
    }

    // // If the asset has an error, skip uploading and log the error
    // if (
    //   url.includes(".ttf") || // Skip unsupported file type ttf
    //   url.endsWith(".zip") || // Skip unsupported ZIP files
    //   url.toLowerCase().endsWith(".ttf.zip") || // Skip unsupported ttf.zip files
    //   url.toLowerCase().endsWith(".zip.ttf") || // Skip unsupported zip.ttf files
    //   url.includes(".pdf") || // Skip unsupported file type ttf
    //   url.includes(".mp3") ||
    //   url.includes(".docx") ||
    //   url.includes(".mp4") ||
    //   url.includes(".json") ||
    //   url.includes("xlsx")
    // ) {
    //   console.log(
    //     `Asset ${url} has an error or unsupported format. Skipping...`
    //   );
    //   errorObj.push({
    //     error: "Asset has an error or unsupported format",
    //     hash,
    //     url,
    //   });
    //   continue;
    // }

    // If the asset size more than 150kb, skip uploading and log the error
    if (size > 1500) {
      console.warn(`Asset ${url} exceeds maximum size. Skipping...`);
      errorObj.push({
        error: "Asset exceeds maximum size",
        hash,
        url,
      });
      continue;
    }

    // If the URL is not in jsonFileData, upload the image
    if (!jsonFileData[url]) {
      try {
        const strapiUploadedUrl = `${baseImageUrl}${url}`;
        const cloudinaryUrl = await uploadImage(strapiUploadedUrl, hash);
        jsonFileData[url] = hash; // Store the hash instead of the Cloudinary URL
        console.log(`Uploaded URL: ${url}`);
        console.log(`Uploaded hash: ${hash}`);
      } catch (error) {
        console.log(`Error uploading image: ${error}`);
        errorObj.push({
          error,
          hash,
          url,
        });
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(jsonFileData, null, 2));
  fs.writeFileSync(errorFilePath, JSON.stringify(errorObj, null, 2));
  console.log("Completed, created cloudinaryLinks.json");
};

createMappingJSON();
