import React from 'react'
import Container from './Container'

export default function EngagementModel({hiremodel, service}) {
  return (
    <section className='lg:py-[55px] py-[35px]'>
        <Container>
            <div className="lg:pb-[55px] pb-[35px]">
                <h4 class="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
                    {hiremodel?.bgText && 
                    <span class="lg:text-[80px] text-[40px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[40px]">
                        {hiremodel?.bgText}
                    </span>
                    }
                    <span class={`w-[100%] font-bold relative ${hiremodel?.bgText && "mt-[-30px]"} ${hiremodel?.bgText && "mt-[-30px]"} block`}>
                    {hiremodel?.title}
                    </span>
                </h4>
                {hiremodel?.description &&
                    <p className="text-[16px] text-[#ffffffa6] font-[400] text-center max-w-[1100px] mx-auto">
                        {hiremodel?.description}
                    </p>
                }
            </div>
            <div className='flex lg:flex-nowrap flex-wrap lg:gap-y-0 gap-y-7'>
                {service?.map((items, key)=>(
                    key === 0 ?
                    <div key={key} className='lg:w-[40%] md:w-[50%] w-[100%] bg-[#0050D5] py-5 px-5 rounded-[10px] shadow-[0px_0px_20px_0px_#0000001A]'>
                        <h6 className='text-[#FFFFFF] text-[24px] font-[600] text-center'>
                            <span className='border-b-[1px] inline-block px-4 pb-2'>
                                {items?.title}
                            </span>
                        </h6>
                        <ul className='mt-8'>
                            {items?.services?.map((data, key)=>(
                                data?.text && 
                                    <li key={key} className='font-[600] text-[14px] text-[#FFFFFF] mb-4 border-b-[1px] border-[#80C0CC] pb-4'>
                                        {data?.sno && <span className='text-[#FFFFFFBA] mr-4'>{data?.sno} -</span>}
                                        {data?.text}
                                    </li>
                            ))}
                        </ul>
                    </div>
                    :
                    <div key={key} className={`lg:w-[40%] md:w-[50%] w-[100%] ${key===1 ? "bg-[#DDFAFF]" : key === 2 ? "bg-[#E6F0FF]" : key === 3 ? "bg-[#FFF4E7]" : ""} py-5 px-5 rounded-[10px] shadow-[0px_0px_20px_0px_#0000001A]`}>
                        <h6 className='text-[#000] text-[24px] font-[600] text-center'>
                            <span className='border-b-[1px] inline-block px-4 pb-2'>
                                {items?.title}
                            </span>
                        </h6>
                        <ul className='mt-8'>
                            {items?.services?.map((data, key)=>(
                                data?.text && 
                                    <li key={key} className='flex items-center font-[600] text-[14px] text-[#010A1B] mb-4 border-b-[1px] border-[#80C0CC] pb-4'>
                                        <svg className='mr-3' width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_12606_3830)">
                                            <path d="M8.10904 12.2324L4.75 9.04944L5.86942 7.98894L8.10904 10.1099L12.5867 5.86719L13.7069 6.92844L8.10904 12.2324Z" fill="#010A1B" fillOpacity="0.54"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.792969 9C0.792969 4.44375 4.69193 0.75 9.5013 0.75C14.3107 0.75 18.2096 4.44375 18.2096 9C18.2096 13.5562 14.3107 17.25 9.5013 17.25C4.69193 17.25 0.792969 13.5562 0.792969 9ZM9.5013 15.75C8.56563 15.75 7.63913 15.5754 6.77468 15.2362C5.91024 14.897 5.12478 14.3998 4.46317 13.773C3.80155 13.1462 3.27673 12.4021 2.91866 11.5831C2.5606 10.7642 2.3763 9.88642 2.3763 9C2.3763 8.11358 2.5606 7.23583 2.91866 6.41689C3.27673 5.59794 3.80155 4.85382 4.46317 4.22703C5.12478 3.60023 5.91024 3.10303 6.77468 2.76381C7.63913 2.42459 8.56563 2.25 9.5013 2.25C11.391 2.25 13.2032 2.96116 14.5394 4.22703C15.8756 5.4929 16.6263 7.20979 16.6263 9C16.6263 10.7902 15.8756 12.5071 14.5394 13.773C13.2032 15.0388 11.391 15.75 9.5013 15.75Z" fill="#010A1B" fillOpacity="0.54"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_12606_3830">
                                            <rect width="19" height="18" fill="white"/>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                        {data?.text}
                                    </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  )
}
