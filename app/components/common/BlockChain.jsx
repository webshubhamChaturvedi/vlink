import React, { useState } from "react";
import Container from "./Container";
import ModalDownload from "./ModalDownload";
import CloudinaryImage from "../common/CloudinaryImage";
import { apiEndpoint } from "app/scripts/fetch";
import Image from "next/image";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function BlockChain({
  blockchain,
  isBlockChain = false,
  isCaseOffering = false,
  isGradient = false,
  isTxtClr,
  showDownload,
  Download_link,
  isJava=false
}) {
  const [modalDownload, setModalDownload] = useState(false);

  let caseTech = blockchain?.caseTech?.map((items, key) => ({
    title: items.title,
    description: items.description,
    icon: items.icon,
  }));

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  return (
    <section className={`${isJava ? "" : "lg:py-[55px] py-[35px]"}`}>
      <Container>
        <div className="lg:pb-[45px] pb-[30px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
              {blockchain?.title_bg}
            </span>
            <span className="w-[100%] font-bold relative mt-[-30px] block">
              {blockchain?.title}
            </span>
          </h4>
          <p className="text-center leading-8 font-sans font-[400] text-[16px] text-[#7F7D7D]">
            {blockchain?.description}
          </p>
        </div>
      </Container>
      {blockchain?.blocks.map((items, key) => (
        <motion.div
          className={`${isCaseOffering ? "" : "lg:py-[55px] py-[35px]"} group`}
          key={key}
          style={{
            background: isGradient ? `` : items?.bgColor,
          }}
          onMouseMove={handleMouse}
        >
          <Container>
            <div
              className={`${
                isCaseOffering
                  ? "casediv rounded-[20px] p-5 md:p-[40px] mb-10"
                  : "max-w-[1200px]"
              } flex items-center md:flex-nowrap flex-wrap md:justify-around relative mx-auto ${
                key % 2 === 1 ? "flex-row-reverse" : ""
              }`}
              style={{
                background: isGradient
                  ? `linear-gradient(140deg, ${items?.bgColor} 0%, ${items?.bgColor1} 75%)`
                  : items?.bgColor,
              }}
            >
              <motion.div
                className={`md:basis-5/12 w-full md:mb-0 mb-4`}
                style={{ rotateX, rotateY }}
              >
                {items?.image?.data?.attributes?.url && (
                  <CloudinaryImage
                    backendImgUrl={items?.image?.data?.attributes?.url}
                    alt={items?.image?.data?.attributes?.alternativeText}
                    type="smallimg"
                    style={{
                      transition: "1.2s cubic-bezier(.17,.85,.438,.99)",
                    }}
                    className={"group-hover:scale-105 transform-gpu"}
                  />
                )}
              </motion.div>
              <div
                className={`md:basis-7/12 w-full md:mb-0 mb-0 ${
                  key % 2 === 1
                    ? "md:mr-[100px] mr-[0px]"
                    : "md:ml-[100px] ml-[0px]"
                }`}
              >
                <p
                  className="inline-block rounded-[30px] px-3 py-1 text-[#000919] text-[14px] font-[600] mb-4"
                  style={{ backgroundColor: items?.TagBgColor }}
                >
                  {items?.tagText}
                </p>
                <h6
                  className={`mb-4 font-bold md:text-[34px] text-[24px]`}
                  style={{ color: items?.title_color }}
                >
                  {items?.title}
                </h6>
                <p
                  className="mb-5 text-[#333333] text-[16px]"
                  style={{ color: isTxtClr }}
                >
                  {items?.description}
                </p>
                {isBlockChain ? (
                  <ul className="">
                    {items?.list_1 && 
                      <li className="mb-3 w-[100%] flex items-start">
                        <span
                          style={{
                            backgroundColor: items.circleColor,
                          }}
                          className="flex bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mt-[5px] mr-3"
                        ></span>
                        <span style={{width: `calc(100% - 20px)`}}>{items?.list_1}</span>
                      </li>
                    }
                    {items?.list_2 &&
                      <li className="mb-3 w-[100%] flex items-start">
                        <span
                          style={{
                            backgroundColor: items.circleColor,
                          }}
                          className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mt-[5px] mr-3"
                        ></span>
                        <span style={{width: `calc(100% - 20px)`}}>{items?.list_2}</span>
                      </li>
                    }
                    {items?.list_3 &&
                      <li className="mb-3 w-[100%] flex items-start">
                        <span
                          style={{
                            backgroundColor: items.circleColor,
                          }}
                          className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mt-[5px] mr-3"
                        ></span>
                        <span style={{width: `calc(100% - 20px)`}}>{items?.list_3}</span>
                      </li>
                    }
                    {items?.list4 &&
                      <li className="mb-3 w-[100%] flex items-start">
                        <span
                          style={{
                            backgroundColor: items.circleColor,
                          }}
                          className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mt-[5px] mr-3"
                        ></span>
                        <span style={{width: `calc(100% - 20px)`}}>{items?.list4}</span>
                      </li>
                    }
                    {items?.list5 &&
                      <li className="mb-3 w-[100%] flex items-start">
                        <span
                          style={{
                            backgroundColor: items.circleColor,
                          }}
                          className="inline-block bg-[#CAC0FF] w-[20px] h-[20px] rounded-[100%] mt-[5px] mr-3"
                        ></span>
                        <span style={{width: `calc(100% - 20px)`}}>{items?.list5}</span>
                      </li>
                    }
                  </ul>
                ) : (
                  ""
                )}

                <div className="grid grid-cols-2 mt-7 md:gap-x-20 gap-x-5">
                  {caseTech?.map((items, key) => (
                    <div
                      key={key}
                      className={`${key == 1 ? "" : "border-r"}`}
                      style={{ color: isTxtClr }}
                    >
                      <h6 className="text-[24px] font-[600]">
                        {items?.icon?.data?.attributes?.url && (
                          <CloudinaryImage
                            backendImgUrl={items?.icon?.data?.attributes?.url}
                            alt="arrow-right-white"
                            className="inline-block mr-2 w-[20px] h-[20px]"
                            type="icon"
                          />
                        )}
                        {items?.title}
                      </h6>
                      <p className="text-[14px] font-[400]">
                        {items?.description}
                      </p>
                    </div>
                  ))}
                </div>
                {items?.btnLink && (
                  <div class="btndiv mt-10">
                    <Link class="button3 btn-3" href={`${items?.btnLink}`}>
                      <span className="inline-block font-sans font-[600] py-3 px-6">
                        {items?.btnText}
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </motion.div>
      ))}
    </section>
  );
}
