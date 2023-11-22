import { apiEndpoint } from "app/scripts/fetch";
import Image from "next/image";
import React from "react";
import LINK from "../common/LINK";
import CloudinaryImage from "../common/CloudinaryImage";

const WhyVlink = ({ section, setModalScheduleCall = true }) => {
  return (
    <section className="md:py-[55px] py-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:mb-0 mb-4">
            {/* <img src="/img/fintech-software-development.png" alt="Fintech Software" /> */}
            <CloudinaryImage
              backendImgUrl={
                "/uploads/fintech_software_development_72eaa4bbe0.png"
              }
              alt={"Fintech Software"}
              className="  w-full"
            />
          </div>
          <div>
            <div className="mb-[30px]">
              <p className="text-[#0050D5] text-[18px] font-sans mb-2">
                {section?.primary_text}
              </p>
              <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] mb-3">
                {section?.h1_black}
                <span className="text-company">{section?.h1_purple}</span>
                {section?.h1_black_secondary}
              </h4>
              <p className="text-[#545454] text-[16px] font-sans">
                {section?.p1}
              </p>
            </div>
            <h6 className="text-[#353535] md:text-[22px] text-[18px] font-sans font-[600] mb-3">
              {section?.h2}
            </h6>
            <p className="text-[#545454] md:text-[16px] text-[14px] font-sans">
              {section?.p2}
            </p>

            <div className="grid lg:grid-cols-2 gap-8 my-[30px]">
              {section?.why_vlink_features?.map((item) => (
                <div className="flex" key={item.id}>
                  <div className="mr-3 flex item-center">
                    <Image
                      src={apiEndpoint(item?.image?.data?.attributes?.url)}
                      width={50}
                      height={50}
                      alt={item?.image?.data?.attributes?.alternativeText}
                    />
                  </div>
                  <div>
                    <h6 className="text-[#353535] md:text-[22px] text-[18px] font-sans font-[600]">
                      {item?.h1}
                    </h6>
                    <p className="text-[#545454] md:text-[16px] text-[14px] font-snas font-[400]">
                      {item?.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[url('/img/ConsultantsGuide.png')] bg-cover bg-no-repeat bg-center p-[25px] rounded-[10px] flex items-center justify-center">
              <span className="text-[#fff] font-sans text-[14px] font-[700] mr-auto">
                {section?.banner_text}
              </span>
              <button
                onClick={setModalScheduleCall}
                className="ml-1 min-inline-size bg-[#FFFFFF] py-[10px] px-[20px] text-[#550377] lg:text-[18px] text-[14px] font-sans font-[600]"
              >
                {section?.banner_button_text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVlink;
