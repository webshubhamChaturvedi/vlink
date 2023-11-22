import React from "react";
import CloudinaryImage from 'app/components/common/CloudinaryImage';
import Container from "../common/Container";

export default function ServiceBackend({whyvlink}) {
  return (
    <section className="bg-[#000D3B] lg:pt-[55px] pt-[35px] lg:pb-[75px] pb-[45px]">
      <Container>
        <div className="lg:pb-[55px] pb-[35px]">
          <h4 class="relative font-bold text-[#fff] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
            <span class="lg:text-[100px] text-[40px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[40px]">
              {whyvlink?.bg_text}
            </span>
            <span class="w-[100%] font-bold relative mt-[-30px] block">
              {whyvlink?.title}
            </span>
          </h4>
          <p className="text-[16px] text-[#ffffffa6] font-[400] text-center max-w-[1100px] mx-auto">
            {whyvlink?.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {whyvlink?.servicesList?.map((items, key)=>(
                    <div key={key} className="text-center border-[1px] border-[#FFFFFF] lg:p-[40px] p-[20px] rounded-[15px] transation-custom hover:bg-gradient-to-tl from-[#F0FAFF] to-[#FFFFFF] hover:scale-[1.03] group">
                        <div className="p-4 rounded-[4px] inline-block mb-2"
                        style={{backgroundColor: items?.bg_color}}>
                            <CloudinaryImage
                                backendImgUrl={items?.icon?.data?.attributes?.url}
                                alt={items?.icon?.data?.attributes?.alternativeText}
                                className="h-[70px] group-hover:invert"
                                type="icon"
                            />
                        </div>
                        <h6 className="text-[20px] text-[#fff] font-[600] mb-2 group-hover:text-[#000]">
                            {items?.title}
                        </h6>
                        <p className="text-[14px] text-[#ffffffa6] font-[400] group-hover:text-[#000]">
                            {items?.description}
                        </p>
                    </div>
                ))}
        </div>
      </Container>
    </section>
  );
}
