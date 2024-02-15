import React, { useState } from "react";
import useResponsive from "app/Hooks/useResponsive";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const strapiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
import cloudinaryMapUrls from "../../../public/cloudinaryLinks.json";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { URLConfig } from "@cloudinary/url-gen";
import { CloudConfig } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import Image from "next/image";

function extractPathFromLink(link) {
  if (link.startsWith(baseUrl)) {
    return link.substring(baseUrl.length);
  }
  return link;
}
function extractFileNameFromURL(url) {
  const cloudinaryBaseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;
  const fileName = url.replace(cloudinaryBaseUrl, "");
  return fileName;
}

const cd = ({ className, alt, backendImgUrl, style, type }) => {
  const altTag = alt;
  const altText = altTag ?? "image";
  const link = extractPathFromLink(backendImgUrl);
  const cloudinaryUrl = cloudinaryMapUrls[link];

  if (!cloudinaryUrl) {
    return (
      <img src={strapiBaseUrl + link} className={className} alt={altText} />
    );
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const getPublicId = extractFileNameFromURL(cloudinaryUrl);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Set the Cloud configuration and URL configuration
  let cloudConfig = new CloudConfig({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  });
  let urlConfig = new URLConfig({ secure: true });

  let width;

  if (type === "icon") {
    width = "130";
  }
  // else if (type === "icon" && isMobile) {
  //   width = "100";
  // }
  // else if (isMobile && type === "smallimg") {
  //   width = "340";
  // }
  else if (type === "smallimg") {
    width = "480";
  }
  //  else if (isMobile || type === "smallimg") {
  //   width = "340";
  // }
  else if (isTablet) {
    width = "991";
  } else if (isDesktop) {
    width = "1280";
  } else {
    width = "130";
  }

  let myImage = new CloudinaryImage(getPublicId, cloudConfig, urlConfig);
  myImage.resize(fill().width(width).gravity(focusOn(FocusOn.faces())));

  return (
    <>
      <AdvancedImage
        className={className}
        cldImg={myImage}
        alt={altText}
        style={style}
        type={type}
        loading="lazy"
      />
    </>
  );
};

export default cd;
