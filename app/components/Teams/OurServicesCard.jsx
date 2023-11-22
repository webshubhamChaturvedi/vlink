import React from "react";
import Image from "next/image";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

const OurServicesCard = ({
  isHireDevelopers = false,
  isHireDevelopersDetails = false,
  isService = false,
  list,
  center = false,
  rowItems = 3,
  wideGap = false,
  viewMore = false,
  plainBg = false,
  className = "",
  isProcess,
  isDetail,
}) => {
  const gridCols = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
    7: "md:grid-cols-7",
    8: "md:grid-cols-8",
    9: "md:grid-cols-9",
    10: "md:grid-cols-10",
    11: "md:grid-cols-11",
    12: "md:grid-cols-12",
  };
  return (
    <div>
      <div className={`text-center w-full ${isDetail ? "" : "pb-16`"} `}>
        <div className={`flex flex-wrap justify-center`}>
          {list && list.length ? (
            list.map((item, index) => (
              <div
                key={index}
                className={`lg:basis-1/2 sm:basis-1/2 xl:basis-1/3 basis-[100%] p-4 w-[100%] ${
                  isDetail
                    ? "xl:basis-1/4 lg:basis-1/2 md:basis-1/2 basis-[100%] w-[100%]"
                    : "xl:basis-1/3 lg:basis-1/2 basis-1/2 basis-[100%] md:p-4 p-0 w-[100%]"
                }  `}
              >
                <div
                  className={`${index % 2 == 1 ? "bg-white" : "bg-white"}  ${
                    isDetail
                      ? "rounded-[20px]"
                      : "rounded-md drop-shadow-[0px_0px_20px_rgba(0,0,0,0.1)] h-[100%] w-[100%]"
                  }   ${viewMore ? " services-card" : ""} ${className}`}
                  key={`inner-${index}`}
                >
                  <div
                    className={` flex flex-col initial bg-white services-text ${
                      plainBg ? "plain" : ""
                    } ${center ? "" : "md:flex-row"} items-center ${
                      isDetail ? "" : "p-0"
                    } text-center rounded-md md:center w-full`}
                  >
                    <div className={`${!isProcess && !isDetail ? "p-0" : ""} `}>
                      {!isService ? (
                        // <img
                        //   src={apiEndpoint(
                        //     item?.icon_image?.data?.attributes?.url
                        //   )}
                        //   alt={item?.icon_image?.data?.attributes?.alternativeText || item?.icon_image?.data?.attributes?.name}
                        //   width={item?.icon_image?.data?.attributes?.width}
                        //   height={item?.icon_image?.data?.attributes?.height}
                        //   className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] object-contain"
                        // />
                        <CloudinaryImage
                          backendImgUrl={
                            item?.icon_image?.data?.attributes?.url
                          }
                          type="icon"
                          alt={
                            item?.icon_image?.data?.attributes?.alternativeText
                          }
                          className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] object-contain"
                        />
                      ) : (
                        // <img
                        //   src={item?.icon?.src}
                        //   alt={item?.icon?.alternativeText || item?.icon?.name}
                        //   width={item?.icon?.width}
                        //   height={item?.icon?.height}
                        //   className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] object-contain"
                        // />
                        <CloudinaryImage
                          backendImgUrl={item?.icon?.src}
                          type="icon"
                          alt={item?.icon?.alternativeText}
                          className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] object-contain"
                        />
                      )}
                    </div>
                    <div
                      className={`z-20 initial bg-white services-text ${
                        plainBg ? "plain" : ""
                      }  ${
                        isDetail ? "pt-3" : "p-2"
                      } text-center rounded-md md:center w-full`}
                    >
                      {!isDetail && (
                        <p
                          className={`text-[#0050D5] p-2 mb-3 md:text-[20px] text-[18px] font-bold ${
                            isHireDevelopers &&
                            "text-[#0050D5] mb-3 text-[20px] font-bold"
                          }`}
                        >
                          {isHireDevelopers ? item?.h : item?.h1}
                        </p>
                      )}
                      {item?.p && (
                        <p
                          className={`${
                            isHireDevelopersDetails
                              ? " lg:max-w-[370px] mx-auto text-[#353535] text-center text-[14px] leading-5 "
                              : "  lg:max-w-[370px] mx-auto text-[#353535] text-center text-[14px] leading-5 "
                          } ${isDetail ? "text-[14px] leading-5" : ""}`}
                        >
                          {item?.p}
                        </p>
                      )}
                      {viewMore && (
                        <button
                          className={`absolute z-10 hidden ${
                            plainBg
                              ? "bg-transparent border border-white text-white"
                              : "bg-white text-darkPrimary"
                          }  py-2 px-8 bottom-5 left-1/2 -translate-x-1/2`}
                        >
                          {item?.label ?? "View More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default OurServicesCard;
