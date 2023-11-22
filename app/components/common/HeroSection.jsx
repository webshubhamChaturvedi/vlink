import { useState, useEffect } from "react";
import Container from "app/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "flowbite-react";
import LeftIconList from "./LeftIconList";
import { apiEndpoint } from "app/scripts/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "../common/CloudinaryImage";
export default function HeroSection({
  data,
  isWarehouse = false,
  isService = false,
  isCaseStudy = false,
  isHireDeveloperDetail = false,
  headingSize,
  setModalCall = true,
  isStaff = false,
  isSupply = false,
  isBlock = false,
  setModalScheduleCall = false,
  ishome = false,
  isCase = false,
}) {
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

  return (
    <div
      className={`lg:bg-none  bg-[url('https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_340/v1690807418/home_page_bg_260dcfa971.jpg?_a=BAJFJtWI0')] bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage: isStaff
          ? `url('${apiEndpoint(data?.bgImg?.data?.attributes?.url)}')`
          : isCase
          ? `url('${apiEndpoint(data?.bgImg?.data?.attributes?.url)}')`
          : isSupply
          ? `url('${apiEndpoint(data?.bgImage?.data?.attributes?.url)}')`
          : undefined,
      }}
    >
      {/* <div onClick={() => download(apiEndpoint(data?.banner_btn[1]?.link))}>
        Download Button
      </div> */}
      <Container className="flex flex-wrap items-center hero-section-height ">
        <div className="grid lg:grid-cols-12 justify-around items-center lg:py-6 py-12 gap-10 w-full">
          {!isHireDeveloperDetail && (
            <div
              className="col-span-6 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
              data-taos-offset="300"
            >
              {isCase ? (
                <p className="text-[#383838] text-[30px] font-[600] mb-4">
                  Industry
                </p>
              ) : (
                ""
              )}
              {!isHireDeveloperDetail && (
                <div className="mb-3">
                  <h6
                    className={` ${
                      isCaseStudy
                        ? "text-[24px] md:text-[28px] xl:text-[40px] font-extrabold leading-[32px] xl:leading-[46px] md:leading-[36px] mb-2 md:mb-4"
                        : "text-[24px] md:text-[28px] xl:text-[40px] font-extrabold leading-[32px] xl:leading-[46px] md:leading-[36px] mb-2 md:mb-4"
                    }
                    ${isSupply ? "text-[#fff]" : ""}
                  `}
                  >
                    {data?.h1_black || data?.h1_block}
                  </h6>
                  <h1
                    className={`text-company ${"text-[26px] md:text-[32px] xl:text-[55px] font-extrabold leading-[35px] xl:leading-[68px] md:leading-[44px]"}`}
                  >
                    {data?.h1_purple}
                  </h1>
                </div>
              )}
              {data?.download_button ? (
                <p className="hidden md:block text-[16px] mb-4 mt-4 text-[#000] font-semibold">
                  {data?.p}
                </p>
              ) : (
                <p
                  className={`hidden md:block text-[16px] mb-4 mt-4 text-[#000] font-semibold font-sans ${
                    isSupply ? "text-[#fff]" : ""
                  }`}
                >
                  {data?.p ? data?.p : data?.body}
                </p>
              )}

              {isBlock && (
                <div className="block_box my-8 md:flex items-center justify-between">
                  <div className="block_grid flex items-center lg:mb-0 mb-2">
                    <CloudinaryImage
                      backendImgUrl="/uploads/delivered_aed73e0849.png"
                      alt="arrow-right-white"
                      className="inline-block mr-3 w-[40px] h-[40px]"
                      type="icon"
                    />
                    <div className="">
                      <h6 className="text-[#fff] text-[20px] font-[600]">
                        200+
                      </h6>
                      <p className="text-[#fff] text-[14px] font-[400]">
                        Global Clients
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center md:border-l-[1px] border-[#fff] md:pl-[20px] lg:mb-0 mb-2">
                    <CloudinaryImage
                      backendImgUrl="/uploads/rating_769c1829c0.png"
                      alt="arrow-right-white"
                      className="inline-block mr-3 w-[40px] h-[40px]"
                      type="icon"
                    />
                    <div className="">
                      <h6 className="text-[#fff] text-[20px] font-[600]">
                        17+
                      </h6>
                      <p className="text-[#fff] text-[14px] font-[400]">
                        Years of Experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center md:border-l-[1px] border-[#fff] md:pl-[20px]">
                    <CloudinaryImage
                      backendImgUrl="/uploads/project_management_c40f617ea1.png"
                      alt="arrow-right-white"
                      className="inline-block mr-3 w-[40px] h-[40px]"
                      type="icon"
                    />
                    <div className="">
                      <h6 className="text-[#fff] text-[20px] font-[600]">
                        400+
                      </h6>
                      <p className="text-[#fff] text-[14px] font-[400]">
                        Projects Delivered
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex md:space-x-6 space-x-2 pt-6">
                {isSupply
                  ? data?.banner_btn?.map((val, key) => (
                      <Button
                        onClick={setModalCall}
                        className={`${
                          key % 2 === 1
                            ? "bg-white hover:bg-white text-[#000_!important] border border-[#e5e7eb_!important] white_btn relative rounded group overflow-hidden text-center inline-block"
                            : "blue_btn text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block"
                        }`}
                        key={key}
                      >
                        <span
                          class={`${
                            key % 2 === 1
                              ? "absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#0050D5] group-hover:h-full opacity-90"
                              : "absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"
                          }`}
                        ></span>
                        <span
                          className={
                            key % 2 === 1
                              ? "font-[600] relative group-hover:text-white flex"
                              : "font-[600] relative group-hover:text-black flex items-center"
                          }
                        >
                          {val?.text}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2 font-[14px] w-[14px] md:block hidden"
                          />
                        </span>
                      </Button>
                    ))
                  : data?.banner_btn?.map((val, key) => (
                      <div key={key}>
                        <Link
                          color="gray"
                          href={`${val?.link}`}
                          style={{
                            backgroundColor: val?.color,
                            color: val?.textcolor,
                          }}
                          className={
                            key % 2 === 0
                              ? "inline-block text-white border border-[#0050d5] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] white_btn relative rounded-[4px] overflow-hidden text-center inline-block"
                              : "inline-block border border-[#0050d5] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 blue_btn white_btn relative rounded-[4px] overflow-hidden text-center inline-block"
                          }
                          target={`${val?.target ? val.target : "_self"}`}
                        >
                          <span className="flex items-center rounded-md text-sm px-2 py-2 md:px-4">
                            <span
                              className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  ${
                                key % 2 === 0 ? "bg-[#fff]" : "bg-[#0050D5]"
                              }`}
                            ></span>
                            <span
                              className={`font-[600] relative flex items-center ${
                                key % 2 === 0
                                  ? "group-hover:text-black"
                                  : "group-hover:text-white"
                              }`}
                            >
                              {val?.text}
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="ml-2 font-[14px] w-[14px]"
                              />
                            </span>
                          </span>
                        </Link>
                      </div>
                    ))}

                {isWarehouse
                  ? data?.warehouse_list?.map((val, key) => (
                      <div key={val.id}>
                        <Button
                          onClick={setModalCall}
                          className={`${
                            key % 2 === 1
                              ? "bg-white hover:bg-white text-[#000_!important] border border-[#e5e7eb_!important] white_btn relative rounded group overflow-hidden text-center inline-block"
                              : "blue_btn text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block"
                          }`}
                        >
                          <span
                            className={`${
                              key % 2 === 1
                                ? "absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#0050D5] group-hover:h-full opacity-90"
                                : "absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"
                            }`}
                          ></span>
                          <span
                            className={
                              key % 2 === 1
                                ? "font-[600] relative group-hover:text-white"
                                : "font-[600] relative group-hover:text-black flex items-center"
                            }
                          >
                            {val?.h}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ml-2 font-[14px] w-[14px] md:block hidden"
                            />
                          </span>
                        </Button>
                      </div>
                    ))
                  : []}
              </div>
              {isCase ? (
                <div className="grid grid-cols-2 mt-10">
                  {data?.hero_tech?.map((items, key) => (
                    <div key={key}>
                      <h6 className="text-[#0662A5] text-[24px] font-[600]">
                        {items?.icon?.data ? (
                          <img
                            src={apiEndpoint(
                              items?.icon?.data?.attributes?.url
                            )}
                            alt=""
                            className="inline-block mr-2 w-[18px] h-[18px]"
                          />
                        ) : (
                          ""
                        )}
                        {/* <CloudinaryImage
                          backendImgUrl={items?.icon?.data?.attributes?.url}
                          // backendImgUrl={`/uploads/material_symbols_flutter_813658b4a9.png`}
                          alt="arrow-right-white"
                          className="inline-block mr-3 w-[40px] h-[40px]"
                          type="icon"
                      />  */}
                        {items?.title}
                      </h6>
                      <p className="text-[#0662A5] text-[14px] font-[400]">
                        {items?.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
          {isHireDeveloperDetail && (
            <div className="col-span-6">
              <div>
                <h1
                  className={`text-[26px] md:text-[32px] xl:text-[55px] font-extrabold leading-[35px] xl:leading-[68px] md:leading-[44px]`}
                >
                  {data?.h1_black}
                  <span className="text-company">{` ${data?.h1_purple}`}</span>
                  {" " + data?.h2_black}
                </h1>
                <p className="text-[16px] text-[#000] font-[400] font-sans">
                  {data?.p}
                </p>
              </div>

              <p className="text-[#383838] text-[16px] text-left py-5">
                {data?.desc}
              </p>
              <LeftIconList
                extraClassName="items-center "
                displayGrid={true}
                gridCols={1}
                list={data?.list}
                customIcon={"circle-check-icon-primary.svg"}
                noPadding={true}
              />

              <div className="flex space-x-6 pt-6">
                {data?.banner_btn?.map((val, key) => (
                  <Link
                    val={val.id}
                    key={key.id}
                    color="gray"
                    href={`${val?.link}`}
                    style={{
                      backgroundColor: val?.color,
                      color: val?.textcolor,
                    }}
                    className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block"
                  >
                    <span className="flex items-center rounded-md text-sm px-2 py-2 md:px-4">
                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                      <span className="font-[600] relative group-hover:text-black flex items-center">
                        {val?.text}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="font-[14px] w-[14px] ml-2"
                        />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {windowWidth > 768 && (
            <div
              className={`box up-down ${
                !isCaseStudy
                  ? "col-span-6 hidden lg:block text-center"
                  : "col-span-6 hidden lg:block text-center"
              }`}
            >
              {(isService &&
                data?.image?.data?.length &&
                data?.image?.data?.attributes?.url) ||
              ishome ? (
                <Image
                  src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_480/v1690806569/Img_V4_da7d33daa4.gif"
                  // src={apiEndpoint(data?.image?.data[0]?.attributes?.url)}
                  width="100"
                  height="100"
                  alt="great place to work gif"
                  className="inline-block"
                  priority="high"
                  decoding="async"
                  style={{ width: "100%" }}
                />
              ) : data?.image?.data?.attributes?.url ? (
                <CloudinaryImage
                  backendImgUrl={data?.image?.data?.attributes?.url}
                  className="inline-block"
                  alt={data?.image?.data?.attributes?.alternativeText}
                />
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
