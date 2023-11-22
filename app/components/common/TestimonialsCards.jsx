import Image from "next/image";
import React from "react";
import StarRatingComponent from "react-rating-stars-component";
import CloudinaryImage from "../common/CloudinaryImage";

const TestimonialsCards = ({
  p,
  author,
  rol,
  rating,
  image_url,
  index,
  alternativeText,
}) => {
  return (
    <div
      key={`testimonialCardList-${index}`}
      className="p-6 bg-white pt-20 pb-14 rounded-[11px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] items-center"
    >
      <div>
        <div className="absolute rounded-full -translate-y-full top-[75px]">
          {/* <Image
            alt={image_url || "avatar"}
            height={120}
            width={120}
            src={image_url}
          /> */}
          <CloudinaryImage
            backendImgUrl={image_url}
            className="w-[120px] h-[120]"
            alt={alternativeText}
            type={"icon"}
          />
        </div>
        <div>
          <div className="flex">
            <div className={"w-32 py-6"}>
              <Image
                alt="icon"
                width={40}
                height={26}
                src={"/icons/quotes.svg"}
              />
            </div>
            <p
              className={`pr-2 h-[129px] pl-4 pt-6 text-[14px]  text-[#868686]  line-clamp-5 md:line-clamp-0 mb-12`}
            >
              {p}
            </p>
          </div>
          <section className="bg-testimonialFrame py-6">
            <div className="flex justify-between items-center px-8">
              <div className={`pl-2`}>
                <p className="text-[#000] line-clamp-1 w-[69px]  lg:w-full text-[10px] md:text-[10px] lg:text-[17px] font-semibold mb-2">
                  {author}
                </p>
                <p className="text-[#343434] line-clamp-1 w-[69px]  lg:w-full text-[10px] md:text-[10px] lg:text-[15px] font-normal">
                  {rol}
                </p>
              </div>
              <div className="hidden md:block star-flex">
                <StarRatingComponent
                  size={20}
                  count={5}
                  value={parseInt(rating)}
                  isHalf={true}
                  edit={false}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsCards;
