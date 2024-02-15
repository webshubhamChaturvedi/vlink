import React from 'react'
import Container from './Container'

export default function ClientNeed({clientneed}) {
  return (
    <section className='lg:py-[55px] py-[35px] relative z-[1]'
    // style={{backgroundImage: 'linear-gradient(123.94deg, #9DC251 -3.95%, #0450A2 100.14%)'}}
    >
        {/* <Container className="bg-[#F9F9F9] rounded-[30px] p-[30px] shadow-[10px_10px_25px_0px_#0050D521]"> */}
        <Container className="">
            <div className="lg:grid grid-cols-12 gap-16">
                <div className='lg:col-span-6 col-span-12'>
                    <div className='stickthis'>
                        <h6 className='mb-[30px] relative font-bold text-[#fff] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px]'>
                            <span className="xl:text-[100px] lg:text-[60px] text-[40px] font-[800] gradient_text block w-[100%] xl:leading-[100px] lg:leading-[80px] leading-[70px]">
                                {clientneed?.bgTitle}
                            </span>
                            <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
                                {clientneed?.title}
                            </span>
                        </h6>
                        <ul>
                            {clientneed?.serviceList.map((items, key)=>(
                                <li key={key} className='lg:text-[20px] text-[16px] text-[#fff] font-[400] mb-4 flex items-center'><span className='mr-2 border-[4px] border-[transparent] rounded-[100%] w-[20px] h-[20px] block'></span>{items?.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='lg:col-span-6 col-span-12'>
                    <h6 className='lg:text-[24px] text-[20px] text-[#fff] font-[600] mb-[20px]'>{clientneed?.rightTitle}</h6>
                    <p className='lg:text-[16px] text-[14px] text-[#fff] font-[400]'>{clientneed?.rightDesc}</p>
                    {clientneed?.ReasonList.map((item, key)=>(
                        <div key={key} className='case-testimonial mt-12'>
                            <div className='case-img flex items-top'>
                                <div>
                                    <p className='text-[#83AC8E] font-[800] lg:text-[120px] text-[70px] leading-[initial] lg:mt-[-35px] mt-[-20px]'>{item?.number}</p>
                                </div>
                                <div className='lg:ml-8 ml-4'>
                                    <p className='lg:text-[34px] text-[26px] text-[#fff] font-[700] mb-3'>{item?.title}</p>
                                    <p className='lg:text-[20px] text-[16px] text-[#FBF8F8] font-[400]'>{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </Container>
    </section>
  )
}
