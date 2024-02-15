import React from "react";
import CloudinaryImage from 'app/components/common/CloudinaryImage';
import Container from "../common/Container";
import Link from "next/link";

export default function ServiceBackend({whyvlink, isserback=false}) {
  return (
    <section className={`bg-[#000D3B] lg:pt-[55px] pt-[35px] ${isserback ? "" : "lg:pb-[75px] pb-[45px]"}`}>
      <Container>
        <div className="lg:pb-[55px] pb-[35px]">
          <h4 class="relative font-bold text-[#fff] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
            {whyvlink?.bg_text && 
              <span class="lg:text-[100px] text-[40px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[40px]">
                {whyvlink?.bg_text}
              </span>
            }
            {whyvlink?.bg_title && 
              <span class="lg:text-[100px] text-[40px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[40px]">
                {whyvlink?.bg_title}
              </span>
            }
            <span class={`w-[100%] font-bold relative ${whyvlink?.bg_text && "mt-[-30px]"} ${whyvlink?.bg_title && "mt-[-30px]"} block`}>
              {whyvlink?.title}
            </span>
          </h4>
          <p className="text-[16px] text-[#ffffffa6] font-[400] text-center max-w-[1100px] mx-auto">
            {whyvlink?.description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {whyvlink?.servicesList && whyvlink?.servicesList?.map((items, key)=>(
                    <div key={key} className="text-center border-[1px] border-[#FFFFFF] lg:p-[40px] p-[20px] rounded-[15px] transation-custom hover:bg-gradient-to-tl from-[#F0FAFF] to-[#FFFFFF] hover:scale-[1.03] group">
                        {items?.icon?.data?.attributes?.url &&
                          <div className="p-4 rounded-[4px] inline-block mb-2"
                          style={{backgroundColor: items?.bg_color}}>
                              <CloudinaryImage
                                  backendImgUrl={items?.icon?.data?.attributes?.url}
                                  alt={items?.icon?.data?.attributes?.alternativeText}
                                  className="h-[70px] group-hover:invert"
                                  type="icon"
                              />
                          </div>
                        }
                        <h6 className="text-[20px] text-[#fff] font-[600] mb-2 group-hover:text-[#000]">
                            {items?.title}
                        </h6>
                        <p className="text-[14px] text-[#ffffffa6] font-[400] group-hover:text-[#000]">
                            {items?.description}
                        </p>
                    </div>
                ))}
                {whyvlink?.reasonList && whyvlink?.reasonList?.map((items, key)=>(
                    <div key={key} className="text-center border-[1px] border-[#FFFFFF] lg:p-[40px] p-[20px] rounded-[15px] transation-custom hover:bg-gradient-to-tl from-[#F0FAFF] to-[#FFFFFF] hover:scale-[1.03] group">
                        {items?.image?.data?.length &&
                          <div className="p-4 rounded-[4px] inline-block mb-2"
                          style={{backgroundColor: items?.bg_color}}>
                            {items?.image?.data?.map((img, key)=>(
                              <span key={key} className="bg-[#FFFFFF] group-hover:bg-[#C8FFF8] inline-flex items-center justify-center rounded-[4px] w-[100px] h-[100px]">
                                <CloudinaryImage
                                    backendImgUrl={img?.attributes?.url}
                                    alt={img?.attributes?.alternativeText}
                                    className="h-[70px] group-hover:invert"
                                    type="icon"
                                />
                              </span>
                            ))}
                          </div>
                        }
                        <h6 className="text-[20px] text-[#fff] font-[600] mb-2 group-hover:text-[#000]">
                            {items?.title}
                        </h6>
                        <p className="text-[14px] text-[#ffffffa6] font-[400] group-hover:text-[#000]">
                            {items?.description}
                        </p>
                    </div>
                ))}
        </div>
        <div className={`${whyvlink?.btn_text && "lg:mt-[50px] mt-[30px] flex items-center justify-center"}`}>
          {whyvlink?.btn_link 
          ?
            <Link
                color="gray"
                href={`${whyvlink?.btn_link}`}
                style={{
                backgroundColor: whyvlink?.btn_Color,
                }}
                className="text-white bg-blue-700 border border-transparent group text-[#ffffff_!important] relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]"
            >
                <span className="flex items-center rounded-md text-sm px-7 py-4">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                <span className="font-[600] relative group-hover:text-black flex items-center text-[20px]">
                    {whyvlink?.btn_text}
                    <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
                </span>
            </Link>
          :
          whyvlink?.btn_text
          ?
            <button
                className={`buttonOpen relative bottom-[-25px] bg-[#ffffff] text-black border border-transparent hover:border-[#0029FF] group flex h-min items-center justify-center text-center font-medium relative rounded overflow-hidden text-center inline-block px-7 py-3 shadow-[10px_20px_40px_0px_#00000033]`}
                // onClick={setModalCall}
                
                >
                <span
                    className={`bg-[#0029FF] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                    ></span>
                <span className={`text-[20px] group-hover:text-white flex items-center font-[600] relative`}>
                    {whyvlink?.btn_text}
                    <svg className={`ml-2 stroke-[black] group-hover:stroke-[white]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </button>
          :
          ""
          }
        </div>
      </Container>
    </section>
  );
}
