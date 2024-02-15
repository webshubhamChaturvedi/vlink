import { apiEndpoint } from "app/scripts/fetch";
import React from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloudinaryImage from "../common/CloudinaryImage";
import "./testimonialdata.css";
import LazyYoutube from "../common/LazyYoutube";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Container from "../common/Container";

export default function TestimonialData({
  customers,
  isBenchData = false,
  testimonials,
  isNewTestimonial = false,
  isBenchTest= false,
}) {
  const settings = {
    dots: true,
    arrows: false,
    // infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const list = customers?.testimonials
    ?.filter(
      (item) =>
        item.name != null && item.designation != null && item.rich_text != null
    )
    .map(({ rich_text, name, designation, image, title }) => ({
      image_url: image?.data?.attributes?.url
        ? image?.data?.attributes?.url
        : null,
      author: name,
      rol: designation,
      p: rich_text,
      title: title,
      alternativeText: image?.data?.attributes?.alternativeText,
    }));

  return (
    <section
      className="md:py-[55px] py-[30px] testimonialdata"
      style={{ backgroundColor: isBenchData && "#000D3B" }}
    >
      <Container>
        {isBenchData ? (
          <div className="pb-[35px]">
            <h4
              className={`text-[#fff] relative font-bold  xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3`}
            >
              <span className="lg:text-[100px] text-[45px] font-[800] block w-[100%] lg:leading-[100px] leading-[45px] text_stocks barlow text-[transparent]">
                {"Testimonial"}
              </span>
              <span className="w-[100%] font-bold relative mt-[-30px] block">
                {customers?.title && customers?.title}
              </span>
            </h4>
            {customers?.description && (
              <p
                className={`${
                  isBenchData ? "text-[#fff]" : "text-[#7F7D7D]"
                } text-center leading-8 font-sans font-[400] text-[16px]`}
              >
                {customers?.description}
              </p>
            )}
          </div>
        ) : isNewTestimonial ? (
          <div className="pb-[35px]">
            {testimonials?.Testimonial?.h && (
              <h4
                className={`text-[#000] relative font-bold  xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3`}
              >
                {testimonials?.Testimonial?.bgTitle && (
                  <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                    {testimonials?.Testimonial?.bgTitle}
                  </span>
                )}
                <span className="w-[100%] font-bold relative mt-[-30px] block">
                  {testimonials?.Testimonial?.h}
                </span>
              </h4>
            )}
            {testimonials?.Testimonial?.p && (
              <p
                className={`text-[#7F7D7D] text-center leading-8 font-sans font-[400] text-[16px]`}
              >
                {testimonials?.Testimonial?.p}
              </p>
            )}
          </div>
        ) : (
          <div className="md:mb-[55px] mb-[30px]">
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
        )}
      </Container>
      <div className={`${isBenchData ? "bg-[#000D3B] py-10" : "bg-[#F9F9F9] py-10"}`}>
        <Container>
          <Slider {...settings}>
            {list && list.length
              ? list.map((item, key) => (
                  <div key={key}>
                    <div className="flex flex-wrap items-center justify-space-between">
                      <div className="lg:basis-4/12 w-full text-center lg:mb-0 mb-5 relative">
                        {item.image_url && (
                          <CloudinaryImage
                            backendImgUrl={item.image_url}
                            className="object-cover w-[150px] h-[150px] mx-auto rounded-[100%] shadow-[0px_0px_20px_0px_#00000040] block mb-[20px_!important]"
                            alt={item.alternativeText}
                            type="icon"
                          />
                        )}
                        <h6
                          className={`${
                            isBenchData ? "text-[#fff]" : "text-[#000]"
                          } xl:text-[30px] text-[24px] font-[700] font_numito`}
                        >
                          {item?.author && item?.author}
                        </h6>
                        <p
                          className={`${
                            isBenchData ? "text-[#fff]" : "text-[#383838]"
                          } lg:text-[20px] text-[18px] font-[600] font_numito max-w-[300px] mx-auto`}
                        >
                          {item?.rol && item?.rol}
                        </p>
                        <svg
                          className="absolute top-[-90px]"
                          width="151"
                          height="151"
                          viewBox="0 0 151 151"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M56.625 70.7812H28.8316C29.7085 64.941 31.7939 59.3479 34.9546 54.3592C38.1152 49.3705 42.2815 45.0958 47.1875 41.8081L55.6341 36.1456L50.4434 28.3125L41.9969 33.975C34.887 38.713 29.0567 45.1328 25.0232 52.6647C20.9897 60.1966 18.8779 68.6077 18.875 77.1516V108.531C18.875 111.034 19.8693 113.435 21.6392 115.205C23.4091 116.974 25.8095 117.969 28.3125 117.969H56.625C59.128 117.969 61.5284 116.974 63.2983 115.205C65.0682 113.435 66.0625 111.034 66.0625 108.531V80.2188C66.0625 77.7158 65.0682 75.3153 63.2983 73.5454C61.5284 71.7756 59.128 70.7812 56.625 70.7812ZM122.688 70.7812H94.8941C95.771 64.941 97.8564 59.3479 101.017 54.3592C104.178 49.3705 108.344 45.0958 113.25 41.8081L121.697 36.1456L116.553 28.3125L108.059 33.975C100.95 38.713 95.1192 45.1328 91.0857 52.6647C87.0522 60.1966 84.9404 68.6077 84.9375 77.1516V108.531C84.9375 111.034 85.9318 113.435 87.7017 115.205C89.4716 116.974 91.872 117.969 94.375 117.969H122.688C125.19 117.969 127.591 116.974 129.361 115.205C131.131 113.435 132.125 111.034 132.125 108.531V80.2188C132.125 77.7158 131.131 75.3153 129.361 73.5454C127.591 71.7756 125.19 70.7812 122.688 70.7812Z"
                            fill="white"
                            fillOpacity="0.19"
                          />
                        </svg>
                      </div>
                      <div className="lg:basis-8/12 w-full lg:pl-5 lg:text-left text-center">
                        <div className="max-w-[700px] mx-auto">
                          <h6
                            className={`${
                              isBenchData ? "text-[#fff]" : "text-[#000]"
                            } text-[35px] font-[700] mb-2`}
                          >
                            {item?.title && item?.title}
                          </h6>
                          <p
                            className={`${
                              isBenchData ? "text-[#fff]" : "text-[#383838]"
                            } font_numito font-[600] lg:text-[20px] text-[16px]`}
                          >
                            {item?.p && item?.p}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : []}
            {testimonials?.testimonial_content &&
              testimonials?.testimonial_content?.map((items, key) => (
                <div key={key}>
                  <div className="flex flex-wrap items-center justify-space-between">
                    <div className="lg:basis-4/12 w-full text-center lg:mb-0 mb-5 relative">
                      {items?.image?.data?.attributes ? (
                        <CloudinaryImage
                          backendImgUrl={items?.image?.data?.attributes?.url}
                          className="object-cover w-[150px] h-[150px] mx-auto rounded-[100%] shadow-[0px_0px_20px_0px_#00000040] block mb-[20px_!important]"
                          alt={items?.image?.data?.attributes?.alternativeText}
                          type="icon"
                        />
                      ) : (
                        <>
                          <LazyYoutube videoId={items?.youtubeVideo} />
                        </>
                      )}
                      <h6
                        className={`${
                          isBenchData ? "text-[#fff]" : "text-[#000]"
                        } xl:text-[30px] text-[22px] font-[700] font_numito`}
                      >
                        {items?.author_name && items?.author_name}
                      </h6>
                      <p
                        className={`${
                          isBenchData ? "text-[#fff]" : "text-[#383838]"
                        } lg:text-[20px] text-[16px] font-[600] font_numito max-w-[300px] mx-auto`}
                      >
                        {items?.designation && items?.designation}
                      </p>
                      <svg
                        className="absolute top-[-60px]"
                        width="151"
                        height="151"
                        viewBox="0 0 151 151"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56.625 70.7812H28.8316C29.7085 64.941 31.7939 59.3479 34.9546 54.3592C38.1152 49.3705 42.2815 45.0958 47.1875 41.8081L55.6341 36.1456L50.4434 28.3125L41.9969 33.975C34.887 38.713 29.0567 45.1328 25.0232 52.6647C20.9897 60.1966 18.8779 68.6077 18.875 77.1516V108.531C18.875 111.034 19.8693 113.435 21.6392 115.205C23.4091 116.974 25.8095 117.969 28.3125 117.969H56.625C59.128 117.969 61.5284 116.974 63.2983 115.205C65.0682 113.435 66.0625 111.034 66.0625 108.531V80.2188C66.0625 77.7158 65.0682 75.3153 63.2983 73.5454C61.5284 71.7756 59.128 70.7812 56.625 70.7812ZM122.688 70.7812H94.8941C95.771 64.941 97.8564 59.3479 101.017 54.3592C104.178 49.3705 108.344 45.0958 113.25 41.8081L121.697 36.1456L116.553 28.3125L108.059 33.975C100.95 38.713 95.1192 45.1328 91.0857 52.6647C87.0522 60.1966 84.9404 68.6077 84.9375 77.1516V108.531C84.9375 111.034 85.9318 113.435 87.7017 115.205C89.4716 116.974 91.872 117.969 94.375 117.969H122.688C125.19 117.969 127.591 116.974 129.361 115.205C131.131 113.435 132.125 111.034 132.125 108.531V80.2188C132.125 77.7158 131.131 75.3153 129.361 73.5454C127.591 71.7756 125.19 70.7812 122.688 70.7812Z"
                          fill="white"
                          fillOpacity="0.19"
                        />
                      </svg>
                    </div>
                    <div className="lg:basis-8/12 w-full lg:pl-5 lg:text-left text-center">
                      <div className="max-w-[700px] mx-auto">
                        <h6
                          className={`${
                            isBenchData ? "text-[#fff]" : "text-[#000000]"
                          } md:text-[35px] text-[24px] font-[700] mb-2`}
                        >
                          {items?.title && items?.title}
                        </h6>
                        <p
                          className={`${
                            isBenchData ? "text-[#fff]" : "text-[#383838]"
                          } font_numito font-[600] lg:text-[20px] text-[16px]`}
                        >
                          {items?.text && items?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </Container>
      </div>
    </section>
  );
}
