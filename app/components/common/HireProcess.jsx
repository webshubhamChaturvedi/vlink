import React from 'react';
import Container from './Container';
import CloudinaryImage from "app/components/common/CloudinaryImage";
import Link from 'next/link';
import "../common/hireprocess.css"

export default function HireProcess({hiredev, setModalCall}) {

  return (
    <section className='lg:py-[55px] py-[30px]'>
        <Container>
            <div className="lg:mb-[55px] mb-[35px]">
            <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                {hiredev?.bgText && 
                <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                    {hiredev?.bgText}
                </span>
                }
                <span class={`w-[100%] font-bold relative block ${hiredev?.bgText && "mt-[-30px]"}`}>
                    {hiredev?.title}
                </span>
            </h4>
            {hiredev?.description &&
                <p className={`${hiredev?.bgText && "top-[-30px]"} text-[#4C4C4C] text-[20px] font-[400] text-center`}>{hiredev?.description}</p>
            }
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-x-14 lg:gap-y-6 gap-x-10'>
                {hiredev?.Process?.map((data, key)=>(
                    <div key={key}>
                        {data?.icon?.data?.attributes?.url &&
                            <CloudinaryImage
                                backendImgUrl={data?.icon?.data?.attributes?.url}
                                alt={data?.icon?.data?.attributes?.alternativeText}
                                className="h-[160px] mx-auto mb-4"
                                type="icon"
                            />
                        }
                        <h6 className='text-center text-[#000] text-[20px] font-[600] mb-3'>{data?.title}</h6>
                        <p className='text-center text-[#0D0D0D] text-[16px] font-[400]'>{data?.text}</p>
                        <div className='lg:hidden block'>
                            <span className='block text-[#565656] text-[35px] font-[600] text-center'>{data?.sno}</span>
                        </div>
                    </div>
                ))}
                {hiredev?.Process?.map((data, key)=>(
                    <div key={key} className='lg:block hidden'>
                        <span className={`block text-[#565656] text-[35px] font-[600] text-center relative ${
       key + 1 != hiredev?.Process?.length ? "md:after:absolute after:bottom-[50%]  md:after:left-[calc(50%+30px)] md:before:translate-x-[-50%] after:right-0 md:after:w-[100%] md:after:h-px dashed_border" : ""}`}>{data?.sno}</span>
                    </div>
                ))}
            </div>
            <div className={`${hiredev?.btn_text && "lg:mt-[50px] mt-[30px] flex items-center justify-center"}`}>
                {hiredev?.btn_link 
                ?
                    <Link
                        color="gray"
                        href={`${hiredev?.btn_link}`}
                        style={{
                        backgroundColor: hiredev?.btn_Color,
                        }}
                        className="text-white bg-blue-700 border border-transparent group text-[#ffffff_!important] relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]"
                    >
                        <span className="flex items-center rounded-md text-sm lg:px-7 px-4 lg:py-4 py-2">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                        <span className="font-[600] relative group-hover:text-black flex items-center lg:text-[20px] text-[14px]">
                            {hiredev?.btn_text}
                            <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        </span>
                    </Link>
                :
                    <button
                        className={`bg-[#0029FF] text-white border border-transparent group flex h-min items-center justify-center text-center font-medium relative rounded overflow-hidden text-center inline-block lg:px-7 lg:py-3 px-4 py-2 shadow-[10px_20px_40px_0px_#00000033]`}
                        onClick={() => setModalCall(hiredev?.btn_text)}
                        >
                        <span
                            className={`bg-[#fff] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                            ></span>
                        <span className={`lg:text-[20px] text-[14px] group-hover:text-black flex items-center font-[600] relative`}>
                            {hiredev?.btn_text}
                            <svg className={`ml-2 stroke-[white] group-hover:stroke-[black]`} width="16" height="16" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 1.5L16 10.3684L8.5 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                }
            </div>
        </Container>
    </section>
  )
}
