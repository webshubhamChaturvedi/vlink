import React from 'react'
import Container from './Container'
import { createMarkup } from 'app/scripts/utils'
import Link from 'next/link';
import CloudinaryImage from "app/components/common/CloudinaryImage"

export default function TextImage({textimage, setModalCall}) {
  return (
    <section className='lg:py-[55px] py-[35px]'>
      <Container>
        <div className='grid lg:grid-cols-12 grid-cols-6 lg:gap-10 gap-5'>
          <div className='col-span-6'>
            {textimage?.image?.data?.attributes?.url &&
              <CloudinaryImage
                backendImgUrl={textimage?.image?.data?.attributes?.url}
                className=""
                alt={textimage?.image?.data?.attributes?.alternativeText}
                type="isTablet"
              />
            }
          </div>
          <div className='col-span-6 flex flex-wrap items-center'>
            <div>
              <h4 class={`relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] ${textimage?.descriptionEditor ? "mb-6" : "mb-3"}`}>
                {textimage?.bgText && 
                  <span class="lg:text-[80px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[80px] leading-[45px]">
                    {textimage?.bgText}
                  </span>
                }
                <span class={`w-[100%] font-bold relative block ${textimage?.bgText && "mt-[-30px]"}`}>
                  {textimage?.title}
                </span>
              </h4>
              <div
                className="font-sans font-[400] text-[16px] text-[#353535] anchorInPage"
                dangerouslySetInnerHTML={createMarkup(
                  textimage?.descriptionEditor
                )}
              >
              </div>
              <div className='mt-10'>
                {textimage?.btn_link 
                ?
                    <Link
                        color="gray"
                        href={`${textimage?.btn_link}`}
                        style={{
                        backgroundColor: textimage?.btn_color,
                        }}
                        className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group h-min p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]"
                    >
                        <span className="flex items-center rounded-md text-sm px-7 py-4">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                        <span className="font-[600] relative group-hover:text-black flex items-center lg:text-[20px] text-[14px]">
                            {textimage?.btn_text}
                            <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        </span>
                    </Link>
                :
                    <button
                        className={`bg-[#0029FF] text-white border border-transparent group h-min text-center font-medium focus:z-10 relative rounded overflow-hidden inline-block px-7 py-3 shadow-[10px_20px_40px_0px_#00000033]`}
                        onClick={() => setModalCall(textimage?.btn_text)}
                        >
                        <span
                            className={`bg-[#fff] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                            ></span>
                        <span className={`lg:text-[20px] text-[14px] group-hover:text-black flex items-center font-[600] relative`}>
                            {textimage?.btn_text}
                            <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
