import React from "react";
import Container from "./Container";
import CloudinaryImage from "app/components/common/CloudinaryImage";

export default function Challenges({challenges}) {
  return (
    <section className="lg:py-[55px] py-[35px]">
      <Container>
        <div className="">
            
          {/* <p className="text-left leading-8 font-sans font-[400] text-[16px] text-[#7F7D7D]">
            {challenges?.description}
          </p> */}
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <div className="lg:pb-[55px] pb-[55px]">
                  <h4 className="relative font-bold text-[#fff] xl:text-[40px] lg:text-[32px] text-[22px] xl:leading-[45px] lg:leading-[35px] mb-3">
                      <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[80px]">
                      {challenges?.bgTitle}
                      </span>
                      <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
                      {challenges?.title}
                      </span>
                  </h4>
              </div>
              {challenges?.ReasonList?.map((items, key)=>(
                  <div key={key} className="flex mb-8">
                      <div className="w-[60px] text-[#FFFFFF] lg:text-[40px] text-[24px] font-[700] mb-3 relative">
                          {items?.number}
                          <span className="block w-[30px] h-[30px] bg-[#0050D521] rounded-[100%] absolute top-[10px]"></span>
                      </div>
                      <div className="w-[100%]">
                          <h6 className="text-[#FFFFFF] lg:text-[34px] text-[24px] font-[600]">{items?.title}</h6>
                          <p className="text-[#FBF8F8] lg:text-[20px] text-[14px] font-[400]">{items?.description}</p>
                      </div>
                  </div>
              ))}
            </div>
            <div className="col-span-6 flex justify-center">
                <CloudinaryImage 
                  backendImgUrl={challenges?.image?.data?.attributes?.url}
                  alt={challenges?.image?.data?.attributes?.url}
                  className="w-full max-w-[450px]"
                  type="smalling"
                />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
