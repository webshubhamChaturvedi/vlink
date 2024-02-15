import React from "react";
import Container from "./Container";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Partner({
  partner,
  isPartner = false,
  isPartnerFrontend = false,
  isPartnerSuply = false,
}) {
  return (
    <section
      className="md:py-[55px] py-[20px]"
      style={{ backgroundColor: partner?.bg_color }}
    >
      <Container>
        <div className="mb:pb-[55px]">
          <h4 className="relative max-w-[1200px] mx-auto font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="md:text-[100px] text-[50px] font-[800] gradient_text block w-[100%] md:leading-[100px] leading-[50px]">
              {partner?.bg_title}
            </span>
            <span className="w-[100%] font-bold relative mt-[-30px] block">
              {partner?.title}
            </span>
          </h4>
          <p className="text-center font-sans font-[600] text-[16px] text-[#7F7D7D] max-w-[1000px] mx-auto">
            VLink served futuristic solution for every renowned industry in the
            world. Our experts know the rapidly growing competition in each
            sector and hence provide strategies and services to mark your way
            out effectively.
          </p>
        </div>
        {/* background: linear-gradient(143.25deg, #F4F4F4 6.84%, rgba(244, 244, 244, 0) 96.01%); */}

        <div
          className={
            isPartner
              ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
              : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-10"
          }
        >
          {partner?.reasonList?.map((items, key, arr) => (
            <div
              className={`${
                isPartner
                  ? `grid grid-cols-12 p-[30px] lg:border-[1px] lg:border-[#B8B8B8] ${
                      key === 0
                        ? "lg:border-l-0 lg:border-t-0 lg:border-r-0"
                        : key === 1
                        ? "lg:border-t-0"
                        : key === 2
                        ? "lg:border-r-0 lg:border-l-0 lg:border-t-0"
                        : key === 3
                        ? "lg:border-l-0 lg:border-r-0 lg:border-b-0 lg:border-t-0"
                        : key === 4
                        ? "lg:border-b-0 lg:border-t-0"
                        : key === 5
                        ? "lg:border-r-0 lg:border-l-0 lg:border-b-0 lg:border-t-0"
                        : key === 6
                        ? "lg:border-l-0 lg:border-b-0"
                        : key === 7
                        ? "lg:border-l-0 lg:border-b-0"
                        : key === 8
                        ? "lg:border-l-0 lg:border-b-0 lg:border-r-0"
                        : ""
                    }`
                  : isPartnerFrontend
                  ? "text-center transation-custom hover:shadow-[0px_0px_10px_#ccc] hover:bg-[#ffffff] rounded-[10px] p-[10px] md:p-[30px]"
                  : "grid grid-cols-12 transation-custom hover:shadow-[0px_0px_10px_#ccc] hover:bg-[#f3f2ff] p-[30px]"
              }`}
              key={key}
            >
              <div
                className={`${
                  isPartner
                    ? "w-[70px] h-[70px] bg-[#F4F4F4] rounded-[100%] flex items-center justify-center mb-4"
                    : `col-span-12 mt-1 mb-6`
                }`}
              >
                {items?.image?.data?.map((img, key) => (
                  <>
                    <CloudinaryImage
                      backendImgUrl={img?.attributes?.url}
                      className={`${
                        isPartner
                          ? `w-[40px] mx-auto`
                          : isPartnerFrontend
                          ? "w-[60px] mx-auto"
                          : `w-[50px]`
                      }`}
                      alt={img?.attributes?.alternativeText}
                      type="icon"
                    />
                  </>
                ))}
              </div>
              <div
                className={`${
                  isPartner
                    ? "hover:shadow-[0px_45px_80px_-30px_#E1E5ECDE] transation-custom"
                    : ""
                } col-span-12 w-[100%]`}
              >
                <h6 className="lg:text-[20px] text-[18px] text-[#00124D] font-[700] mb-2">
                  {items.title}
                </h6>
                <p className="text-[14px] text-[#585858] font-[400] pb-2">
                  {items?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
