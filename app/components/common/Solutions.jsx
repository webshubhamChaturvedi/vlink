import React from 'react'
import Container from './Container'
import CloudinaryImage from 'app/components/common/CloudinaryImage'

export default function Solutions({solutions}) {

  console.log("solutions", solutions);
  return (
    <section className="lg:py-[55px] py-[35px]">
            <Container>
              <div className="grid grid-cols-12 gap-16">
              <div className="lg:col-span-6 col-span-12 relative">
                  {solutions?.images?.map((items, key)=>(
                    <div key={key} className={`${key === 0 ? "left-0" : key === 1 ? "left-[100px]" : key === 2 ? "left-[200px]" : ""} absolute max-w-[350px]`}>
                      <CloudinaryImage
                        backendImgUrl={items?.image?.data?.attributes?.url}
                        alt="arrow-right-white"
                        className="w-full"
                        type="isDesktop"
                      />
                    </div>
                  ))}
                </div>
                <div className="lg:col-span-6 col-span-12">
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
            </Container>
          </section>
  )
}
