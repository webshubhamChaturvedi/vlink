import React from 'react'
import Container from './Container'
import { apiEndpoint } from 'app/scripts/fetch';
import CloudinaryImage from "../common/CloudinaryImage";
import "../common/newhero.css"
import Link from 'next/link';

export default function NewHeroSection({data, setModalCall=false}) {
  return (
    <section className='bg-cover bg-no-repeat bg-center lg:py-0 py-[35px] pt-20'
        style={{
            backgroundImage: `url('${apiEndpoint(data?.bgImage?.data?.attributes?.url)}')`,
        }}
    >
        <Container>
            <div className='grid lg:grid-cols-12 grid-cols-6 gap-x-10'>
                <div className='col-span-6 flex items-center p-[100px_0px_50px_0px]'>
                    <div>
                        {data?.h1_purple && <h6 className='mb-3'>{data?.h1_purple}</h6>}
                        {data?.h1_black && <h1 className='text-[#fff] xl:text-[48px] lg:text-[38px] md:text-[30px] text-[26px] font-[600] mb-4 xl:leading-[65px] lg:leading-[45px] md:leading-[35px] leading-[30px]'>{data?.h1_black}</h1>}
                        {data?.p && <p className='text-[#fff] xl:text-[24px] lg:text-[18px] text-[14px] font-[400] mb-4 xl:leading-[35px] lg:leading-[25px] leading-[20px]'>{data?.p}</p>}
                        <div className='flex items-center lg:mt-8 mt-5'>
                        {data?.banner_btn && 
                            data?.banner_btn?.map((data, key)=>(
                                <button key={key} onClick={() => setModalCall(data?.text)} class="raise flex items-center justify-between border-[#fff] text-[#000] text-[#000] lg:text-[20px] text-[14px] font-[700] lg:px-5 px-3 lg:py-2 py-1 lg:mr-4 mr-2"
                                style={{
                                    backgroundColor: data?.color,
                                    color: data?.textcolor
                                }}>
                                    {data?.text}
                                    <svg className="lg:w-[16px] w-[12px] lg:ml-5 ml-3" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3226 1.39844L20.1875 11.9488L10.3226 1.39844ZM20.1875 11.9488L10.3226 22.4991L20.1875 11.9488Z" fill={data?.textcolor} />
                                        <path d="M10.3226 1.39844L20.1875 11.9488L10.3226 22.4991" stroke={data?.textcolor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.89289 1.39844L11.7578 11.9488L1.89289 1.39844ZM11.7578 11.9488L1.89289 22.4991L11.7578 11.9488Z" fill={data?.textcolor}/>
                                        <path d="M1.89289 1.39844L11.7578 11.9488L1.89289 22.4991" stroke={data?.textcolor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button> 
                            ))
                        }
                        </div>
                        {data?.description &&
                            <p className="text-[#FFFFFF]  xl:text-[24px] lg:text-[18px] text-[14px] font-[400] xl:leading-[35px] lg:leading-[25px] leading-[20px] mt-5 italic">
                                {data?.description}
                            </p>
                        }
                    </div>
                </div>
                <div className='col-span-6 lg:flex hidden items-end'>
                    {data?.image?.data?.attributes?.url &&
                        <CloudinaryImage
                            backendImgUrl={data?.image?.data?.attributes?.url}
                            className="inline-block"
                            alt={data?.image?.data?.attributes?.alternativeText}
                            type="smallimage"
                        />
                    }
                </div>
            </div>
        </Container>
    </section>
  )
}
