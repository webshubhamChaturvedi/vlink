import React from "react";
import Container from "./Container";
import CloudinaryImage from "../common/CloudinaryImage";
import Link from "next/link";

export default function OurWork({ work, isWorkHome = false }) {
  return (
    <section
      className={`${
        isWorkHome ? "lg:pt-[55px] pt-[35px]" : "lg:py-[55px] py-[35px]"
      }`}
    >
      <Container>
        <div className="md:mb-[55px] mb-[30px]">
          <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
            <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
              {work?.bgTitle}
            </span>
            <span class="w-[100%] font-bold relative mt-[-30px] block">
              {work?.title}
            </span>
          </h4>
        </div>
        {work?.WorkList.map((items, key) => (
          <div
            key={key}
            className={`flex md:flex-wrap flex-wrap md:justify-around md:mb-10 mb-8 ${
              key % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`relative group md:basis-8/12 w-full md:mb-0 mb-10`}
            >
              <div
                className="relative overflow-hidden rounded-[10px] mb-3"
                style={{ height: "calc(100% - 80px)" }}
              >
                {items?.link1 ? (
                  <Link key={key} href={`${items?.link1}`}>
                    <CloudinaryImage
                      backendImgUrl={items?.image?.data?.attributes.url}
                      alt={items?.image?.data?.alternativeText}
                        type="isTablet"
                      className={
                        "h-full w-full transform transition duration-1000 hover:scale-110"
                      }
                    />
                  </Link>
                ) : (
                  <CloudinaryImage
                    backendImgUrl={items?.image?.data?.attributes.url}
                    alt={items?.image?.data?.alternativeText}
                    type="isTablet"
                    className={
                      "h-full w-full transform transition duration-1000 hover:scale-110"
                    }
                  />
                )}
              </div>
              <div>
                <h6 className="relative w-full text-[#000F26] text-[24px] font-[600]">
                  {items?.title}
                  {items?.link1 && (
                    <Link
                      key={key}
                      href={`${items?.link1}`}
                      className="absolute top-0 bottom-0 left-0 right-0"
                    >
                      {" "}
                    </Link>
                  )}
                </h6>
                <p className="relative w-full text-[#3E3E3E] text-[16px] font-[400]">
                  {items?.description}
                  {items?.link1 && (
                    <Link
                      key={key}
                      href={`${items?.link1}`}
                      className="absolute top-0 bottom-0 left-0 right-0"
                    >
                      {" "}
                    </Link>
                  )}
                </p>
              </div>
            </div>
            <div
              className={`relative md:basis-4/12 w-full ${
                key % 2 === 1
                  ? "md:pr-[40px] pr-[0px]"
                  : "md:pl-[40px] pl-[0px]"
              }`}
            >
              <div
                className="relative overflow-hidden rounded-[10px] mb-3"
                style={{ height: "calc(100% - 80px)" }}
              >
                <CloudinaryImage
                  backendImgUrl={items?.image2?.data?.attributes.url}
                  alt={items?.image2?.data?.alternativeText}
                  type="isTablet"
                  className={
                    "h-full w-full transform transition duration-1000 hover:scale-110"
                  }
                />
                {items?.link2 && (
                  <Link
                    key={key}
                    href={`${items?.link2}`}
                    className="absolute top-0 bottom-0 left-0 right-0"
                  >
                    {" "}
                  </Link>
                )}
              </div>
              <div>
                <h6 className="relative w-full text-[#000F26] lg:text-[24px] text-[20px] font-[600]">
                  {items?.title2}{" "}
                  {items?.link2 && (
                    <Link
                      key={key}
                      href={`${items?.link2}`}
                      className="absolute top-0 bottom-0 left-0 right-0"
                    >
                      {" "}
                    </Link>
                  )}
                </h6>
                <p className="relative w-full text-[#3E3E3E] lg:text-[16px] text-[14px] font-[400]">
                  {items?.description2}{" "}
                  {items?.link2 && (
                    <Link
                      key={key}
                      href={`${items?.link2}`}
                      className="absolute top-0 bottom-0 left-0 right-0"
                    >
                      {" "}
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
