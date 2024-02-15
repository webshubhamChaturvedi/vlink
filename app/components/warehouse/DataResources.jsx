import { apiEndpoint } from "app/scripts/fetch";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "app/components/warehouse/dataresources.css";

export default function DataResources({
  resources,
  isDataFrontend = false,
  isEduProduct = false,
}) {
  const { asPath } = useRouter();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="md:py-[55px] py-[30px] dataresource_slide">
      <div className="container">
        <div className="md:mb-[55px] mb-[30px]">
          {isEduProduct ? (
            <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
              <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                {resources?.bgText}
              </span>
              <span class="w-[100%] font-bold relative mt-[-30px] block">
                {resources?.title}
              </span>
            </h4>
          ) : (
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-5">
              <span
                className={`inline-block font-bold bg-no-repeat bg-[center_top_20%] ${
                  isDataFrontend
                    ? "max-w-[500px] w-[100%]"
                    : "max-w-[800px] w-[100%]"
                } lg:bg-size-60 bg-size-40 lg:pt-16 pt-10`}
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    resources?.image?.data?.attributes?.url
                  )})`,
                }}
              >
                {resources?.title}
              </span>
            </h4>
          )}
        </div>
        <div className="grid grid-cols-1 gap-5">
          <Slider {...settings}>
            {resources?.block
              ? resources?.block.map((data, key) => (
                  <div
                    key={key}
                    className="dataresource_box rounded-[30px] shadow-[0px_10px_30px_0px_#8E8EF021] bg-[#F2F5F6] overflow-hidden"
                  >
                    <Link
                      href={`${data?.btn_link}`}
                      className="block"
                      target={data?.target}
                    >
                      <div className="w-full md:h-[220px] h-40 bg-cover bg-no-repeat  bg-[#10609d0a] dataresorce-img">
                        {data?.image?.data?.attributes.url && (
                          <CloudinaryImage
                            backendImgUrl={data?.image?.data?.attributes.url}
                            alt={data?.image?.data?.alternativeText}
                            type="smallimg"
                            className="h-full object-position-top w-full"
                          />
                        )}
                      </div>
                    </Link>
                    <div className="py-4 px-6">
                      <span className="block text-[#7B7B7B] text-[16px] font-[700] mb-3">
                        {data?.sub_title}
                      </span>
                      <h6 className="text-[#0A0D31] text-[20px] font-[600] font_numito mb-5 line-clamp-1 h-[60px]">
                        <Link
                          href={`${data?.btn_link}`}
                          className="block"
                          target={data?.target}
                        >
                          {data.title}
                        </Link>
                      </h6>
                      <Link
                        href={`${data?.btn_link}`}
                        className="resorce_btn hidden flex items-center p-0 text-[#0050D5] text-[16px] font_numito font-[700]"
                        target={data?.target}
                      >
                        <div className="mr-3">
                          {data?.btn_icon?.data?.attributes?.url && (
                            <CloudinaryImage
                              backendImgUrl={
                                data?.btn_icon?.data?.attributes?.url
                              }
                              className="w-[30px]"
                              alt={
                                data?.btn_icon?.data?.attributes
                                  ?.alternativeText
                              }
                              type="icon"
                            />
                          )}
                        </div>
                        {/* {data.btn_text} */}
                      </Link>
                    </div>
                  </div>
                ))
              : resources?.projectList
              ? resources?.projectList?.map((data, key) => (
                  <div
                    key={key}
                    className="dataresource_box rounded-[30px] shadow-[0px_10px_30px_0px_#8E8EF021] bg-[#ffffff] overflow-hidden"
                  >
                    <Link
                      href={`${data?.link ? data?.link : "#"}`}
                      className="block"
                      target={data?.target}
                    >
                      <div className="w-full md:h-[220px] h-40 bg-cover bg-no-repeat  bg-[#10609d0a] dataresorce-img">
                        {data?.image?.data?.attributes.url && (
                          <CloudinaryImage
                            backendImgUrl={data?.image?.data?.attributes.url}
                            alt={data?.image?.data?.alternativeText}
                            type="smallimg"
                            className="h-full object-position-top w-full"
                          />
                        )}
                      </div>
                    </Link>
                    <div className="lg:py-4 py-2 lg:px-6 px-3">
                      <span className="block text-[#7B7B7B] text-[16px] font-[700] mb-3">
                        {data?.sub_title}
                      </span>
                      <Link
                        href={`${data?.link ? data?.link : ""}`}
                        className="block"
                        target={data?.target}
                      >
                        <h6
                          className="text-[#0A0D31] lg:text-[24px] text-[18px] font-[600] font_numito mb-5 line-clamp-1 lg:h-[70px] h-[52px]"
                          title={data.title}
                        >
                          {data.title}
                        </h6>
                      </Link>
                      <p className="text-[#565656] text-[14px] mb-4">
                        {data?.description}
                      </p>
                      <ul>
                        {resources?.projectTags?.map((items, key) => (
                          <>
                            {items?.key == data?.key ? (
                              <li
                                key={key}
                                className="bg-[#E9E9FF80] text-[12px] text-[#8585FF] py-1 px-3 inline-block rounded-[45px] mb-2 mr-3"
                              >
                                {" "}
                                {items?.tagText}
                              </li>
                            ) : (
                              ""
                            )}
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
              : []}
          </Slider>
        </div>
      </div>
    </section>
  );
}
