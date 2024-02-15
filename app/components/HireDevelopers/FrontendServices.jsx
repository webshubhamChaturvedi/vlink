import React from "react";
import CloudinaryImage from "app/components/common/CloudinaryImage";
import Container from "../common/Container";
import { createMarkup } from "app/scripts/utils";
import Link from "next/link";

export default function FrontendServices({
  frontend,
  isBackendService = false,
  isHomeService = false,
  setModalCall,
  isDot = false,
  isDes = false,
}) {
  return (
    <section
      className={`${
        isBackendService
          ? "lg:pt-[55px] pt-[35px]"
          : "bg-cover bg-no-repeat lg:bg-center bg-left bg-fixed"
      } ${isDot && "lg:py-[55px] py-[35px]"}`}
      style={{
        backgroundImage: isBackendService
          ? `linear-gradient(140deg, ${frontend?.bg_color} 0%, #F7E4E3 75%)`
          : isHomeService
          ? `linear-gradient(140deg, ${frontend?.bg_color} 0%, #F7E4E3 75%)`
          : `url("https://backend.vlinkinfo.com/uploads/Group_238992_ab0761c3d9.png")`,
      }}
    >
      {isBackendService ? (
        <Container>
          <div className="lg:mb-[55px] mb-[35px]">
            <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
              <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                {frontend?.bg_text}
              </span>
              <span
                class={`w-[100%] font-bold relative block ${
                  frontend?.bg_text && "mt-[-30px]"
                }`}
              >
                {frontend?.title}
              </span>
            </h4>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-10">
            <div className="">
              <p className="text-[#00052F]  lg:text-[16px] text-[16px] font-[600] leading-[1.8] mb-4">
                {frontend?.description}
              </p>
              <ul>
                {frontend?.servicesList?.map((items, key) => (
                  <li key={key} className="flex py-[30px]">
                    <div className="w-[100px] h-[70px] mr-4 flex items-center justify-center shadow-[0px_10px_20px_0px_#0050D529] lg:p-4 p-3">
                      {items?.icon?.data?.attributes?.url && (
                        <CloudinaryImage
                          backendImgUrl={items?.icon?.data?.attributes?.url}
                          alt={items?.icon?.data?.attributes?.alternativeText}
                          className="w-full"
                          type="icon"
                        />
                      )}
                    </div>
                    <div className="">
                      <h6 className="text-[20px] text-[#00102B] font-[600]">
                        {items?.title}
                      </h6>
                      {items?.descriptionEditor ? (
                        <div
                          dangerouslySetInnerHTML={createMarkup(
                            items?.descriptionEditor
                          )}
                          className="text-[#464671] text-[16px] font-[400] contentBlock"
                        ></div>
                      ) : (
                        <p className="text-[16px] text-[#434343] font-[400]">
                          {items?.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {frontend?.btnText && (
                <div className="flex justify-start mt-6">
                  <button
                    size={"lg"}
                    className="buttonOpen text-white bg-[#0A1643] border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block lg:px-7 px-4 py-3"
                    // onClick={setModalScheduleCall}
                  >
                    <span className="">
                      <span
                        className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
                      ></span>
                      <span
                        className={`flex items-center font-[600] relative group-hover:text-[#000] lg:text-[16px] text-[14px]`}
                      >
                        {frontend?.btnText}
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
                    </span>
                  </button>
                </div>
              )}
            </div>
            <div>
              {frontend?.image?.data?.attributes?.url && (
                <CloudinaryImage
                  backendImgUrl={frontend?.image?.data?.attributes?.url}
                  alt={frontend?.image?.data?.attributes?.alternativeText}
                  className="sticky top-0"
                  type="isDesktop"
                />
              )}
            </div>
          </div>
        </Container>
      ) : isHomeService ? (
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-10 gap-10">
            <div className="w-full lg:py-[55px] py-[35px] md:px-[55px]">
              <h4 class="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3">
                <span class="lg:text-[100px] text-[65px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[65px]">
                  {frontend?.bg_text}
                </span>
                <span class="w-[100%] font-bold relative top-[-30px]">
                  {frontend?.title}
                </span>
              </h4>
              <ul>
                {frontend?.servicesList?.map((items, key) => (
                  <li
                    key={key}
                    className="border-t-[1px] border-[#949598] border-dashed flex items-center py-[30px]"
                  >
                    <div className="w-[100px] h-[100px] mr-4 flex items-start">
                      {items?.icon?.data?.attributes?.url && (
                        <CloudinaryImage
                          backendImgUrl={items?.icon?.data?.attributes?.url}
                          alt={items?.icon?.data?.attributes?.alternativeText}
                          className=""
                          type="icon"
                        />
                      )}
                    </div>
                    <div className="">
                      <h6 className="text-[20px] text-[#00102B] font-[600]">
                        {items?.title}
                      </h6>
                      {items?.descriptionEditor ? (
                        <div
                          dangerouslySetInnerHTML={createMarkup(
                            items?.descriptionEditor
                          )}
                          className="text-[#464671] text-[16px] font-[400] contentBlock"
                        ></div>
                      ) : (
                        <p className="text-[16px] text-[#434343] font-[400]">
                          {items?.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {frontend?.btnText && (
                <div className="flex justify-start mt-6">
                  <button
                    size={"lg"}
                    className="buttonOpen text-white bg-[#0A1643] border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block lg:px-7 px-4 py-3"
                    // onClick={setModalScheduleCall}
                  >
                    <span className="">
                      <span
                        className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
                      ></span>
                      <span
                        className={`flex items-center font-[600] relative group-hover:text-[#000] lg:text-[16px] text-[14px]`}
                      >
                        {frontend?.btnText}
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
                    </span>
                  </button>
                </div>
              )}
            </div>
            <div>
              <div className="stickthis fullimage">
                {frontend?.image?.data?.attributes?.url && (
                  <CloudinaryImage
                    backendImgUrl={frontend?.image?.data?.attributes?.url}
                    alt={frontend?.image?.data?.attributes?.alternativeText}
                    className="sticky top-0"
                    type="smallimg"
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div className="flex lg:items-stretch flex-wrap md:flex-nowrap">
          <div className="w-full md:py-[55px] md:px-[55px] p-5">
            <h4 class="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3">
              <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                {frontend?.bg_text}
              </span>
              <span class="w-[100%] font-bold relative mt-[-30px] block">
                {frontend?.title}
              </span>
            </h4>
            {frontend?.description && (
              <p className="text-[#00052F]text-[16px] font-[400] mb-10">
                {frontend?.description}
              </p>
            )}
            <ul>
              {frontend?.servicesList?.map((items, key) => (
                <li
                  key={key}
                  className="border-t-[1px] border-[#949598] border-dashed flex items-start py-[30px] flex-wrap  md:flex-nowrap"
                >
                  <div className="w-[50px] mr-4 flex items-start">
                    {items?.icon?.data?.attributes?.url && (
                      <CloudinaryImage
                        backendImgUrl={items?.icon?.data?.attributes?.url}
                        alt={items?.icon?.data?.attributes?.alternativeText}
                        className=""
                        type="icon"
                      />
                    )}
                  </div>
                  <div style={{ width: "calc(100% - 50px)" }}>
                    <h6 className="text-[20px] text-[#00102B] font-[600]">
                      {items?.title}
                    </h6>
                    {items?.descriptionEditor ? (
                      <div
                        className="text-[#464671] text-[16px] font-[400]"
                        dangerouslySetInnerHTML={createMarkup(
                          items?.descriptionEditor
                        )}
                      ></div>
                    ) : (
                      <p className="text-[16px] text-[#434343] font-[400]">
                        {items?.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-start mt-6">
            {frontend?.btnLink ?
            (<Link
              color="gray"
              href={`${frontend?.btnLink}`}
              style={{
              backgroundColor: frontend?.btnColor,
              }}
              className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group h-min p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]"
          >
              <span className="flex items-center rounded-md text-sm px-7 py-4">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
              <span className="font-[600] relative group-hover:text-black flex items-center lg:text-[20px] text-[14px]">
                  {frontend?.btnText}
                  <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </span>
              </span>
          </Link>) : (
                <button
                  size={"lg"}
                  className="text-white bg-[#0A1643] border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block lg:px-7 px-4 py-3"
                  onClick={() => setModalCall(frontend?.btnText)}
                >
                  <span className="">
                    <span
                      className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
                    ></span>
                    <span
                      className={`flex items-center font-[600] relative group-hover:text-[#000] lg:text-[16px] text-[14px]`}
                    >
                      {frontend?.btnText}
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
                  </span>
                </button>
            )}
            </div>
          </div>
          {frontend?.image?.data?.attributes?.url && (
            <div className="lg:w-3/4 w-4/4 lg:block hidden">
              <CloudinaryImage
                backendImgUrl={frontend?.image?.data?.attributes?.url}
                alt={frontend?.image?.data?.attributes?.alternativeText}
                className="sticky top-0 md:w-auto w-full "
                type="isDesktop"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
