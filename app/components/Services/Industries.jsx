import { apiEndpoint } from "app/scripts/fetch";
import React from "react";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Industries({ industries, isAug = false, isEduInd=false }) {
  return (
    <section className={`lg:py-[55px] py-[30px]`}
    style={{backgroundColor: isEduInd ? industries?.bg_color : "" }}>
      <div className="container">
        {isEduInd ? 
          <div className="lg:pb-[55px] pb-[35px]">
            <h4 className="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1000px] mx-auto">
              <span className="lg:text-[100px] text-[40px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[40px]">
                {industries?.bg_text}
              </span>
              <span className="w-[100%] font-bold relative mt-[-30px] block">
                {industries?.title}
              </span>
            </h4>
            <p className="text-[16px] text-[#2D2D2D] font-[400] text-center max-w-[1100px] mx-auto">
              {industries?.description}
            </p>
          </div>
        :
          <div className="flex flex-col md:flex-row md:justify-around items-center lg:mb-[50px] mb-[30px] pb-[30px]">
            <div className="succesful-team md:basis-full">
              <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
                <span
                  className={`inline-block font-bold bg-no-repeat backgroundsize pt-16 ${isAug ? "bg-size-100" : "bg-size-40"}  max-w-[1200px] bg-[center_top_40%] md:px-[40px]`}
                  style={{
                    backgroundImage: `url(${apiEndpoint(
                      industries?.title_bg?.data?.attributes?.url
                    )})`,
                  }}
                >
                  {industries?.title}
                </span>
              </h4>
            </div>
          </div>
        }
        <div>
          <div className="flex flex-wrap justify-center ">
            {industries?.industriesList?.map((items, key) => (
              <div
                className={`${isEduInd ? "xl:w-[30%] lg:w-[48%] w-[100%] mx-[1.5%] mb-[40px] p-[20px] rounded-[20px] shadow-[5px_10px_25px_13px_#D1D9E640] sx-icon-bx-1 group" : `xl:w-[23%] lg:w-[48%] w-[100%] mx-[1%] mb-[20px] p-[20px] rounded-[20px] bg-[#ffffff] shadow-[0px_0px_40px_0px_#0050D51A] sx-icon-bx-1 group`}`}
                style={{backgroundImage: isEduInd ? `linear-gradient(140deg, ${items?.bg_color1} 50%, ${items?.bg_color2} 100%)`: ""}}
                key={key}
              >
                <div
                  className={`w-[100%] mx-auto relative py-[30px] text-center rounded-[30px] flex justify-center items-center`}
                >
                  <div className="w-[100%] text-center">
                    <div className="bg-[#E1ECFF5E] padding-[20px] w-[95px] h-[95px] rounded-[100%] flex items-center justify-center mx-auto">
                      <span className="bg-[#E1ECFF] group-hover:bg-[#fff] w-[80px] h-[80px] p-[20px] rounded-[100%] flex items-center justify-center mx-auto">
                        <CloudinaryImage
                          backendImgUrl={items?.icon?.data?.attributes?.url}
                          alt={items?.icon?.data?.attributes?.alternativeText}
                          type="icon"
                        />
                      </span>
                    </div>
                    <p className="mt-4 text-[18px] font-[600] text-[#0C2139] group-hover:text-[#ffffff] text-center">
                      {items?.title}
                    </p>
                    <p className="mt-2 text-[14px] font-[400] text-[#565656] group-hover:text-[#ffffff] text-center">
                      {items?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
