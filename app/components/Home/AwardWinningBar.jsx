import React from 'react'
import Container from '../common/Container';
import CloudinaryImage from "../common/CloudinaryImage";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./awardwinningbar.css"


export default function AwardWinningBar({section, awardsDot=false}) {

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <section className={`awardwinningbar relative z-[1] ${awardsDot ? "shadow-[0px_0px_40px_0px_#00000026]" : ""}`}>
        <Container>
            <div className={`bg-[#fff] lg:flex lg:justify-between items-center lg:flex-nowrap rounded-[20px] px-[40px] ${awardsDot ? "py-[10px]" : "lg:mt-[-60px] mt-[-20px] py-[30px] shadow-[0px_0px_40px_0px_#00000026]"}`}>
                <p className='text-[#000000] text-[20px] w-[100%] md:flex md:items-center md:mr-8 lg:mb-0 mb-3'
                style={{maxWidth: "320px"}}>Award-Winning Software Engineering & IT Staffing Company</p>
                <div className='awardslider'>
                  <Slider {...settings}>
                      {section?.images?.data?.map((item, key)=>(
                        <span key={key}>
                          {item?.attributes?.url &&
                            <CloudinaryImage
                              backendImgUrl={item?.attributes?.url}
                              className="sm:max-w-[140px] md:max-w-[130px] sm:max-h-[60px] max-h-[40px]"
                              alt={item?.attributes?.alternativeText}
                              type={"icon"}
                            />
                          }
                        </span>
                      ))}
                  </Slider>
                </div>
            </div>
        </Container>
    </section>
  )
}
