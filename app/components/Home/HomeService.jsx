import React from "react";
import Container from "../common/Container";
import CloudinaryImage from "../common/CloudinaryImage";
import "./homeservice.css";
import Link from "next/link";
import { createMarkup } from "app/scripts/utils";
export default function HomeService({ datas, isHomeService = false }) {
  return (
    <section className="lg:py-[55px] py-[30px]">
      <Container>
        <div className="md:basis-full lg:mb-[55px] mb-[35px]">
          <h4 className="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
              {datas?.bgText}
            </span>
            <span className="w-[100%] font-[600] relative mt-[-30px] block max-w-[1200px] mx-auto">
              {datas?.title}
            </span>
          </h4>
          <p className="max-w-[850px] mx-auto leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]">
            Benefit from our top-notch IT services to build efficient
            tailored-fit software with a high ROI
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {datas?.projectList?.map((data, key) => (
            <div
              key={key}
              className="group relative overflow-hidden service-sec-list lg:h-[240px] shadow-[0px_20px_40px_-10px_#0000001A] rounded-[20px] px-[30px] py-[40px] border-b-4"
              style={{
                backgroundColor: data?.bgColor1,
                borderColor: data?.bgColor2,
              }}
            >
              <CloudinaryImage
                backendImgUrl={data?.image?.data?.attributes?.url}
                alt={data?.image?.data?.attributes?.alternativeText}
                type="icon"
                className="mb-3 w-[60px] h-[60px]"
              />
              <h6 className="text-[20px] text-[#050748] font-[600] mb-2 relative">
                {data?.link ? (
                  <Link
                    key={key}
                    href={`${data?.link}`}
                    className="block group-hover:text-[#1155cc]"
                    >
                    {data?.title}
                  </Link>
                ) :
                data?.title}
              </h6>
              <ul className="pb-3">
                {datas?.projectTags?.map(
                  (items, key) =>
                    data?.key === items?.key && (
                      <li key={key} className={`inline-flex items-center py-0`}>
                        {items.tagText}{" "}
                        <span className="w-[1px] h-[20px] bg-[#4646716B] mx-2 inline-block"></span>
                      </li>
                    )
                )}
              </ul>
              <div
                dangerouslySetInnerHTML={createMarkup(data?.descriptionEditor)}
                className="text-[#464671] text-[16px] font-[400] contentBlock"
              >
                {/* {data?.description} */}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:mt-[55px] mt-[35px] text-center flex justify-center">
          <Link
            href={`${datas?.btn_Link}`}
            className="text-white bg-[#0A1643] border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block px-7 py-3"
            // onClick={setModalScheduleCall}
          >
            <span
              className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
            ></span>
            <span
              className={`flex items-center font-[600] relative group-hover:text-[#000] text-[16px]`}
            >
              {datas?.btn_text}
              <svg
                className="ml-3 stroke-white group-hover:stroke-black"
                width="14"
                height="14"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 1.50781L16 10.3762L8.5 19.2446"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.09375 1.50781L9.59375 10.3762L2.09375 19.2446"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
