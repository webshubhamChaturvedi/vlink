import { createMarkup } from "app/scripts/utils";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Employee({ section }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      {section?.length
        ? section?.map((section) => (
            <>
              <section className="overflow-hidden font-['Open_Sans'] md:py-[55px] py-[30px] bg-no-repeat bg-[url('/img/dot-circle.svg')]">
                <div className="container mx-auto px-4">
                  <h5 className="font-[700] xl:text-4xl lg:text-[32px] text-[22px] text-[#030303] text-center lg:mb-[100px] mb-[40px]">
                    Employee
                    <span className="text-[#62207E] ml-2">Testimonials</span>
                  </h5>
                  <div className="grid lg:grid-cols-12 border-[#337294] border-b ">
                    <div className="lg:col-span-8 col-span-12 sm:pl-12 lg:pr-[80px] pl-8 lg:text-left text-center relative">
                      <img
                        src="/img/comma.svg"
                        alt="inverted comma"
                        className="absolute left-[-5px] top-[-50px] "
                      />
                      <div
                        className="font-[400] md:text-[18px] text-[16px] md:leading-[27px] leading-[22px] text-[#2B2B2D] relative"
                        dangerouslySetInnerHTML={createMarkup(section?.body)}
                      ></div>
                      <p className="mt-8 font-[700] md:text-[23px] text-[18px] text-[#2B2B2D] tracking-[0.04em]">
                        {section?.author}
                      </p>
                      <label className="font-[400] text-[15px] tracking-[0.04em] text-[#2B2B2D] block mb-5">
                        {section?.designation}
                      </label>
                    </div>
                    <div className="lg:col-span-4 col-span-12 order-first lg:order-last">
                      <figure className="lg:m-0 mb-[50px] bg-no-repeat bg-[url('/img/ball.svg')] bg-cover bg-center">
                        <CloudinaryImage
                          backendImgUrl={section?.image?.data?.attributes?.url}
                          alt={
                            section?.image?.data?.attributes?.alternativeText
                          }
                          className="mx-auto max-h-[24rem]"
                          type="smallimg"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ))
        : []}
    </Slider>
  );
}
