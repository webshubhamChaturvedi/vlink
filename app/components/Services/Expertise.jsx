import React from "react";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Expertise({ data }) {
  return (
    <section className="md:py-[55px] py-[30px] bg-right-top bg-[length:600px_600px] bg-no-repeat">
      <div className="container relative">
        <div className=" inline-block md:absolute top-0 right-0 z-[-1] lg:w-[500px] mb-3">
          <CloudinaryImage
            backendImgUrl={`/uploads/expert_bg_fa899e2e09.png`}
            className="absolute top-[18%] right-[15%] md:block hidden"
            alt={"Expert heading"}
          />

          <CloudinaryImage
            backendImgUrl={data?.bg_img?.data?.attributes?.url}
            className="box up-down"
            alt={data?.bg_img?.data?.attributes?.alternativeText}
            type="smallimg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:mb-[55px] mb-4">
          <div
            className="succesful-team md:basis-full"
            data-aos="fade"
            data-aos-easing="linear"
          >
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[55px] lg:leading-[35px]">
              <span
                className="inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-80 max-w-[1000px] bg-[left_top_20%] lg:max-w-[500px]"
                style={{
                  backgroundImage:
                    "url(https://backend.vlinkinfo.com/uploads/Experts_c59a902fab.png?updated_at=2023-06-26T08:06:15.503Z)",
                }}
              >
                {data?.h1_black}
                <span className="text-[#0050D5]">{data?.h1_purple}</span>
                {data?.h1_black2}
              </span>
            </h4>
            <p className="leading-6 font-sans font-[400] text-[16px] text-left text-[#7F7D7D]">
              {data?.text}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-10 gap-5">
          {data?.exp_list.length &&
            data?.exp_list.map((item, index) =>
              index !== 2 ? (
                <div
                  className={`rounded-[12px] lg:col-span-4 md:col-span-6 col-span-12 bg-[#ffffff] shadow-[0px_6px_18px_rgba(2,_0,_103,_0.051)] sx-icon-bx-1 group`}
                  key={index}
                  data-aos="fade"
                  data-aos-easing="linear"
                >
                  <div className="p-[20px]">
                    <CloudinaryImage
                      backendImgUrl={item?.icon?.data?.attributes?.url}
                      className="w-[50px] mb-3"
                      alt={data?.bg_img?.data?.attributes?.alternativeText}
                      type="icon"
                    />
                    <h5 className="mb-2 text-[#171F44] text-[24px] font-[700] group-hover:text-[#ffffff]">
                      {item.title}
                    </h5>
                    <p className="text-[#43485B] text-[14px] font-[400] group-hover:text-[#ffffff]">
                      {item?.text}
                    </p>
                  </div>
                  <div className="border-t-[1px] border-[#F2F2F9] p-[20px]">
                    <Link
                      href={item?.btn_link}
                      className="text-[14px] text-[#232C4E] font-[700] flex items-center group-hover:text-[#ffffff]"
                    >
                      {item?.btn_text}
                      <CloudinaryImage
                        backendImgUrl={item?.btn_icon?.data?.attributes?.url}
                        className="w-[40px] ml-3 rounded-[100%]"
                        alt={item?.btn_icon?.data?.attributes?.alternativeText}
                        type="icon"
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className={`lg:col-span-4 md:col-span-6`}
                ></div>
              )
            )}
        </div>
      </div>
    </section>
  );
}
