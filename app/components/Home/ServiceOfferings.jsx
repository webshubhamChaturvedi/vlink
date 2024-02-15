import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "../common/Container";
import GridCards from "../common/GridCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "../common/CloudinaryImage";
const ServiceOfferings = ({ section_title, section_content }) => {
  const list = section_content?.map(
    ({ icon_image, label, h1, p, descriptionEditor }) => {
      return {
        icon: icon_image?.data?.attributes?.url ?? null,
        alt: icon_image?.data?.attributes?.alternativeText,
        h1,
        p,
        descriptionEditor,
      };
    }
  );
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  {
    console.log(section_content, "abc");
  }
  return (
    <Container className="md:py-16 md:py-[55px] py-[30px]">
      <div className="flex flex-col">
        <div className="md:mb-[45px] mb-[20px]">
          <h4 className="text-center  text-company font-bold xl:text-4xl lg:text-[32px] text-[22px] mb-2">
            {section_title?.h1_purple}
            <span className="font-bold text-black ml-2">
              {section_title?.h1_black}
            </span>
          </h4>
          <p className="hidden text-center md:block font-sans font-[400] text-[14px] pt-[10px]">
            {section_title?.p}
          </p>
        </div>
      </div>
      <div className="flex lg:items-stretch flex-wrap md:flex-nowrap">
        {windowWidth > 768 && (
          <div className="hidden xl:block rounded w-2/4">
            {section_title?.image?.data?.attributes?.url && (
              <CloudinaryImage
                backendImgUrl={section_title?.image?.data?.attributes?.url}
                alt={section_title?.image?.data?.attributes?.alternativeText}
                type="smallimg"
              />
            )}
          </div>
        )}
        <GridCards list={list} />
      </div>
      <div className="flex justify-center mt-10">
        {section_title?.href && (
          <Link
            href={`${section_title?.href}`}
            className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block px-5 py-1"
          >
            <span className="flex items-center rounded-md text-sm px-4 py-2">
              <span
                className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
              ></span>
              <span
                className={`font-[600] relative group-hover:text-black flex items-center`}
              >
                {section_title?.label}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="font-[14px] w-[14px] ml-2"
                />
              </span>
            </span>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default ServiceOfferings;
