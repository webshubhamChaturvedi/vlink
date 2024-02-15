import React, {useRef, useEffect} from 'react'
import Container from './Container'
import CloudinaryImage from 'app/components/common/CloudinaryImage'
import { motion, useScroll, useTransform, delay } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Solutions({solutions}) {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="lg:py-[55px] py-[35px]">
            <Container>
              <div className="lg:grid grid-cols-12 lg:gap-16 gap-8"
              >
                <div className="lg:col-span-6 col-span-12 relative lg:mb-[0px] md:mb-[30px] mb-[20px]" >
                    {solutions?.images?.map((items, key)=>(
                      <>
                      {key === 0 ?
                        <div key={key} className={`left-0 max-w-[310px]`} data-aos="fade-left" 
                        >
                              <CloudinaryImage
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                alt="arrow-right-white"
                                className="w-full"
                                type="smallimg"
                                
                              />
                          
                        </div>
                        : 
                        key === 1 ?
                          <div key={key} className={`lg:left-[100px] left-[40px] absolute top-0 max-w-[330px]`} data-aos="fade-left" data-aos-delay="500">
                                <CloudinaryImage
                                  backendImgUrl={items?.image?.data?.attributes?.url}
                                  alt="arrow-right-white"
                                  className="w-full"
                                  type="smallimg"
                                />
                          </div>
                        : 
                        key === 2 ?
                          <div key={key} className={`lg:left-[200px] left-[60px] absolute top-0 max-w-[350px]`} data-aos="fade-left" data-aos-delay="1000">
                                <CloudinaryImage
                                  backendImgUrl={items?.image?.data?.attributes?.url}
                                  alt="arrow-right-white"
                                  className="w-full"
                                  type="smallimg"
                                />
                          </div>
                        :
                        ""
                      }</>))}
                </div>
                <div className="lg:col-span-6 col-span-12 flex items-center">
                  <div>
                    <h4 className="relative font-bold text-white xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3">
                      <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[140px] leading-[80px]">
                        {solutions?.bgTitle}
                      </span>
                      <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
                        {solutions?.title}
                      </span>
                    </h4>
                    <p className="text-left leading-8 font-sans font-[400] lg:text-[16px] text-[14px] text-[#FFFFFF]">
                      {solutions?.description}
                    </p>
                  </div>
                </div>
                
              </div>
            </Container>
          </section>
  )
}
