import React from "react";
import Container from "./Container";
import CloudinaryImage from "app/components/common/CloudinaryImage"

export default function HeadText({headText}) {
  return (
    <section className="lg:py-[55px] py-[35px]">
      <Container>
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-5">
            <CloudinaryImage
              backendImgUrl={headText?.image?.data?.attributes?.url}
              alt="arrow-right-white"
              className="w-full max-w-[500px]"
              type="smallimg"
            />
          </div>
          <div className="col-span-7 flex items-center ">
            <div>
              <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3">
                <span className="lg:text-[100px] text-[40px] font-[800] gradient_text block w-[100%] xl:leading-[100px]">
                  {headText?.bgTitle}
                </span>
                <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
                    {headText?.title}
                </span>
              </h4>
              <p className="text-left leading-8 font-sans font-[400] text-[20px] text-[#383838]">{headText?.description}</p>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  );
}
