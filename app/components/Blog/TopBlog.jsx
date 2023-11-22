import React from "react";
import Container from "../common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";

export default function TopBlog({ data }) {
  return (
    <section className="ld:pb-[55px] pt-5 top_banner pb-5">
      <Container>
        <div className="lg:pb-[55px] pb-10">
          {data?.list?.length > 0 &&
            data?.list?.map((items, key) => (
              <div key={key}>
                {key === 0 ? (
                  <div className="grid grid-cols-12 lg:gap-16 gap-4" key={key}>
                    <div className="md:col-span-5 col-span-12">
                      <Link href={`${items?.blog_link}`}>
                        <CloudinaryImage
                          backendImgUrl={items?.image?.data?.attributes?.url}
                          alt={items?.image?.data?.attributes?.alternativeText}
                          className="mb-3 rounded-[10px] overflow-hidden w-[100%]"
                          type="smallimg"
                        />
                      </Link>
                    </div>
                    <div className="md:col-span-7 self-center col-span-12">
                      <div className="text-[#383838] text-[18px] font-[600] flex  items-center">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="font-[14px] w-[14px] mr-1"
                        />
                        {items?.auth_name}
                      </div>
                      <h1 className="lg:text-[50px] text-[24px] font-[700] text-[#06192F] mb-2 leading-tight">
                        <Link
                          href={`${items?.blog_link}`}
                          className=" hover:text-[#4152ee] "
                        >
                          {items?.title}
                        </Link>
                      </h1>
                      <p className="text-[16px] text-[#4D4C4C] font-[400] mb-3">
                        {items?.description}
                      </p>
                      <div className="text-[#7F7D7D] text-[14px] font-[400]">
                        {items?.date}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
          {data?.list?.length > 0 &&
            data?.list?.map((items, key) => (
              <>
                {key === 0 ? (
                  ""
                ) : (
                  <div key={items}>
                    <Link href={`${items?.blog_link}`}>
                      <CloudinaryImage
                        backendImgUrl={items?.image?.data?.attributes?.url}
                        alt={items?.image?.data?.attributes?.alternativeText}
                        className="mb-3 rounded-[10px] overflow-hidden lg:h-[220px] w-[100%]"
                        type="smallimg"
                      />
                    </Link>
                    <h6 className="text-[20px] font-[600] text-[#0C2139] mb-2">
                      <Link
                        href={`${items?.blog_link}`}
                        className="hover:text-[#4152ee]"
                      >
                        {items?.title}
                      </Link>
                    </h6>
                    <p className="text-[16px] text-[#4D4C4C] font-[400] mb-3 line-clamp-2">
                      {items?.description}
                    </p>
                    <div className="flex justify-between mb-3">
                      <div className="text-[#0C2139] text-[14px] flex  items-center">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="font-[14px] w-[14px] mr-1"
                        />
                        {items?.auth_name}
                      </div>
                      <div className="text-[#716F6F] text-[14px]  w-32 text-right">
                        {items?.date}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-[#716F6F] text-[14px]">
                        {items?.read_time}
                      </div>
                      <div className="text-[#716F6F] text-[14px]">
                        {items?.view}
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </Container>
    </section>
  );
}
