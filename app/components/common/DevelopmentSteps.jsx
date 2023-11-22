import React from 'react'

export default function DevelopmentSteps({steps}) {
  return (
    <section className='lg:pt-[55px] pt-[35px]'>
        <div className='container shadow-[0px_0px_20px_0px_#00000017] rounded-[20px] py-[55px] px-[30px]'>
          <h4 className='relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-[55px] text-center '>{steps?.title}</h4>

          <div className=''>
            <ul>
                {steps?.stepsList.map((items, key)=>(
                    <li key={key} className='shadow-[0px_0px_4px_0px_#0000001C] rounded-[20px] overflow-hidden lg:text-[20px] text-[14px] text-[#383838] lg:font-[600] font-[600] flex items-center mb-8 lg:pr-4 pr-2'><span className={`${items?.colour === "#0062FF" ? "text-[#fff]" : "text-[#000]"} lg:text-[24px] text-[16px]  font-[600] block max-w-[20%] w-[100%] text-center lg:py-[40px] py-[30px] lg:mr-[30px] mr-[15px]`}
                    style={{backgroundColor: items?.colour}}>{items?.stepNum}</span> {items?.stepDesc}</li>
                ))}
            </ul>
          </div>
        </div>
    </section>
  )
}
