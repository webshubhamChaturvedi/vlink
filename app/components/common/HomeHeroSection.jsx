import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import Container from "./Container";
import CloudinaryImage from "../common/CloudinaryImage";
import Link from "next/link";

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homehero.css";
import StarRatingComponent from "react-rating-stars-component";

export default function HomeHeroSection({ data, setModalCall }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-center xl:py-[140px] lg:py-[120px] py-[120px]"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_768/banner_home_651d001eb9)`,
      }}
    >
      <Container>
        <div className="grid grid-cols-12 lg:gap-10 gap-4">
          <div className="lg:col-span-6 col-span-12 lg:flex flex-wrap items-center">
            <div>
              <h1 className="text-[#fff] text-[26px] md:text-[32px] xl:text-[55px] font-extrabold leading-[35px] xl:leading-[68px] md:leading-[44px] mb-5">
                {data?.h1_purple}
              </h1>
              <p className="text-[16px] mb-4 mt-4 text-[#fff] font-semibold font-sans border-l-[4px] border-[#01C9F5] pl-5 py-1">
                {data?.p}
              </p>
              <div className="flex md:space-x-6 space-x-2 pt-6">
                {data?.banner_btn?.map((btn, key) => (
                  <>
                    {btn?.link ? (
                      <Link
                        color="gray"
                        href={`${btn?.link}`}
                        style={{
                          backgroundColor: btn?.color,
                          color: btn?.textcolor,
                        }}
                        className={`${
                          key % 2 == 0
                            ? "bg-[#0029FF] text-white"
                            : "bg-[#fff] text-black"
                        } hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 blue_btn relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]`}
                      >
                        <span className="flex items-center rounded-md text-sm px-4 py-2">
                          <span
                            className={`${
                              key % 2 == 0 ? "bg-[#fff]" : "bg-[#0029FF]"
                            } absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                          ></span>
                          <span
                            className={`${
                              key % 2 == 0
                                ? "group-hover:text-black"
                                : "group-hover:text-white"
                            } lg:text-[16px] text-[13px] font-[600] relative flex items-center`}
                          >
                            {btn?.text}
                            <svg
                              className={`ml-2 ${
                                key % 2 == 0
                                  ? "stroke-[white] group-hover:stroke-[black]"
                                  : "stroke-[black] group-hover:stroke-[white]"
                              }`}
                              width="16"
                              height="16"
                              viewBox="0 0 18 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 1.5L16 10.3684L8.5 19.2368"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </span>
                      </Link>
                    ) : (
                      <button
                        className={`buttonOpen ${
                          key % 2 == 0
                            ? "bg-[#0029FF] text-white"
                            : "bg-[#fff] text-black"
                        } border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 relative rounded overflow-hidden text-center inline-block px-4 py-2`}
                        // onClick={setModalCall}
                        id={btn?.text.split(" ").join("")}
                        key={key}
                      >
                        <span>
                          <span
                            className={`${
                              key % 2 == 0 ? "bg-[#fff]" : "bg-[#0029FF]"
                            } absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                          ></span>
                          <span
                            className={`${
                              key % 2 == 0
                                ? "group-hover:text-black"
                                : "group-hover:text-white"
                            } flex items-center font-[600] relative lg:text-[16px] text-[13px]`}
                          >
                            {btn?.text}
                            <svg
                              className={`ml-2 ${
                                key % 2 == 0
                                  ? "stroke-[white] group-hover:stroke-[black]"
                                  : "stroke-[black] group-hover:stroke-[white]"
                              }`}
                              width="16"
                              height="16"
                              viewBox="0 0 18 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.5 1.5L16 10.3684L8.5 19.2368"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </span>
                      </button>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 homehero">
            <Slider {...settings}>
              {data?.Reviews &&
                data?.Reviews?.map((ratData, key) => (
                  <>
                    <div key={key} className="flex items-center">
                      <div className="w-7/12 arrow_shap relative z-[1] left-[15px] shadow-[20px_0px_20px_0px_#00000026] rounded-[15px]">
                        <div id="triangle-right"></div>
                        <div className="bg-[#FFFFFF] px-[20px] py-[15px]  rounded-[15px]">
                          {ratData?.rating && (
                            <StarRatingComponent
                              size={20}
                              count={5}
                              value={parseInt(ratData?.rating)}
                              isHalf={true}
                              edit={false}
                            />
                          )}
                          <h6 className="md:text-[20px] text-[16px] text-[#000000] font-[700] mb-1">
                            {ratData?.name}
                          </h6>
                          <p className="md:text-[14px] text-[12px] text-[#383838] font-[600] mb-3">
                            {ratData?.designation}
                          </p>
                          <p className="text-[12px] text-[#383838] font-[400]">
                            {ratData?.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-5/12 border-2 border-[#FFFFFF] rounded-[15px] shadow-[0px_0px_40px_0px_#00000040] overflow-hidden aspect-[3/3] object-contain">
                        {ratData?.image && (
                          <CloudinaryImage
                            backendImgUrl={
                              ratData?.image?.data?.attributes?.url
                            }
                            alt={
                              ratData?.image?.data?.attributes?.alternativeText
                            }
                            className="smallimg w-[100%]"
                            type="isDesktop"
                          />
                        )}
                      </div>
                    </div>
                  </>
                ))}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
}
