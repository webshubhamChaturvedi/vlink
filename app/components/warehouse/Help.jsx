import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Help({ help, isHiring = false }) {
  return (
    <section>
      <div className="container md:pt-[55px] pt-[30px]">
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div
            className="succesful-team md:basis-full"
            data-aos="fade"
            data-aos-easing="linear"
          >
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px]">
              <span
                className={`inline-block font-bold bg-no-repeat pt-16 ${
                  isHiring
                    ? "bg-[center_top_30%] bg-size-100 max-w-[400px] w-[100%]"
                    : "bg-[center_top_30%] bg-size-80"
                }`}
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    help?.image?.data?.attributes?.url
                  )})`,
                }}
              >
                {help?.title}
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="container md:py-[55px] py-[30px] lg:px-[5%] pb-0 md-pb-5">
        {help?.help_block?.map((block, key, arr) => (
          <div
            key={`${key}_one`}
            id="ggg"
            className={`group transition duration-300 ease-in-out flex items-center md:flex-nowrap flex-wrap md:justify-around rounded-[60px] pt-4 md:pt-0 px-[40px] relative ${
              key % 2 === 1 ? "flex-row-reverse" : ""
            } ${arr.length - 1 === key
              ? "" : "md:mb-14 mb-3"}`}
          >
            <div
              className="md:basis-7/12 w-full md:mb-0 mb-5"
              data-aos="fade"
              data-aos-easing="linear"
            >
              <div className="max-w-[460px]">
                <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] xl:leading-[50px] lg:leading-[35px] mb-3">
                  {block?.title}
                </h5>
                <p className="font-sans font-[400] lg:text-[16px] text-[14px] text-[#7F7D7D]">
                  {block?.text}
                </p>
              </div>
            </div>
            <div className="md:basis-5/12 w-full">
              <CloudinaryImage
                backendImgUrl={block?.image?.data?.attributes?.url}
                className={`md:max-w-[450px] w-full
              ${key % 2 === 0 ? "ml-auto" : "mr-auto"}
              `}
                alt={block?.image?.data?.attributes?.alternativeText}
                type="smallimg"
              />
            </div>
            {`${key}_one` === "0_one" ? (
              <div className="transition duration-300 ease-in-out group-hover:shadow-[0px_30px_25px_0px_#010F261F] bg-[#C8DCFF] absolute top-[0] left-[0px] md:right-[20%] right-[0px] md:bottom-[0px] bottom-[30%] z-[-1] rounded-[40px]"></div>
            ) : `${key}_one` === "1_one" ? (
              <div className="transition duration-300 ease-in-out group-hover:shadow-[0px_30px_25px_0px_#010F261F] bg-[#D5FFF3] absolute top-[0] md:left-[20%] left-[0px] right-[0px] md:bottom-[0px] bottom-[30%] z-[-1] rounded-[40px]"></div>
            ) : `${key}_one` === "2_one" ? (
              <div className="transition duration-300 ease-in-out group-hover:shadow-[0px_30px_25px_0px_#010F261F] bg-[#B0EDFF] absolute top-[0] left-[0px] md:right-[20%] right-[0px] md:bottom-[0px] bottom-[30%] z-[-1] rounded-[40px]"></div>
            ) : `${key}_one` === "3_one" ? (
              <div className="transition duration-300 ease-in-out group-hover:shadow-[0px_30px_25px_0px_#010F261F] bg-[#FFBDBD] absolute top-[0] md:left-[20%] left-[0px] right-[0px] md:bottom-[0px] bottom-[30%] z-[-1] rounded-[40px]"></div>
            ) : `${key}_one` === "4_one" ? (
              <div className="transition duration-300 ease-in-out group-hover:shadow-[0px_30px_25px_0px_#010F261F] bg-[#FFEAC3] absolute top-[0] left-[0px] md:right-[20%] right-[0px] md:bottom-[0px] bottom-[30%] z-[-1] rounded-[40px]"></div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
