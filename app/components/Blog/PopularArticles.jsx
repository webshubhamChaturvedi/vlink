import React from "react";
import Image from "next/image";
import { apiEndpoint } from "app/scripts/fetch";
import Container from "../common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";

export default function PopularArticles({ data }) {
  return (
    <section className="lg:py-[55px] py-5">
      <Container>
        <div className="grid grid-cols-1 lg:mb-[50px] mb-5">
          <h6 className="text-[#232323] lg:text-[40px] text-[24px] font-[700]">
            Popular Articles
          </h6>
        </div>
        <div className="grid lg:gap-20 gap-10 lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
          {data?.popular_blog?.length > 0 &&
            data?.popular_blog?.map((items, key) => (
              <div key={key}>
                <Link href={`${items?.blog_link}`}>
                  <CloudinaryImage
                    backendImgUrl={items?.image?.data?.attributes?.url}
                    className="mb-3 rounded-[10px] overflow-hidden lg:h-[220px] w-[100%]"
                    alt={items?.image?.data?.attributes?.alternativeText}
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
                  <div className="text-[#0C2139] text-[14px] flex">
                    <span className=" mr-2">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="font-[14px] w-[14px]"
                      />
                    </span>
                    {items?.auth_name}
                  </div>
                  <div className="text-[#716F6F] text-[14px]">
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
            ))}
        </div>
      </Container>
    </section>
  );
}
