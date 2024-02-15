import React from "react";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";
import { apiEndpoint } from "app/scripts/fetch";
import Container from "./Container";
import { createMarkup } from "app/scripts/utils";

export default function WhyChooseExp({ data, isJava=false, setModalCall }) {
  return (
    <section
      className={`${isJava ? "bg-cover md:pt-[55px] pt-[30px] mb-[25px]" : "md:py-[55px] py-[30px]"} ${data?.bg_img?.data?.attributes?.url ? "bg-no-repeat bg-contain bg-right" : "bg-right-top bg-[length:600px_600px] bg-no-repeat"}`}
      style={{
        backgroundImage: `${data?.bg_img?.data?.attributes?.url && `url(${apiEndpoint(data?.bg_img?.data?.attributes?.url)})`}`}}
    >
      <Container className="relative">
        {data?.right_icon?.data?.attributes?.url &&
            <div className=" inline-block md:absolute top-0 right-0 z-[-1] w-[500px] mb-3">
                <CloudinaryImage
                backendImgUrl={`/uploads/expert_bg_fa899e2e09.png`}
                className="absolute top-[18%] right-[15%] md:block hidden"
                alt={"Expert heading"}
                />
                <CloudinaryImage
                backendImgUrl={data?.right_icon?.data?.attributes?.url}
                className="box up-down"
                alt={data?.right_icon?.data?.attributes?.alternativeText}
                type="smallimg"
                />
            </div>
        }
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:mb-[55px] mb-4">
              <div className="succesful-team w-[100%]">
                <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
                  <span
                    className="inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-40 bg-[center_top_20%]"
                    style={{ 
                      backgroundImage: `url(${apiEndpoint(data?.title_bg?.data?.attributes?.url)})`}}
                  >
                    {data?.h1_black}
                    <span className="text-[#0050D5]">{data?.h1_purple}</span>
                    {data?.h1_black2}
                  </span>
                </h4>
                {data?.text &&
                    <p className="leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]">
                      {data?.text}
                    </p>
                  }
              </div>
            </div>
            {/* <div className="col-span-4">
              {data?.exp_list.length && 
              data?.exp_list.map((item, index)=>(
                index === 0 &&
                <div
                  className={`rounded-[12px] lg:col-span-4 md:col-span-6 col-span-12 transation-custom hover:bg-[#ffffff] hover:shadow-[0px_45px_80px_-30px_#E1E5ECDE] group`}
                  key={index}
                >
                  <div className="p-[20px]">
                    {item?.icon?.data?.attributes?.url &&
                      <div className="w-[75px] h-[75px] rounded-[100%] flex itmes-center justify-center p-4 mb-2"
                        style={{backgroundImage: `linear-gradient(143.25deg, #C8FFF8 6.84%, rgba(200, 255, 248, 0) 96.01%)`}}>
                        <CloudinaryImage
                          backendImgUrl={item?.icon?.data?.attributes?.url}
                          className="w-[40px]"
                          alt={data?.bg_img?.data?.attributes?.alternativeText}
                          type="icon"
                        />
                      </div>
                    }
                    <h5 className="mb-3 text-[#052A45] text-[20px] font-[700]">
                      {item.title}
                    </h5>
                    <p className="text-[#43485B] text-[14px] font-[400]">
                      {item?.text}
                    </p>
                  </div>
                  {item?.btn_link &&
                    <div className="border-t-[1px] border-[#F2F2F9] p-[20px]">
                        <Link
                          href={item?.btn_link}
                          className="text-[14px] text-[#232C4E] font-[700] flex items-center group-hover:text-[#ffffff]"
                        >
                          {item?.btn_text}
                          {item?.btn_icon?.data?.attributes?.url &&
                            <CloudinaryImage
                              backendImgUrl={item?.btn_icon?.data?.attributes?.url}
                              className="w-[40px] ml-3 rounded-[100%]"
                              alt={item?.btn_icon?.data?.attributes?.alternativeText}
                              type="icon"
                            />
                          }
                        </Link>
                    </div>
                  }
                </div>
              ))}
            </div> */}
        </div>
        <div className="flex flex-wrap justify-center lg:gap-y-10 gap-y-5 text-center">
          { 
            data?.exp_list.length && 
            data?.exp_list.map((item, index)=>(
              // index !== 0 ?
              <div
                className={`${isJava && "bg-[#FFFFFF] shadow-[0px_0px_40px_0px_#0050D51A] sx-icon-bx-1 group"} xl:w-[31%] lg:w-[48%] w-[100%] mx-[1%] rounded-[12px] transation-custom hover:bg-[#ffffff] hover:shadow-[0px_45px_80px_-30px_#E1E5ECDE] group`}
                key={index}
              >
                <div className={`${isJava ? "py-8 px-6" : "p-[20px]"}`}>
                  {isJava ?
                  item?.icon?.data?.attributes?.url &&
                    <div className={`w-[100px] h-[100px] rounded-[4px] flex itmes-center justify-center p-4 mb-4 mx-auto`}
                    style={{backgroundColor: `#F2F5F6`}}>
                      <CloudinaryImage
                        backendImgUrl={item?.icon?.data?.attributes?.url}
                        className=""
                        alt={data?.bg_img?.data?.attributes?.alternativeText}
                        type="icon"
                      />
                    </div>
                  :
                    <div className={`w-[70px] h-[70px] rounded-[100%] flex itmes-center justify-center p-4 mb-2 mx-auto`}
                    style={{backgroundImage: `linear-gradient(143.25deg, #C8FFF8 6.84%, rgba(200, 255, 248, 0) 96.01%)`}}>
                      <CloudinaryImage
                        backendImgUrl={item?.icon?.data?.attributes?.url}
                        className=""
                        alt={data?.bg_img?.data?.attributes?.alternativeText}
                        type="icon"
                      />
                    </div>
                  }
                  <h5 className={`${isJava && "group-hover:text-[#fff]"} mb-3 text-[#052A45] text-[20px] font-[700]`}>
                    {item.title}
                  </h5>
                  {item?.description ?
                    <div
                      className={`${isJava && "group-hover:text-[#fff]"} leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]`}
                      dangerouslySetInnerHTML={createMarkup(
                        item?.description
                      )}
                    >
                    </div>
                  :
                    <p className={`${isJava && "group-hover:text-[#fff]"} leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]`}>
                      {data?.text}
                    </p>
                  }
                </div>
                {item?.btn_link &&
                  <div className="border-t-[1px] border-[#F2F2F9] p-[20px]">
                      <Link
                        href={item?.btn_link}
                        className="text-[14px] text-[#232C4E] font-[700] flex items-center group-hover:text-[#ffffff]"
                      >
                        {item?.btn_text}
                        {item?.btn_icon?.data?.attributes?.url &&
                          <CloudinaryImage
                            backendImgUrl={item?.btn_icon?.data?.attributes?.url}
                            className="w-[40px] ml-3 rounded-[100%]"
                            alt={item?.btn_icon?.data?.attributes?.alternativeText}
                            type="icon"
                          />
                        }
                      </Link>
                  </div>
                }
              </div>
              // :
              // null
            ))
          // :
            // data?.exp_list.length &&
            // data?.exp_list.map((item, index) =>
            //   index !== 2 ? (
            //     <div
            //       className={`rounded-[12px] lg:col-span-4 md:col-span-6 col-span-12 bg-[#ffffff] shadow-[0px_6px_18px_rgba(2,_0,_103,_0.051)] sx-icon-bx-1 group`}
            //       key={index}
            //     >
            //       <div className="p-[20px]">
            //         {item?.icon?.data?.attributes?.url &&
            //           <CloudinaryImage
            //             backendImgUrl={item?.icon?.data?.attributes?.url}
            //             className="w-[50px] mb-3"
            //             alt={data?.bg_img?.data?.attributes?.alternativeText}
            //             type="icon"
            //           />
            //         }
            //         <h5 className="mb-2 text-[#171F44] text-[24px] font-[700] group-hover:text-[#ffffff]">
            //           {item.title}
            //         </h5>
            //         <p className="text-[#43485B] text-[14px] font-[400] group-hover:text-[#ffffff]">
            //           {item?.text}
            //         </p>
            //       </div>
            //       <div className="border-t-[1px] border-[#F2F2F9] p-[20px]">
            //         {item?.btn_link &&
            //           <Link
            //             href={item?.btn_link}
            //             className="text-[14px] text-[#232C4E] font-[700] flex items-center group-hover:text-[#ffffff]"
            //           >
            //             {item?.btn_text}
            //             {item?.btn_icon?.data?.attributes?.url &&
            //               <CloudinaryImage
            //                 backendImgUrl={item?.btn_icon?.data?.attributes?.url}
            //                 className="w-[40px] ml-3 rounded-[100%]"
            //                 alt={item?.btn_icon?.data?.attributes?.alternativeText}
            //                 type="icon"
            //               />
            //             }
            //           </Link>
            //         }
            //       </div>
            //     </div>
            //   ) : (
            //     <div
            //       key={index}
            //       className={`lg:col-span-4 md:col-span-6`}
            //     ></div>
            //   )
            // )
          }
        </div>

        {data?.btn_text &&
            <div className={`${isJava && "relative bottom-[-25px]"} md:mt-10 mt-4 text-center`}>
                <button
                    className={`bg-[#0029FF] text-white border border-transparent group h-min font-medium focus:z-10 relative rounded overflow-hidden inline-block px-7 py-3 shadow-[10px_20px_40px_0px_#00000033]`}
                    onClick={() => setModalCall(data?.btn_text)}
                    >
                    <span
                        className={`bg-[#fff] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                        ></span>
                    <span className={`lg:text-[20px] text-[14px] group-hover:text-black flex items-center font-[600] relative`}>
                        {data?.btn_text}
                        <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
        }
        {data?.btn_link 
          &&
            <div className={`${isJava && "relative bottom-[-25px]"} mt-10 text-center`}>
                <Link
                    color="gray"
                    href={`${data?.btn_link}`}
                    style={{
                    backgroundColor: data?.btn_color,
                    }}
                    className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group h-min p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]"
                >
                    <span className="flex items-center rounded-md text-sm px-7 py-4">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                    <span className="font-[600] relative group-hover:text-black flex items-center lg:text-[20px] text-[14px]">
                        {data?.btn_text}
                        <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    </span>
                </Link>
            </div>
        }
      </Container>
    </section>
  )
}
