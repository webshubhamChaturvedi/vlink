import React from "react";
import Container from "./Container";
import CloudinaryImage from "./CloudinaryImage";
import Link from "next/link";
import "./integration.css";

export default function Integration({ data }) {
  return (
    <section
      className="lg:py-[55px] py-[35px]"
      style={{
        background: `linear-gradient(180deg, #011532 0%, #00050C 100%)`,
      }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-10 gap-4">
          {data?.Grid?.map((items, key) => (
            <div
              key={key}
              className={`${key === 1 ? "" : ""} text-[#fff] casetopbtn group`}
            >
              <div
                className={`group-hover:bg-[${items?.btnBgClr}] rounded-[20px] md:p-4`}
                title={items?.title}
              >
                <h6 className="xl:text-[40px] md:text-[30px] text-[24px] font-[800] mb-3 flex items-center justify-between md:flex-nowrap flex-wrap">
                  <span
                    className="block  MobileFullwidth"
                    style={{ width: "calc(100% - 150px)" }}
                  >
                    {items?.title.length > 20
                      ? items?.title.substr(0, 20) + "..."
                      : items?.title}
                  </span>
                  <span className="btncase md:w-[150px]">
                    <Link
                      href={`${items?.btnLink}`}
                      className={`group px-3 lg:py-2 py-1 bg-[#fff] text-[#000] border-0 inline-flex relative rounded overflow-hidden text-center inline-block`}
                    >
                      <span
                        class={`bg-[#0050D5] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                      ></span>
                      <span
                        className={`whitespace-nowrap group-hover:text-white font-[600] relative flex items-center md:text-[14px] text-[12px]`}
                      >
                        {items?.btnText}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="16"
                          viewBox="0 0 512 512"
                          className="group-hover:fill-[#fff] ml-4"
                        >
                          <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                        </svg>
                      </span>
                    </Link>
                  </span>
                </h6>
                <p className="lg:text-[16px] text-[14px] font-[400] mb-10">
                  {items?.description}
                </p>
                {items?.image?.data?.attributes?.url && (
                  <div className="overflow-hidden integration-img rounded-[20px]">
                    <CloudinaryImage
                      backendImgUrl={items?.image?.data?.attributes?.url}
                      alt={items?.image?.data?.attributes?.url}
                      style={{
                        transition: "1.2s cubic-bezier(.17,.85,.438,.99)",
                      }}
                      className={
                        "group-hover:scale-105 transform-gpu block w-full h-full object-cover"
                      }
                      type="smallimg"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
