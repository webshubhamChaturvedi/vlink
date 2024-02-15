import React from 'react'
import Container from '../common/Container';
import "app/components/CaseStudies/allcase.css"
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloudinaryImage from "app/components/common/CloudinaryImage"

export default function AllCase({allcase}) {

  const settings = {
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='lg:py-[100px] py-[35px] allcase'
    style={{backgroundImage: `linear-gradient(180deg, #DBECFF 0%, rgba(255, 255, 255, 0) 100%)`}}>
      <div>
        <Container>
          <div className="lg:pb-[55px] pb-[35px] max-w-[1000px]">
              <h4 className="relative font-bold text-[#383838] xl:text-4xl lg:text-[32px] text-[22px] xl:leading-[45px] lg:leading-[35px] mb-3">
                {allcase?.title}
              </h4>
              <p className='text-[#383838] text-[20px] font-[400]'>{allcase?.description}</p>
          </div>
        </Container>
        <Container className='mr-0 overflow-x-clip pr-0 pl-0'>
          <div className='allcase_slider'>
            <Slider {...settings}>
              {allcase?.Images?.map((items, key)=>(
                <>
                  <CloudinaryImage 
                    backendImgUrl={items?.image?.data?.attributes?.url}
                    alt={items?.image?.data?.alternativeText}
                    type="smallimg"
                    className="w-full"
                  />
                </>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  )
}
