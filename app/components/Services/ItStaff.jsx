import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";
import Container from "../common/Container";

export default function ItStaff({ data, isHomeWhyChoose = false }) {
  return (
    <section
      className="lg:py-[55px] py-[35px] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `${
          isHomeWhyChoose
            ? `url(https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_768/Rectangle_7150_e3ad5fcbe6)`
            : ""
        }`,
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div className="succesful-team md:basis-full">
            {isHomeWhyChoose ? (
              <h4 className="relative font-bold text-white xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                  {data?.bgTitle}
                </span>
                <span className="w-[100%] font-[600] relative mt-[-30px] block max-w-[1200px] mx-auto">
                  {data?.title}
                </span>
              </h4>
            ) : (
              <h4
                className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px] 
              pb-3 md:pb-0"
              >
                <span
                  className="inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-100 max-w-[1000px] bg-[center_top_40%] px-[40px]"
                  style={{
                    backgroundImage: `url(${apiEndpoint(
                      data?.title_bg?.data?.attributes?.url
                    )})`,
                  }}
                >
                  {data?.title}
                </span>
              </h4>
            )}
            <p className="max-w-[850px] mx-auto leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]"></p>
          </div>
        </div>
        <div className="bg-contain bg-no-repeat lg:pt-[70px] pb-[0px] pt-[35px]  bg-center">
          <ul
            className={
              isHomeWhyChoose
                ? "grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-7 md:p-4 lg:p-0 h-full"
                : "grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-7 md:p-4 lg:p-0 h-full"
            }
          >
            {data?.c_list.length &&
              data?.c_list?.map((items, key) => (
                <li
                  className={`${
                    isHomeWhyChoose
                      ? "text-center"
                      : `md:min-h-[230px] min-h-[180px] h-[fit-content] shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border-[#fff] border-[1px] p-[20px] rounded-[15px] ${
                          key % 2 === 1 ? "lg:mt-[100px]" : ""
                        }`
                  }
                `}
                  style={{
                    backgroundColor: `${items?.bg_color && items?.bg_color}`,
                  }}
                  key={key}
                  data-aos="fade"
                >
                  <div className={isHomeWhyChoose ? "" : "ms-[auto]"}>
                    <CloudinaryImage
                      backendImgUrl={items.icon?.data?.attributes?.url}
                      className={
                        isHomeWhyChoose
                          ? "md:w-[70px] md:h-[70px] w-[50px] h-[50px] mx-[auto]"
                          : `w-[80px] h-[80px] block ml-[auto]`
                      }
                      alt={items.icon?.data?.attributes?.url?.alternativeText}
                      type="icon"
                    />
                  </div>
                  <div className={isHomeWhyChoose ? " " : "mt-[-40px]"}>
                    <h4 className="md:text-[40px] text-[30px] text-[#fff] font-[700]">
                      {items?.title}
                    </h4>
                    <p className="md:text-[20px] text-[16px] text-[#fff] font-[600]">
                      {items?.sub_title}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
