const path = require("path");
const fs = require("fs");
const axios = require("axios");
const env = require("@next/env");

env.loadEnvConfig(process.cwd());

const filePath = path.join(__dirname, "../public/staticData.json");

const fetchFile = async () => {
  const requestHeader = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/header?[populate][0]=menu.menu_name.image&populate[1]=menu.menu_sidebar.image`
  );
  const requestFooter = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/footer?[populate][0]=footer_section2.footer_link&populate[1]=footer_section3.footer_services&populate[2]=footer_section4&populate[3]=footer_section5.gobal_locations&populate[4]=social_media.logo_image&populate[5]=footer_section5.awardImg.image`
  );

  const [headersData, footersData] = await Promise.all([
    requestHeader,
    requestFooter,
  ]);

  const data = {
    header: headersData?.data?.data,
    footer: footersData?.data?.data,
  };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

fetchFile()
  .then(() => console.log("Done."))
  .catch((err) => console.log("error", err));
