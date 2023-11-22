import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function WarehouseSolutions({ data }) {
  return (
    <section
      className="md:py-[55px] py-[30px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${apiEndpoint(
          data?.bg_img?.data?.attributes?.url
        )})`,
      }}
    >
      <div className="container">
        <div className="block md:mb-[55px] mb-[30px]" data-aos="fade-up">
          <h3 className="font-bold xl:text-4xl mb-4 font-sans lg:text-[32px] text-[22px] text-[#fff] text-center">
            {data?.title}
          </h3>
          <p className="max-w-[900px] mx-auto text-base leading-6 font-sans font-[400] text-[14px] text-center text-[#fff]">
            {data?.text}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-8 gap-10">
          {data?.solution_list.map((data, key) => (
            <div
              className={`${key}_one`}
              key={`${key}_one`}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] mb-5 mx-auto">
                {/* <img
                  src={apiEndpoint(data?.icon?.data?.attributes?.url)}
                  alt=""
                /> */}
                <CloudinaryImage
                  backendImgUrl={data?.icon?.data?.attributes?.url}
                  alt={data?.icon?.data?.attributes?.alternativeText}
                />
              </div>
              <h5 className="text-[#fff] text-center md:text-[20px] text-[14px] font-[600] mb-[5px] xl:leading-[35px] leading-[26px]">
                {data?.title}
              </h5>
              {/* <p className="text-[#fff] xl:text-[14px] text-[12px] font-sans font-[400] xl:leading-[18px] leading-[16px]">
                    {data?.text}
                    </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
