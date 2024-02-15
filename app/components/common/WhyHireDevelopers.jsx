import React from 'react'
import Container from './Container'
import CloudinaryImage from "../common/CloudinaryImage"
import Link from 'next/link'

export default function WhyHireDevelopers({whyvlink, setModalCall}) {
  return (
    <section
      className={`lg:py-[55px] py-[35px]`}
    >
        <Container>
            <div className="md:mb-[55px] mb-[30px]">
                <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
                    {whyvlink?.bgText &&
                        <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                            {whyvlink?.bgText}
                        </span>
                    }
                    <span class={`w-[100%] font-bold relative ${whyvlink?.bgText && "mt-[-30px]"} block`}>
                        {whyvlink?.title}
                    </span>
                </h4>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                {whyvlink?.HireDeveloperList ? whyvlink?.HireDeveloperList?.map((data, key)=>(
                    <div key={key} className='transform transition duration-1000 hover:shadow-[0px_0px_60px_0px_#00000033] rounded-[20px] border-[1px] border-[#A9C9FF] px-[20px] lg:mb-[0px] mb-[30px]'>
                        {data?.icon?.data?.attributes.url &&
                            <span className='bg-[#FAFCFF] shadow-[0px_0px_40px_0px_#0050D521] flex items-center justify-center w-[100px] h-[100px] rounded-[100%] mt-[-50px]'>
                                <CloudinaryImage
                                    backendImgUrl={data?.icon?.data?.attributes.url}
                                    alt={data?.image?.icon?.alternativeText}
                                    type="smallimg"
                                />
                            </span>
                        }
                        <div className='py-[20px]'>
                            <h6 className='text-[#002055] text-[24px] font-[600] mb-6'>{data?.title}</h6>
                            {data?.heading1 &&
                                <div className='grid grid-cols-12 gap-2 mb-6'>
                                    <div className='col-span-1'>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_11676_170)">
                                            <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                            <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                            <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </mask>
                                            <g mask="url(#mask0_11676_170)">
                                            <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                            </g>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_11676_170">
                                            <rect width="23" height="23" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='col-span-11'>
                                        <h6 className='text-[16px] text-[#121212] font-[600]'>{data?.heading1}</h6>
                                        <p className='text-[14px] text-[#626262] font-[400]'>{data?.description1}</p>
                                    </div>
                                </div>
                            }
                            {data?.heading2 &&
                                <div className='grid grid-cols-12 gap-2 mb-6'>
                                    <div className='col-span-1'>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_11676_170)">
                                            <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                            <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                            <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </mask>
                                            <g mask="url(#mask0_11676_170)">
                                            <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                            </g>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_11676_170">
                                            <rect width="23" height="23" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='col-span-11'>
                                        <h6 className='text-[16px] text-[#121212] font-[600]'>{data?.heading2}</h6>
                                        <p className='text-[14px] text-[#626262] font-[400]'>{data?.description2}</p>
                                    </div>
                                </div>
                            }
                            {data?.heading3 &&
                                <div className='grid grid-cols-12 gap-2 mb-6'>
                                    <div className='col-span-1'>
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_11676_170)">
                                            <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                            <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                            <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </mask>
                                            <g mask="url(#mask0_11676_170)">
                                            <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                            </g>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_11676_170">
                                            <rect width="23" height="23" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className='col-span-11'>
                                        <h6 className='text-[16px] text-[#121212] font-[600]'>{data?.heading3}</h6>
                                        <p className='text-[14px] text-[#626262] font-[400]'>{data?.description3}</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                ))
                :
                whyvlink?.engagementList?.map((data, key)=>(
                    <div key={key} className='transform transition duration-1000 shadow-[0px_0px_60px_0px_#0050D521] rounded-[20px] px-[40px] py-[40px]'>
                        {data?.icon?.data?.attributes.url &&
                            <span className='w-[200px] block mb-4 mx-auto'>
                                <CloudinaryImage
                                    backendImgUrl={data?.icon?.data?.attributes.url}
                                    alt={data?.image?.icon?.alternativeText}
                                    type="smallimg"
                                />
                            </span>
                        }
                        <h6 className='text-[#002055] text-[24px] font-[600] mb-6 text-center'>{data?.title}</h6>
                        {data?.description1 &&
                            <div className='grid grid-cols-12 gap-2 mb-6'>
                                <div className='col-span-1'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_11676_170)">
                                        <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                        <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </mask>
                                        <g mask="url(#mask0_11676_170)">
                                        <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_11676_170">
                                        <rect width="23" height="23" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='col-span-11'>
                                    <p className='text-[14px] text-[#626262] font-[400]'>{data?.description1}</p>
                                </div>
                            </div>
                        }
                        {data?.description2 &&
                            <div className='grid grid-cols-12 gap-2 mb-6'>
                                <div className='col-span-1'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_11676_170)">
                                        <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                        <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </mask>
                                        <g mask="url(#mask0_11676_170)">
                                        <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_11676_170">
                                        <rect width="23" height="23" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='col-span-11'>
                                    <p className='text-[14px] text-[#626262] font-[400]'>{data?.description2}</p>
                                </div>
                            </div>
                        }
                        {data?.description3 &&
                            <div className='grid grid-cols-12 gap-2 mb-6'>
                                <div className='col-span-1'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_11676_170)">
                                        <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                        <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </mask>
                                        <g mask="url(#mask0_11676_170)">
                                        <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_11676_170">
                                        <rect width="23" height="23" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='col-span-11'>
                                    <p className='text-[14px] text-[#626262] font-[400]'>{data?.description3}</p>
                                </div>
                            </div>
                        }
                        {data?.description4 &&
                            <div className='grid grid-cols-12 gap-2 mb-6'>
                                <div className='col-span-1'>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_11676_170)">
                                        <mask id="mask0_11676_170" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                        <path d="M11.4974 21.0846C12.7561 21.0863 14.0028 20.8391 15.1657 20.3574C16.3286 19.8757 17.3849 19.1689 18.2738 18.2777C19.165 17.3888 19.8718 16.3325 20.3535 15.1696C20.8352 14.0067 21.0824 12.76 21.0807 11.5013C21.0823 10.2426 20.8352 8.99593 20.3535 7.83301C19.8718 6.6701 19.165 5.61384 18.2738 4.72493C17.3849 3.8337 16.3286 3.12691 15.1657 2.6452C14.0028 2.16349 12.7561 1.91635 11.4974 1.91798C10.2387 1.91637 8.99202 2.16353 7.82911 2.64524C6.66619 3.12695 5.60993 3.83372 4.72103 4.72493C3.82981 5.61384 3.12304 6.6701 2.64133 7.83301C2.15962 8.99593 1.91247 10.2426 1.91407 11.5013C1.91244 12.76 2.15958 14.0067 2.64129 15.1696C3.12301 16.3325 3.82979 17.3888 4.72103 18.2777C5.60993 19.1689 6.66619 19.8757 7.82911 20.3574C8.99202 20.8391 10.2387 21.0862 11.4974 21.0846Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                        <path d="M7.66406 11.5L10.5391 14.375L16.2891 8.625" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </mask>
                                        <g mask="url(#mask0_11676_170)">
                                        <path d="M0 0H23V23H0V0Z" fill="#0BDA88"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_11676_170">
                                        <rect width="23" height="23" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className='col-span-11'>
                                    <p className='text-[14px] text-[#626262] font-[400]'>{data?.description4}</p>
                                </div>
                            </div>
                        }
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
                        <button
                            className={`buttonOpen bg-[#0029FF] text-white border border-transparent group flex h-min items-center justify-center text-center font-medium relative rounded overflow-hidden text-center inline-block px-7 py-3 shadow-[10px_20px_40px_0px_#00000033]`}
                            // onClick={setModalCall}
                            >
                            <span
                                className={`bg-[#fff] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                                ></span>
                            <span className={`text-[20px] group-hover:text-black flex items-center font-[600] relative`}>
                                {whyvlink?.btn_text}
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
