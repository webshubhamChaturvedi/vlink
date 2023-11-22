import React from "react";
import Container from "../common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from 'app/components/common/CloudinaryImage';

import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "app/components/HireDevelopers/approach.css"

export default function Approach({approach}) {

    const settings = {
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
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
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <section className="pt-[55px] pb-[100px] md:pt-[35px] md:pb-[55px] bg-cover bg-no-repeat bg-center"
    style={{backgroundImage: `url(${apiEndpoint("/uploads/Rectangle_7099_73ece61c8f.png")})`}}>
      <Container className="pl-[60px]">
        <div className="pb-[55px]">
          <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mr-auto">
            <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                {approach?.bgTitle}
            </span>
            <span class="w-[100%] font-bold relative mt-[-30px] block">
                {approach?.title}
            </span>
          </h4>
          <p className="text-[16px] text-[#FFFFFF] font-[400] text-center max-w-[1100px] mx-auto">
          </p>
        </div>
    </Container>
    <Container className="mr-0 overflow-hidden pr-0 pl-0">
        <div className="approach_slider">
        <Slider {...settings}>
            {approach?.list?.map((items, key)=>(
                <div key={key} className="bg-[#FFFFFF] p-[30px] rounded-[30px] shadow-[10px_10px_40px_0px_#0050D51F] transation-custom hover:shadow-[0px_0px_10px_#ccc] hover:scale-[1.01]">
                    <div className="p-1.5 rounded-[4px] inline-block mb-2"
                    style={{backgroundColor: items?.bgColor}}>
                        <CloudinaryImage
                            backendImgUrl={items?.icon?.data?.attributes?.url}
                            alt={items?.icon?.data?.attributes?.alternativeText}
                            className="h-[50px]"
                            type="icon"
                        />
                    </div>
                    <h6 className="text-[20px] text-[#000000] font-[600] mb-3">
                        {items?.title}
                    </h6>
                    <p className="text-[14px] text-[#000000] font-[400]">
                        {items?.description}
                    </p>
                </div>
            ))}
            </Slider>
        </div>
      </Container>
      <CloudinaryImage
            backendImgUrl={`/uploads/mesh_1_2_99cb799bc2.png`}
            alt={`/uploads/mesh_1_2_99cb799bc2.png`}
            className="ml-auto absolute bottom-0 right-0"
            type="smallimg"
        />
    </section>
  );
}
