import { apiEndpoint } from "app/scripts/fetch";
import React from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloudinaryImage from "../common/CloudinaryImage";

export const Infrastructure = ({ infrastructure }) => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 3,
        },
      },
    ],
  };

  return (
    <section className="md:py-[55px] py-[30px]">
      <div className="container">
        <div
          className="md:mb-[55px] mb-[30px]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-5">
            <span
              className="inline-block font-bold bg-no-repeat bg-[center_top_20%] bg-size-60 pt-16 max-w-[800px]"
              style={{
                backgroundImage: `url(${apiEndpoint(
                  infrastructure?.image?.data?.attributes?.url
                )})`,
              }}
            >
              {infrastructure.title}
            </span>
          </h4>
          <p className="max-w-[1000px] mx-auto leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]">
            {infrastructure.text}
          </p>
        </div>
        <div className="w-[100%] lxlpx-[10%] relative">
          <Slider {...settings}>
            {infrastructure.infra_block && infrastructure.infra_block.length
              ? infrastructure?.infra_block.map((list, key) => (
                  <div
                    key={key}
                    className="bg-[#fff] rounded-[12px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.25)] py-[15px] px-[10px] text-center"
                  >
                    {/* <img
                      src={apiEndpoint(list?.image?.data?.attributes?.url)}
                      alt=""
                      width="50px"
                      height="50px"
                      className="inline-block mb-3"
                    /> */}
                    <CloudinaryImage
                      backendImgUrl={list?.image?.data?.attributes?.url}
                      alt={list?.image?.data?.attributes?.alternativeText}
                      className="inline-block mb-3 w-12 h-12"
                    />
                    <p className="text-[#383838] text-[14px] font-sans font-[600]">
                      {list?.title}
                    </p>
                  </div>
                ))
              : []}
          </Slider>

          <img src="/img/Ellipse144.svg" alt="" className="Ellipse144" />
          <img src="/img/Ellipse143.svg" alt="" className="Ellipse143" />
        </div>
      </div>
    </section>
  );
};
