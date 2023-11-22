import React from "react";
import SuccessStoryCard from "./SuccessStoryCard";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SuccessStoriesCards = ({ list }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    <Slider {...settings}>
      {list && list.length
        ? list.map((item, index) => (
            <SuccessStoryCard
              item={item?.attributes?.section0?.lists[0]}
              slug={item?.attributes?.slug}
              key={`sucesssStorieCardList-${index}`}
            />
          ))
        : []}
    </Slider>
  );
};
export default SuccessStoriesCards;
