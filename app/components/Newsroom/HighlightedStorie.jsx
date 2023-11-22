import React from "react";
import Image from "next/image";
import { GetParagraph, createMarkup } from "app/scripts/utils";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";

export default function HighligthedStorie({ section }) {
  return (
    <div className="container mx-auto px-4 md:py-20 py-[30px]">
      <div className="md:flex shadow-[0px_0px_25px_rgba(0,0,0,0.1)] bg-[#fff]">
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 relative ">
            {/* <img
              src={process.env.NEXT_PUBLIC_API_URL+section?.image?.data?.attributes?.url}
              alt={section?.image?.data?.attributes?.alternativeText || section?.image?.data?.attributes?.name}
              layout="responsive"
              className="object-cover w-[100%]"
            /> */}
            <CloudinaryImage
              backendImgUrl={section?.image?.data?.attributes?.url}
              alt={section?.image?.data?.attributes?.alternativeText}
              className="object-cover w-[100%]"
            />
          </div>
          <div className="lg:col-span-7 p-6">
            <div className=" border border-company  rounded-full mb-4 inline-block">
              <p className="text-company text-left leading-7 text-[14px] font-normal py-1 px-6">
                {"HIGHLIGHTED STORY"}
              </p>
            </div>
            <h5 className="md:text-[22px] text-[18px] font-bold text-[#2B2B2D] text-left mt-0 md:mb-4 mb-2">
              {section?.h1_black}
            </h5>
            <h5 className="text-[14px] text-left text-['#353535'] leading-5 text-sm pt-2">
              {section?.date}
            </h5>
            {/* <p className="text-[14px] text-[#353535] leading-7 py-4">
              {section?.body_1}
            </p> */}
            <div
              className="text-[14px] text-[#353535] leading-7 py-4"
              dangerouslySetInnerHTML={createMarkup(
                GetParagraph(section?.body_1)
              )}
            ></div>
            <div className="pt-2 md:mb-0 mb-6">
              <Link href={`/resources/newsroom/${section?.slug}`}>
                <span className="font-normal text-base leading-5 text-[#0050D5]">
                  <img
                    src="/icons/dash.svg"
                    className="mr-3 inline"
                    alt="Vlink dash"
                  />
                  Read More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
