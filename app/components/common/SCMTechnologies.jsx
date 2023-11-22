import React from "react";
import Container from "./Container";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function SCMTechnologies({ SCMTechnologies }) {
  return (
    <section
      className="pt-[55px] bg-[#021968]"
      style={{ backgroundColor: SCMTechnologies?.bg_color }}
    >
      <Container>
        <div className="pb-[55px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center mb-3">
            <span className="lg:text-[100px] text-[50px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[50px]">
              {SCMTechnologies?.bg_title}
            </span>
            <span className="w-[100%] text-[#fff] font-bold relative top-[-30px]">
              {SCMTechnologies?.title}
            </span>
          </h4>
          <p className="text-center leading-8 font-sans font-[400] text-[16px] text-[#ffffff]">
            {SCMTechnologies?.description}
          </p>
        </div>
        <div className="flex flex-wrap "
        style={{
            backgroundImage: `url(${apiEndpoint(SCMTechnologies?.bg_image?.data?.attributes?.url)})`
        }}>
          <div className="lg:basis-4/12 w-full flex flex-wrap items-center">
            {SCMTechnologies?.tech_list.map((items, key) =>
              key === 0 ? (
                <div className="flex lg:flex-nowrap flex-wrap lg:flex-row-reverse lg:mb-0 mb-8" key={key}>
                    <span className="bg-[#00A6FF] lg:w-[140px] w-[100px] h-[100px] rounded-[100%] flex items-center justify-center lg:mb-0 mb-4 lg:mx-0 mx-auto">
                        <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                className="w-[65px] h-[65px]"
                                alt={items?.image?.data?.attributes?.alternativeText}
                                type="icon"
                                />
                    </span>
                    <div className="w-[100%] lg:text-right text-center text-[#fff] lg:mr-[30px] lg:ml-2">
                        <h6 className="text-[22px] font-[600]">{items?.title}</h6>
                        <p className="text-[14px]">{items?.description}</p>
                    </div>
                </div>
              ) : key === 1 ? (
                <div className="flex lg:flex-nowrap flex-wrap lg:flex-row-reverse lg:mb-0 mb-8" key={key}>
                    <div className="bg-[#00A6FF] lg:w-[140px] w-[100px] h-[100px] rounded-[100%] flex items-center justify-center lg:mb-0 mb-4 lg:mx-0 mx-auto">
                        <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                className="w-[65px] h-[65px]"
                                alt={items?.image?.data?.attributes?.alternativeText}
                                type="icon"
                                />
                    </div>
                    <div className="w-[100%] lg:text-right text-center text-[#fff] lg:mr-[30px] lg:ml-2">
                        <h6 className="text-[22px] font-[600]">{items?.title}</h6>
                        <p className="text-[14px]">{items?.description}</p>
                    </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <div className="lg:basis-4/12 w-full ">
            <CloudinaryImage
                                backendImgUrl={SCMTechnologies?.centerImage?.data?.attributes?.url}
                                alt={SCMTechnologies?.centerImage?.data?.attributes?.alternativeText}
                                type="isTablet"
                                />
          </div>
          <div className="lg:basis-4/12 w-full flex flex-wrap items-center">
            {SCMTechnologies?.tech_list.map((items, key) =>
              key === 2 ? (
                <div className="flex lg:flex-nowrap flex-wrap lg:mb-0 mb-8" key={key}>
                    <span className="bg-[#00A6FF] lg:w-[140px] w-[100px] h-[100px] rounded-[100%] flex items-center justify-center lg:mb-0 mb-4 lg:mx-0 mx-auto">
                        <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                className="w-[65px] h-[65px]"
                                alt={items?.image?.data?.attributes?.alternativeText}
                                type="icon"
                                />
                    </span>
                    <div className="w-[100%] lg:text-left text-center text-[#fff] lg:ml-[30px]">
                        <h6 className="text-[22px] font-[600]">{items?.title}</h6>
                        <p className="text-[14px]">{items?.description}</p>
                    </div>
                </div>
              ) : key === 3 ? (
                <div className="flex lg:flex-nowrap flex-wrap lg:mb-0 mb-8" key={key}>
                    <div className="bg-[#00A6FF] lg:w-[140px] w-[100px] h-[100px] rounded-[100%] flex items-center justify-center lg:mb-0 mb-4 lg:mx-0 mx-auto">
                        <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                className="w-[65px] h-[65px]"
                                alt={items?.image?.data?.attributes?.alternativeText}
                                type="icon"
                                />
                    </div>
                    <div className="w-[100%] lg:text-left text-center text-[#fff] lg:ml-[30px]">
                        <h6 className="text-[22px] font-[600]">{items?.title}</h6>
                        <p className="text-[14px]">{items?.description}</p>
                    </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
