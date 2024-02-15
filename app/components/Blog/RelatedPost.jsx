import React from "react";
import Link from "next/link";
import { apiEndpoint } from "app/scripts/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createMarkup } from "./../../scripts/utils";
import { DateTime } from "luxon";
import CloudinaryImage from "../common/CloudinaryImage";

export default function RelatedPost({ relateddata }) {
  return (
    <section className="md:py-[55px] py-[30px]">
      <div className="container">
        <div
          className="md:mb-[55px] mb-[30px]"
          data-aos="fade"
          data-aos-easing="linear"
        >
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-5">
            <span className="text-[100px] font-[800] gradient_text block w-[100%] leading-[100px]">
              POST
            </span>
            <span className="inline-flex font-bold absolute bottom-[0px] left-[50%] trans ">
              Related Posts
            </span>
          </h4>
        </div>
        <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-14">
          {relateddata && relateddata.length > 0
            ? relateddata.map((data, key) => (
                <div
                  key={key}
                  className="rounded-[4px] hover:shadow-[0px_0px_40px_0px_rgba(0,_80,_213,_0.08)]"
                >
                  <div className="w-full h-[220px] bg-cover bg-no-repeat">
                    <Link
                      href={data?.id ? "/blog/" + data?.attributes?.slug : "#"}
                    >
                      <CloudinaryImage
                        backendImgUrl={
                          data?.attributes?.section1?.image?.data?.attributes
                            ?.url
                        }
                        className="w-full h-[220px]"
                        alt={
                          data?.attributes?.section1?.image?.data?.attributes
                            ?.alternativeText
                        }
                        type="smallimg"
                      />
                    </Link>
                  </div>
                  <div className="relative p-4">
                    <span className="bg-[#1E1123] w-[60px] h-[60px] text-[#fff] block text-center mt-[-45px] text-[16px] rounded-[4px] flex items-center justify-center mb-5">
                      {data?.attributes?.section ? (
                        <span>
                          {DateTime.fromJSDate(
                            new Date(data?.attributes?.section?.post_date)
                          ).day.toLocaleString({ minimumIntegerDigits: 2 })}
                          <br />
                          {DateTime.fromJSDate(
                            new Date(data?.attributes?.section?.post_date)
                          ).toFormat("MMM")}
                        </span>
                      ) : (
                        <span>
                          {DateTime.fromJSDate(
                            new Date(data?.attributes?.banner?.postDate)
                          ).day.toLocaleString({ minimumIntegerDigits: 2 })}
                          <br />
                          {DateTime.fromJSDate(
                            new Date(data?.attributes?.banner?.postDate)
                          ).toFormat("MMM")}
                        </span>
                      )}
                    </span>
                    <h6
                      className="text-[#0A0D31] text-[20px] font-[600] font_numito mb-5 line-clamp-0 "
                      title={data?.attributes?.h1_black}
                    >
                      <Link
                        href={
                          data?.id ? "/blog/" + data?.attributes?.slug : "#"
                        }
                        className="hover:text-[#4152ee]"
                      >
                        {data?.attributes?.h1_black}
                      </Link>
                    </h6>
                    <div
                      className="text-[14px] text-[#5c5c5c] font-[400] line-clamp-1"
                      dangerouslySetInnerHTML={createMarkup(
                        data?.attributes?.body
                      )}
                    ></div>
                    <div id="title" className="flex font-sans my-[10px]">
                      <div className="flex items-center humb text-[#313131] text-[14px] font-[400]">
                        {/* <img src="/img/carbon_view.png" alt="icon" className="mr-2" width="18" height="18" /> */}
                        {data?.attributes?.section1?.read_time}
                      </div>
                      <div className="ml-auto humb">
                        <h6 className="reading-time text-[0.875rem] flex justify-end items-center text-[#313131] text-[14px] font-[400]">
                          {/* <img src="/img/Clock-Circle.png" alt="icon" className="mr-2 w-[18px] h-[18px] object-cover" /> */}
                          <span className="font-[400] mr-1">122 views</span>
                        </h6>
                      </div>
                    </div>
                    {/* <Link
                      href={data?.id ? "/blog/" + data?.attributes?.slug : "#"}
                      className="flex items-center justify-end p-0 text-[#62207E] text-[16px] font_numito font-[600]"
                  
                    >
                      Read More
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 font-[14px] w-[14px]"
                      />
                    </Link> */}
                  </div>
                </div>
              ))
            : []}
        </div>
      </div>
    </section>
  );
}
