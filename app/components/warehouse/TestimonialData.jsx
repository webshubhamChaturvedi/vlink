import { apiEndpoint } from "app/scripts/fetch";
import React from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloudinaryImage from "../common/CloudinaryImage";
export default function TestimonialData({ customers }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const list = customers?.testimonials
    ?.filter(
      (item) =>
        item.name != null && item.designation != null && item.rich_text != null
    )
    .map(({ rich_text, name, designation, image }) => ({
      image_url: image?.data?.attributes?.url
        ? image?.data?.attributes?.url
        : null,
      author: name,
      rol: designation,
      p: rich_text,
      alternativeText: image?.data?.attributes?.alternativeText,
    }));

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
              className="inline-block font-bold bg-no-repeat bg-[center_top_20%] bg-size-80 pt-16 max-w-[800px]"
              style={{
                backgroundImage: `url(${apiEndpoint(
                  customers?.image?.data?.attributes?.url
                )})`,
              }}
            >
              {customers?.title}
            </span>
          </h4>
        </div>
      </div>
      <div className="bg-[#F9F9F9] py-10">
        <div className="container">
          <Slider {...settings}>
            {list && list.length
              ? list.map((item, key) => (
                  <div key={key}>
                    <div className="flex flex-wrap items-center justify-space-between">
                      <div className="lg:basis-4/12 w-full text-center lg:mb-0 mb-5">
                        <CloudinaryImage
                          backendImgUrl={item.image_url}
                          className="w-[150px] h-[150px] mx-auto rounded-[100%] shadow-[0px_0px_20px_0px_#00000040] block mb-[20px_!important]"
                          alt={item.alternativeText}
                          type="icon"
                        />
                        <h6 className="xl:text-[30px] text-[24px] text-[#000] font-[700] font_numito">
                          {item?.author}
                        </h6>
                        <p className="lg:text-[20px] text-[18px] text-[#383838] font-[600] font_numito max-w-[300px] mx-auto">
                          {item?.rol}
                        </p>
                      </div>
                      <div className="lg:basis-8/12 w-full lg:pl-5 lg:text-left text-center">
                        <div className="max-w-[700px] mx-auto">
                          <p className="font_numito font-[600] text-[#383838] lg:text-[20px] text-[16px]">
                            {item?.p}
                          </p>
                        </div>
                      </div>
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
