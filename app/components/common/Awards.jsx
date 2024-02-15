import React from 'react';
import Container from './Container';
import CloudinaryImage from "../common/CloudinaryImage";
import { apiEndpoint } from 'app/scripts/fetch';
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "app/components/common/awards.css"

export default function Awards({awards}) {

    const settings = {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: false,
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <section className='md:py-[55px] py-[35px] bg-[#0D1750]'
    style={{backgroundImage: `url(${apiEndpoint(awards?.bgImage?.data?.attributes?.url)})`}}>
        <Container>
            <div className='pb-[55px]'>
                <h4 className="relative max-w-[1200px] mx-auto font-bold text-white xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                    <span className="md:text-[100px] text-[50px] font-[800] gradient_text block w-[100%] md:leading-[100px] leading-[50px]">
                        {awards?.bg_text}
                    </span>
                    <span className="w-[100%] font-bold relative mt-[-30px] block">
                        {awards?.title}
                    </span>
                </h4>
            </div>
            <div>
                <Slider {...settings}>
                    {awards?.Awards?.map((items, key)=>(
                        <div key={key}>
                            <CloudinaryImage 
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                className={`max-h-[120px] mx-auto`}
                                alt={items?.image?.data?.attributes?.alternativeText}
                                type="icon"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    </section>
  )
}
