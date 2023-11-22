import React from "react";
import Container from "../common/Container";
import TestimonialCards from "app/components/common/TestimonialsCards";
import { apiEndpoint } from "app/scripts/fetch";
import dynamic from "next/dynamic";
import Link from "next/link";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ section_title, section_content }) => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
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

  const list = section_content
    ?.filter(
      (item) =>
        item.author_name != null &&
        item.designation != null &&
        item.text != null
    )
    .map(
      ({
        text,
        author_name,
        designation,
        review,
        image,
        key,
        alternativeText,
      }) => ({
        image_url: image?.data?.attributes?.url
          ? image?.data?.attributes?.url
          : null,
        author: author_name,
        rol: designation,
        p: text,
        rating: review || 0,
        key: key,
        alternativeText: image?.data?.attributes?.alternativeText,
      })
    );
  // const { h, p } = section_title
  return (
    <div>
      <Container className="md:py-[55px] py-[30px]">
        <div className="flex justify-center items-center">
          <div className="pb-10">
            <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center md:mb-3 mb-2">
              {section_title?.h}
            </h5>
            <p className="font-sans font-[400] text-[14px]">
              {section_title?.p}
            </p>
          </div>
        </div>
        <div className="testimonial-bg-block">
          <Slider {...settings}>
            {list && list.length
              ? list.map((item, index) => (
                  <TestimonialCards
                    index={index}
                    image_url={item.image_url}
                    p={item.p}
                    author={item.author}
                    rating={item.rating}
                    rol={item.rol}
                    key={index}
                    alternativeText={item.alternativeText}
                  />
                ))
              : []}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
