import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function ItStaff({ data }) {
  return (
    <section className="lg:py-[55px] py-[20px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div className="succesful-team md:basis-full" data-aos="fade">
            <h4
              className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px] 
             pb-3 md:pb-0"
            >
              <span
                className="inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-100 max-w-[1000px] bg-[center_top_40%] px-[40px]"
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    data?.title_bg?.data?.attributes?.url
                  )})`,
                }}
              >
                {data?.title}
              </span>
            </h4>
            <p className="max-w-[850px] mx-auto leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]"></p>
          </div>
        </div>
        <div
          className="bg-contain bg-no-repeat lg:pt-[70px] pb-[0px]  bg-center"
          style={{
            backgroundImage: `url(${apiEndpoint(
              data?.main_bg?.data?.attributes?.url
            )})`,
          }}
        >
          <ul className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-7 md:p-4 lg:p-0 h-full">
            {data?.c_list.length &&
              data?.c_list?.map((items, key) => (
                <li
                  className={`min-h-[230px] h-[fit-content] shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border-[#fff] border-[1px] p-[20px] rounded-[15px] 
                    ${key % 2 === 1 ? "lg:mt-[100px]" : ""}
                `}
                  style={{
                    backgroundColor: `${items?.bg_color}`,
                  }}
                  key={key}
                  data-aos="fade"
                >
                  <div className="ms-[auto]">
                    <CloudinaryImage
                      backendImgUrl={items.icon?.data?.attributes?.url}
                      className="w-[80px] h-[80px] block ml-[auto]"
                      alt={items.icon?.data?.attributes?.url?.alternativeText}
                      type="icon"
                    />
                  </div>
                  <div className="mt-[-40px]">
                    <h4 className="text-[40px] text-[#fff] font-[700]">
                      {items?.title}
                    </h4>
                    <p className="text-[20px] text-[#fff] font-[700]">
                      {items?.sub_title}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
