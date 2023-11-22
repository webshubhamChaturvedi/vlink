import React, { useState, useEffect } from "react";
import ReadMore from "app/components/common/ReadMore";
import BlogImage from "app/components/Blog/BlogImage";
import Link from "next/link";

const CrsResponsabilitiesCard = ({
  item,
  shadow = true,
  rounded = true,
  bgWhite = true,
  userIconSize = "lg",
}) => {
  return (
    <Link href={"#"} passHref={true}>
      <div
        className={`drop-shadow-[0px_0px_6px_rgba(0,0,0,0.1)]  text-left ${
          shadow ? "shadow-md sm:shadow-lg" : ""
        } h-full ${rounded ? "rounded-lg" : ""} ${bgWhite ? "bg-white" : ""}`}
      >
        <BlogImage
          image_url={
            process.env.NEXT_PUBLIC_API_URL + item?.image?.data?.attributes?.url
          }
          showDate={true}
          rounded={rounded}
        />
        <div className="p-5">
          <h4 className="mb-5 font-semibold text-[22px] leading-7 text-secondary">
            {item?.title}
          </h4>
          <div className="font-normal text-sm leading-6 text-[#353535]">
            {item?.p}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CrsResponsabilitiesCard;
