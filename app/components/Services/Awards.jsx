import { apiEndpoint } from "app/scripts/fetch";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Services/awards.css"

export default function Awards({ awards }) {
  const { asPath } = useRouter();

  const settings = {
    infinite: true,
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="md:pt-[55px] md:pb-[75px] pt-[30px] pb-[55px] awards-sec">
      <div className="container">
        <div className='pb-[55px]'>
          <h4 className="relative max-w-[1200px] mx-auto font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
              <span className="md:text-[100px] text-[50px] font-[800] gradient_text block w-[100%] md:leading-[100px] leading-[50px]">
                  {awards?.bg_title}
              </span>
              <span className="w-[100%] font-bold relative mt-[-30px] block">
                  {awards?.title}
              </span>
          </h4>
          {/* <p className="text-center leading-8 font-sans font-[400] text-[16px] text-[#7F7D7D]">
              {partner.description}
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-5">
        <Slider {...settings}>
          {awards?.awardList
            ? awards?.awardList.map((data, key) => (
                <div
                  key={key}
                  className="rounded-[30px] shadow-[0px_10px_60px_0px_#8E8EF021] awards-circle"
                >
                  <div
                    className="w-full h-[220px] py-4"
                  >
                    <img src={apiEndpoint(data?.image?.data?.attributes.url)} alt="" className="h-full inline-block" />
                      {/* <CloudinaryImage
                                    backendImgUrl={data?.image?.data?.attributes?.url}
                                    className={`w-[100%]`}
                                    alt={data?.image?.data?.attributes?.alternativeText}
                                    type="icon"
                                    /> */}
                  </div>
                  <div className="p-4 text-center">
                    <h6 className="block text-[#000000] text-[20px] font-[600] mb-3">
                      {data?.title}
                    </h6>
                    <p className="text-[#565656] text-[14px] font-[400] font_numito mb-5 line-clamp-1">
                      {data.description}
                    </p>
                  </div>
                </div>
              ))
            : []}
            </Slider>
        </div>
      </div>
    </section>
  )
}
