import React from "react";
import Container from "./Container";
import CloudinaryImage from "../common/CloudinaryImage"

export default function TechStack({techstack}) {
  return (
    <section className="lg:py-[55px] py-[35px]">
      <Container>
        <div className="lg:pb-[55px] pb-[35px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px]">
            <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[80px]">
              {techstack?.bg_title}
            </span>
            <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
              {techstack?.title}
            </span>
          </h4>
        </div>
          <div className="lg:border-[1px] border-[#7F7D7D] rounded-[70px] lg:p-[55px]">
            <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 gap-7">
              <div className="lg:col-span-4 col-span-12">
                <div className="border-[1px] border-[#7F7D7D] border-dashed p-[30px] text-center mb-[60px]">
                  <p className="lg:text-[24px] text-[16px] text-[#001E4F] font-[600] pb-[35px] bg-[#fff] lg:mt-[-50px] mt-[-40px] table mx-auto px-3">
                    {techstack?.kitTitle}
                  </p>
                  <div>
                    {techstack?.kitList?.map((items, key)=>(
                        <div key={key}>
                            <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                alt="arrow-right-white"
                                className="max-h-[100px] mx-auto mb-4"
                                type="icon"
                            />
                            <p className="text-[18px] text-[#000000] font-[400]">
                            {items?.text}
                            </p>
                        </div>
                    ))}
                    
                  </div>
                </div>
                <div className="border-[1px] border-[#7F7D7D] border-dashed p-[30px] text-center">
                  <p className="lg:text-[24px] text-[16px] text-[#001E4F] font-[600] pb-[35px] bg-[#fff] mt-[-50px] table mx-auto px-3">
                    {techstack?.UiUxTitle}
                  </p>
                  <div className="grid sm:grid-cols-2 grid-cols-1">
                    {techstack?.uiuxlist?.map((items, key)=>(
                        <div className="mt-4" key={key}>
                            <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                alt="arrow-right-white"
                                className="max-h-[100px] mx-auto mb-4"
                                type="icon"
                            />
                            <p className="text-[18px] text-[#000000] font-[400]">
                                {items?.text}
                            </p>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 col-span-12">
                <div className="border-[1px] border-[#7F7D7D] border-dashed p-[30px] mb-[60px]">
                  <p className="lg:text-[24px] text-[16px] text-[#001E4F] font-[600] pb-[35px] bg-[#fff] text-center mt-[-50px] table mx-auto px-3">
                    {techstack?.featureTitle}
                  </p>
                  <ul>
                    {techstack?.featureList?.map((items, key)=>(
                        <li key={key} className="text-[18px] text-[#011123] font-[400] flex items-center mb-8">
                            <CloudinaryImage
                                backendImgUrl={`/uploads/ri_checkbox_circle_fill_1f1eec2b21.png`}
                                alt="arrow-right-white"
                                className="mr-2 w-[24px] h-[24px]"
                                type="icon"
                            />
                            {items?.text}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-12">
                <div className="border-[1px] border-[#7F7D7D] border-dashed p-[30px] text-center">
                  <p className="lg:text-[24px] text-[16px] text-[#001E4F] font-[600] pb-[35px] bg-[#fff] mt-[-50px] table mx-auto px-3">
                    {techstack?.techApiTitle}
                  </p>
                  <div className="grid lg:grid-cols-9 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    {techstack?.techApiList?.map((items, key)=>(
                        <div className="mt-4" key={key}>
                          <div className="w-[50px] h-[50px] mb-3 mx-auto">
                            <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                alt="arrow-right-white"
                                className="max-w-[50px] max-h-[50px] mx-auto mb-4"
                                type="icon"
                            />
                          </div>
                            <p className="xl:text-[16px] text-[14px] text-[#000000] font-[400]">
                                {items?.text}
                            </p>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
    </section>
  );
}
