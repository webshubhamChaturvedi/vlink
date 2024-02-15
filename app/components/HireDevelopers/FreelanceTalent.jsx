import React from 'react'
import Container from '../common/Container';
import CloudinaryImage from "app/components/common/CloudinaryImage";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./freelancetalent.css"
import Link from 'next/link';

export default function FreelanceTalent({talent, setModalCall}) {
  return (
    <section className='lg:py-[55px] py-[35px] freelance_talent'>
        <Container>
            <div className='lg:pb-[55px] pb-[35px]'>
                <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                {talent?.bgText && 
                    <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                    {talent?.bgText}
                    </span>
                }
                <span class={`w-[100%] font-bold relative block ${talent?.bgText && "mt-[-30px]"}`}>
                    {talent?.title}
                </span>
                </h4>
            </div>
            <div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-5 gap-5'>
                {talent?.Customers?.map((data, key)=>(
                    <div key={key} className='shadow-[0px_10px_30px_0px_#8E8EF021] bg-[#ffffff] overflow-hidden'>
                        <div className='relative bg-[#fff] w-[100%] p-2 h-[200px] overflow-hidden object-cover'>
                            {data?.image?.data?.attributes?.url &&
                                <CloudinaryImage
                                    backendImgUrl={data?.image?.data?.attributes?.url}
                                    className="relative mx-auto rounded-[2px] object-contain h-full"
                                    alt={data?.image?.data?.attributes?.alternativeText}
                                    type="isTablet"
                                />
                            }
                        </div>
                        <div className='px-3 pt-5 pb-3'>
                            {data?.Name &&
                                <h6 className='text-[16px] font-[600] text-[#0050D5]'>{data?.Name}</h6>
                            }
                            <span className='flex items-center text-[#059C60] text-[14px] font-[400] mt-2'>
                                <CloudinaryImage
                                    backendImgUrl={`/uploads/verify_7e3e072685.png`}
                                    className="mr-2"
                                    alt={'VlinkInfo-verify'}
                                    type="icon"
                                />
                                Verified
                            </span>
                            {data?.experience && 
                                <p className='flex items-center text-[14px] text-[#626262] font-[400] mt-2'>
                                    <CloudinaryImage
                                        backendImgUrl={`/uploads/portfolio_1_290f9e636b.png`}
                                        className="mr-2"
                                        alt={'VlinkInfo-verify'}
                                        type="icon"
                                    />
                                    {data?.experience}
                                </p>
                            }
                            {data?.Designation && 
                                <p className='flex items-center text-[14px] text-[#626262] font-[400] mt-2'>
                                    <CloudinaryImage
                                        backendImgUrl={`/uploads/web_development_1_f6b085fe1d.png`}
                                        className="mr-2"
                                        alt={'VlinkInfo-verify'}
                                        type="icon"
                                    />
                                    {data?.Designation}
                                </p>
                            }
                            {data?.Company &&
                            <p className='flex items-center flex-wrap text-[14px] font-[400] text-[#383838] mt-2'>
                                <span className='w-full mb-1'>Previously At :-</span>
                                <span className='ml-2 text-[20px] font-[600] min-h-[66px] w-full'>{data?.Company}</span>
                            </p>
                            }
                            {data?.description &&
                                <p className='flex items-center text-[14px] font-[400] text-[#383838] mt-2'>
                                    <CloudinaryImage
                                        backendImgUrl={`/uploads/web_development_1_f6b085fe1d.png`}
                                        className="mr-2 invisible"
                                        alt={'VlinkInfo-verify'}
                                        type="icon"
                                    />
                                    {data?.description}
                                </p>
                            }
                            <div className='mt-1'>
                                {data?.btn_link
                                    ?
                                        <Link
                                            href={`${data?.btn_link}`}
                                            style={{
                                            backgroundColor: data?.btn_color,
                                            }}
                                            className="bg-blue-700 border border-transparent group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] relative rounded overflow-hidden shadow-[10px_20px_40px_0px_#00000033]"
                                        >
                                            <span className="rounded-md text-[14px] px-2 py-2 font-[400]">
                                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                                            <span className="relative group-hover:text-black">
                                                {`Hire ${data?.Name}`}
                                            </span>
                                            </span>
                                        </Link>
                                    :
                                    <button
                                    onClick={() => setModalCall(`Hire ${data?.Name}`)}
                                        className="text-white bg-[#0050D5] block w-full border border-transparent group flex h-min items-center justify-center text-center font-medium focus:z-10 relative rounded overflow-hidden px-2 py-3"
                                    >
                                        <span className="">
                                        <span
                                            className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
                                        ></span>
                                        <span
                                            className={`flex items-center font-[600] relative group-hover:text-[#000] lg:text-[16px] text-[14px]`}
                                        >
                                            {`Hire ${data?.Name}`}
                                            <svg
                                                className="ml-2 stroke-white group-hover:stroke-black"
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
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}
