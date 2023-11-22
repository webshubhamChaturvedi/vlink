import React from "react";
import Container from "./Container";

import CloudinaryImage from "../common/CloudinaryImage";

export default function BlockChain({blockchain, isBlockChain = false}) {

  return (
    <section className="lg:py-[55px] py-[35px]">
      <Container>
        <div className="lg:pb-[55px] pb-[35px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                {blockchain.title_bg}
            </span>
            <span className="w-[100%] font-bold relative mt-[-30px] block">
                {blockchain.title}
            </span>
          </h4>
          <p className="text-center leading-8 font-sans font-[400] text-[16px] text-[#7F7D7D]">
            {blockchain.description}
          </p>
        </div>
      </Container>
      {blockchain?.blocks.map((items, key) => (
        <div
          className={`group transition duration-300 ease-in-out lg:py-[55px] py-[35px]`}
          key={key}
          style={{backgroundColor: items?.bg_color}}
        >
          <Container>
            <div
              className={`flex items-center md:flex-nowrap flex-wrap md:justify-around relative max-w-[1200px] mx-auto ${
                key % 2 === 1
                  ? "flex-row-reverse"
                  : ""
              }`}
            >
              
              <div className={`md:basis-5/12 w-full md:mb-0 mb-4`}>
                <CloudinaryImage
                  backendImgUrl={items?.image?.data?.attributes?.url}
                  alt={items?.image?.data?.attributes?.alternativeText}
                  type="smallimg"
                />
              </div>
              <div className={`md:basis-7/12 w-full md:mb-0 md:mb-8 mb-0 ${key % 2 === 1 ? "md:mr-[100px] mr-[0px]" : "md:ml-[100px] ml-[0px]"}`}>
                <h6 className={`mb-4 font-bold md:text-[34px] text-[24px]`}
                style={{color: items?.title_color}}>
                  {items?.title}
                </h6>
                <p className="mb-5 text-[#333333] text-[16px]">
                    {items?.description}
                </p>
                {isBlockChain ? 
                  <ul className="">
                      <li className="mb-3 w-[100%] flex flex-wrap items-center"><span style={{
                          backgroundColor: items.circleColor,
                      }} className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mr-3"></span> {items?.list_1}</li>
                      <li className="mb-3 w-[100%] flex flex-wrap items-center"><span style={{
                          backgroundColor: items.circleColor,
                      }} className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mr-3"></span> {items?.list_2}</li>
                      <li className="mb-3 w-[100%] flex flex-wrap items-center"><span style={{
                          backgroundColor: items.circleColor,
                      }} className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mr-3"></span> {items?.list_3}</li>
                  </ul>
                :
                  ""
                }
              </div>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
}
