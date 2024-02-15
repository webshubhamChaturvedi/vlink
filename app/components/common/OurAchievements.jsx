import React from "react";
import Container from "./Container";
import CloudinaryImage from "./CloudinaryImage";

export default function OurAchievements({ data }) {
  return (
    <section
      className="lg:py-[55px] py-[35px]"
      style={{
        background: `linear-gradient(180deg, #FFF6F3 0%, #FFFEFB 100%)`,
      }}
    >
      <Container>
        <div className="lg:pb-[55px] pb-[35px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
              {data?.bgTitle}
            </span>
            <span className="w-[100%] font-bold relative mt-[-30px] block">
              {data?.title}
            </span>
          </h4>
          <p className="text-center leading-8 font-sans font-[400] text-[16px] text-[#7F7D7D]">
            {data?.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 text-center gap-10">
          {data?.List?.map((item, key) => (
            <div key={key} className="group">
              {item?.icon?.data?.attributes?.url && (
                <CloudinaryImage
                  backendImgUrl={item?.icon?.data?.attributes?.url}
                  alt={item?.icon?.data?.attributes?.url}
                  className="inline-block mb-5 grayscale group-hover:filter-none transition-all duration-1000 ease-out transform translate-y-0"
                  type="smallimg"
                />
              )}
              <h6 className="text-[#565656] lg:text-[18px] text-[14px] font-[400] group-hover:text-[#0050D5] transition-all duration-1000 ease-out transform translate-y-0">
                {item?.text}
              </h6>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
