import React from "react";
import CloudinaryImage from 'app/components/common/CloudinaryImage';
import Container from "../common/Container";

export default function TechnologiesFrontend({technologies}) {
  return (
    <section className="bg-[#000D3B] lg:py-[55px] py-[35px]">
      <Container className="md::pr-0 lg:mr-0 ">
        <div className="lg:pb-[55px] pb-[35px]">
          <h4 class="relative font-bold text-[#fff] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
            <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
              {technologies?.bg_text}
            </span>
            <span class="w-[100%] font-bold relative mt-[-30px] block">
              {technologies?.title}
            </span>
          </h4>
          <p className="text-[16px] text-[#FFFFFF] font-[400] text-center max-w-[1100px] mx-auto">
            {technologies?.description}
          </p>
        </div>
        <div className="grid grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 col-span-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                {technologies?.techList?.map((items, key)=>(
                    <div key={key} className="border-[1px] border-[#FFFFFF] md:p-[30px] p-[20px] rounded-[30px] transation-custom hover:shadow-[0px_0px_10px_#ccc] hover:scale-[1.01]">
                        <div className="p-4 rounded-[4px] inline-flex mb-2 w-[70px] h-[70px] items-center justify-center "
                        style={{backgroundColor: items?.bg_color}}>
                            <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                alt={items?.image?.data?.attributes?.alternativeText}
                                className="w-full h-full object-contain"
                                type="icon"
                            />
                        </div>
                        <h6 className="text-[20px] text-[#fff] font-[600] mb-2">
                            {items?.title}
                        </h6>
                        <p className="text-[14px] text-[#ffffffa6] font-[400]">
                            {items?.description}
                        </p>
                    </div>
                ))}
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12 flex items-end justify-end">
            <CloudinaryImage
              backendImgUrl={technologies?.image?.data?.attributes?.url}
              alt={technologies?.image?.data?.attributes?.alternativeText}
              className=""
              type="smallimg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
