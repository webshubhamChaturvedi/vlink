import { apiEndpoint } from "app/scripts/fetch";
import React from "react";
// import Image from "next/image";
import CloudinaryImage from "../../common/CloudinaryImage";

const TabTechStacks = ({ index, tabData }) => {
  return (
    <>
      {tabData?.icon?.data?.attributes?.url && (
        <div
          className="fill-color bg-[#F6F7F9] rounded-[4px] p-[15px] text-center hover:bg-[#62207E] hover:text-[#fff] img-hover min-w-[130px]"
          key={index}
        >
          <div className="text-center">
            {/* <Image src={ apiEndpoint(tabData?.icon?.data?.attributes?.url)} alt={tabData?.icon?.data?.attributes?.alternativeText} width={26} height={26} className="md:w-[26] md:h-[26] w-[20px] h-[20px] mx-auto mb-[6px]"   /> */}
            <CloudinaryImage
              backendImgUrl={tabData?.icon?.data?.attributes?.url}
              className="md:w-[26] md:h-[26] w-[20px] h-[20px] mx-auto mb-[6px]"
              alt={tabData?.icon?.data?.attributes?.alternativeText}
              type={"icon"}
            />
          </div>
          <p className={`text-[14px] whitespace-nowrap`}>{tabData?.language}</p>
        </div>
      )}
    </>
  );
};
export default TabTechStacks;
