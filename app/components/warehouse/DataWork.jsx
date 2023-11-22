import { apiEndpoint } from "app/scripts/fetch";
import React from "react";
import CloudinaryImage from "../common/CloudinaryImage";

export default function DataWork({ data, isLimitless = false, id }) {
  let limitlist = isLimitless
    ? data?.cap_list.map((list, key) => ({
        title: list?.title,
        richtext: list?.text,
        src: list?.image?.data?.attributes?.url,
        alternativeText: list?.image?.data?.attributes?.alternativeText,
      }))
    : data?.flowlist.map((list, key) => ({
        title: list?.h1_title,
        richtext: list?.p_text,
        src: list?.image?.data?.attributes?.url,
        alternativeText: list?.image?.data?.attributes?.alternativeText,
      }));

  return (
    <section>
      <div className="container md:pt-[55px] pt-[30px]">
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div
            className="succesful-team md:basis-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
              <span
                className={`inline-block font-bold bg-no-repeat backgroundsize pt-16 ${
                  isLimitless
                    ? `bg-size-40 max-w-[1000px] bg-[center_top_20%]`
                    : `bg-cover bg-[center_top_50%]`
                }`}
                style={{
                  backgroundImage: `url(${
                    isLimitless
                      ? apiEndpoint(data?.image?.data?.attributes?.url)
                      : apiEndpoint(data?.image?.data?.attributes?.url)
                  })`,
                }}
              >
                {data?.title}
              </span>
            </h4>
            <p className="max-w-[850px] mx-auto leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]">
              {data?.text}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`container md:my-[55px] my-[30px] bg-contain bg-no-repeat bg-center relative ${
          isLimitless ? `xl:px-[10%]` : `xl:px-[10%]`
        }`}
      >
        <div
          className="hidden md:block absolute right-[25%] left-[25%] top-[0px] bottom-[0px] z-[-1]"
          style={{
            backgroundColor: `${isLimitless ? "transparent" : `#F1F8FB`}`,
          }}
        ></div>
        {limitlist.map((data, key) => (
          <div
            key={`${key}_key`}
            className={`flex md:flex-nowrap jus flex-wrap md:justify-around items-center mb-10 last:mb-0 ${
              key % 2 === 1 ? "md:flex-row-reverse" : ""
            } `}
          >
            <div className="relative lg:basis-5/12 lg:max-w-full w-full h-fit md:mb-0 mb-5">
              <div
                className={`image-container max-w-[400px]  ${
                  key % 2 === 1 ? "md:ml-auto mx-auto" : "md:mr-auto mx-auto"
                }`}
              >
                {/* <img
                  src={data?.src}
                  sizes="100%"
                  alt="Vlink Info"
                  className="relative z-20 image !w-full"
                /> */}
                <CloudinaryImage
                  backendImgUrl={data?.src}
                  alt={data?.alternativeText}
                  className="relative z-20 image !w-full"
                />
              </div>
            </div>
            <div
              className="succesful-team lg:basis-7/12 md:mb-4 lg:mb-0"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div
                className={`md:max-w-[450px] ${
                  key % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-[600] text-left mb-4 text-[#383838]">
                  {data.title}
                </h5>
                <p className="text-[#353535] lg:text-[16px] text-[14px] font-[400] font-sans">
                  {data.richtext}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
