import React from "react";
import Container from "../common/Container";
import { useRouter } from "next/router";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";

const OurServicesCard = ({
  isService = false,
  list,
  center = false,
  rowItems = 2,
  lgrowItems = 2,
  smrowItems = 2,
  wideGap = false,
  viewMore = false,
  plainBg = false,
  className = "",
  location,
}) => {
  const router = useRouter();
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

  const lggridCols = {
    1: "xl:grid-cols-1",
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
    6: "xl:grid-cols-6",
    7: "xl:grid-cols-7",
    8: "xl:grid-cols-8",
    9: "xl:grid-cols-9",
    10: "xl:grid-cols-10",
    11: "xl:grid-cols-11",
    12: "xl:grid-cols-12",
  };

  const smgridCols = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
    5: "sm:grid-cols-5",
    6: "sm:grid-cols-6",
    7: "sm:grid-cols-7",
    8: "sm:grid-cols-8",
    9: "sm:grid-cols-9",
    10: "sm:grid-cols-10",
    11: "sm:grid-cols-11",
    12: "sm:grid-cols-12",
  };

  return (
    <div className="latest-service-section">
      <Container>
        {location === "service" && (
          <div className="text-center md:pb-12 pb-[25px]">
            <h6 className="text-company font-bold xl:text-4xl lg:text-[32px] text-[22px] mb-3">
              Our Latest
              <span className="font-bold text-black ml-1.5"> Services</span>
            </h6>
            <p className="md:text-[16px] text-[14px] font-sans">
              Many Companies, Multiple Verticals, One Outcome
            </p>
          </div>
        )}
        <div className=" md:pb-8 lg:pb-8  text-center w-full h-full">
          <div
            className={`grid ${lggridCols[rowItems]} ${gridCols[lgrowItems]}  ${
              smgridCols[smrowItems]
            } ${wideGap ? "gap-8" : "gap-8"} md:p-0  items-center`}
          >
            {list && list?.length ? (
              list?.map((item, index) => (
                <>
                  {item?.href ? (
                    <Link
                      href={`${item.href || ""}`}
                      className={`h-[100%] cursor-pointer`}
                      key={index}
                    >
                      <div
                        className={`sm:odd:bg-white sm:even:bg-white odd:bg-white even:bg-[#ECECEC] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] rounded-md relative w-full h-full odd:hover:bg-[#0050D5] even:hover:bg-[#0050D5] hover:text-[#fff] group ${
                          viewMore
                            ? "services-card md:min-h-[340px]   min-h-max "
                            : ""
                        } ${className}`}
                        key={`inner-${index}`}
                      >
                        <div
                          className={`flex flex-col justify-center ${
                            center ? "" : "md:flex-row"
                          } items-center px-4 ${
                            location === "service" || location === "industry"
                              ? "md:py-8 py-4"
                              : "py-0"
                          }`}
                        >
                          <div className="services-img md:pb-6 pb-4">
                            {!isService ? (
                              <CloudinaryImage
                                backendImgUrl={
                                  item?.icon_image?.data?.attributes?.url
                                }
                                className="md:w-[80px] md:h-[80px] w-[55px] h-[55px]"
                                width={100}
                                alt={
                                  item?.icon_image?.data?.attributes
                                    ?.alternativeText
                                }
                              />
                            ) : (
                              <CloudinaryImage
                                backendImgUrl={item?.icon?.src}
                                className="w-[50px] h-[50px]"
                                width={100}
                                alt={item?.icon?.alternativeText}
                                type="icon"
                              />
                            )}
                          </div>
                          <div
                            className={`z-20 flex px-3 flex-col justify-center initial services-text ${
                              plainBg ? "plain" : ""
                            }  text-center rounded-md md:center w-full h-full`}
                            style={{ minHeight: "max-content" }}
                          >
                            <p
                              className={`font-sans font-bold md:pb-3 pb-2 md:text-[20px] text-[18px]`}
                            >
                              {item?.h1 || item?.title}
                            </p>
                            {item?.p && (
                              <p className="font-sans h-22  mx-auto  tracking-[0.05em] md:text-[16px] text-[14px]">
                                {item?.p}
                              </p>
                            )}
                            {viewMore && (
                              <span
                                outline
                                color={"primary"}
                                className={`hidden md:mt-6 mt-3 text-[14px] text-[#fff] border border-[#fff] py-1.5 px-3 rounded-[4px] w-[fit-content] mx-auto group-hover:inline-block`}
                                href={`${item.link}`}
                              >
                                {item?.label ?? "View More"}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`sm:odd:bg-white sm:even:bg-white odd:bg-white even:bg-[#ECECEC] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] rounded-md relative w-full h-full odd:hover:bg-[#0050D5] even:hover:bg-[#0050D5] hover:text-[#fff] group ${
                        viewMore ? "services-card min-h-[340px]" : ""
                      } ${className}`}
                      key={`inner-${index}`}
                    >
                      <div
                        className={`flex flex-col justify-center ${
                          center ? "" : "md:flex-row"
                        } items-center px-4 ${
                          location === "service" || location === "industry"
                            ? "md:py-8 py-4"
                            : "py-0"
                        }`}
                      >
                        <div className="services-img md:pb-6 pb-4">
                          {!isService ? (
                            <CloudinaryImage
                              backendImgUrl={
                                item?.icon_image?.data?.attributes?.url
                              }
                              className="group-hover:invert md:w-[80px] md:h-[80px] w-[55px] h-[55px]"
                              width={100}
                              alt={
                                item?.icon_image?.data?.attributes
                                  ?.alternativeText
                              }
                            />
                          ) : (
                            <CloudinaryImage
                              backendImgUrl={item?.icon?.src}
                              className="group-hover:invert w-[50px] h-[50px]"
                              width={100}
                              alt={item?.icon?.alternativeText}
                              type="icon"
                            />
                          )}
                        </div>
                        <div
                          className={`z-20 flex px-3 flex-col justify-center initial services-text ${
                            plainBg ? "plain" : ""
                          }  text-center rounded-md md:center w-full h-full`}
                          style={{ minHeight: "max-content" }}
                        >
                          <p
                            className={`font-sans font-bold md:pb-3 pb-2 md:text-[20px] text-[18px]`}
                          >
                            {item?.h1 || item?.title}
                          </p>
                          {item?.p && (
                            <p className="font-sans h-22  mx-auto  tracking-[0.05em] md:text-[16px] text-[14px]">
                              {item?.p}
                            </p>
                          )}
                          {viewMore && (
                            <span
                              outline
                              color={"primary"}
                              className={`hidden md:mt-6 mt-3 text-[14px] text-[#fff] border border-[#fff] py-1.5 px-3 rounded-[4px] w-[fit-content] mx-auto group-hover:inline-block`}
                              href={`${item.link}`}
                            >
                              {item?.label ?? "View More"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default OurServicesCard;
