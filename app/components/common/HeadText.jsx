import React, {useEffect} from "react";
import Container from "./Container";
import CloudinaryImage from "app/components/common/CloudinaryImage";
import Aos from "aos";
import "aos/dist/aos.css";

export default function HeadText({headText}) {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="lg:py-[55px] py-[35px] relative z-[1]">
      <Container>
        <div className="lg:grid grid-cols-12 gap-16">
          <div className="lg:col-span-5 col-span-12 lg:mb-[0px] md:mb-[30px] mb-[20px]" data-aos="fade-left" >
            <CloudinaryImage
              backendImgUrl={headText?.image?.data?.attributes?.url}
              alt="arrow-right-white"
              className="w-full md:max-w-[500px] max-w-full"
              type="smallimg"
            />
          </div>
          <div className="lg:col-span-7 col-span-12 flex flex-wrap items-center ">
            <div>
              <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3">
                <span className="lg:text-[80px] text-[40px] font-[800] gradient_text block w-[100%] xl:leading-[100px] leading-[80px]">
                  {headText?.bgTitle}
                </span>
                <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
                    {headText?.title}
                </span>
              </h4>
              <p className="text-left font-sans font-[400] lg:text-[20px] text-[16px] lg:leading-8 leading-6 text-[#383838]">{headText?.description}</p>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  );
}
