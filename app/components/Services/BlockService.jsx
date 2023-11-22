import React from 'react'
import Container from '../common/Container'
import LINK from '../common/LINK'
import { background } from '@cloudinary/url-gen/qualifiers/focusOn'

export default function BlockService({BlockService}) {
  return (
    <section className='lg:py-[55px] py-[35px]'>
        <Container>
            <div className='lg:flex items-center'>
                <div className='lg:mb-0 mb-4'>
                    <div className='bg-[#0F2278] shadow-[0px_30px_25px_0px_#010F261F] py-10 px-6 rounded-[10px_0px_0px_10px]'>
                        <h4 className="relative font-bold text-white lg:text-[32px] text-[22px] text-left lg:leading-[35px] mb-3">
                            <span className="text-[80px] font-[800] gradient_text block w-[100%] leading-[80px]">
                                {BlockService?.bg_text}
                            </span>
                            <span className="w-[100%] font-bold relative top-[-30px]">
                                {BlockService?.title}
                            </span>
                        </h4>
                        <p className='text-[#ffffffa6] lg:text-[16px] text-[16px] font-[400] max-w-[500px] leading-[1.8]'>{BlockService?.description}</p>
                        {/* <Link href={BlockService?.btn_link}>{BlockService?.btn_text}</Link>  */}
                        <LINK
                            m_top={"30px"}
                            reflink={BlockService?.btn_link}
                            py={"py-3"}
                            px={"px-6"}
                            newBG={"#222222"}
                            textColor={"#fff"}
                            hoverBgColor={"#fff"}
                            HOVERTextColor={"#000"}
                            borderColor={"#000"}
                            textFont={`14px`}
                        >
                            {BlockService?.btn_text}
                        </LINK>
                    </div>
                </div>
                <div>
                    {BlockService?.serviceList?.map((items, key, arr)=>(
                        <div key={key} className={`p-[30px] pl-[50px] shadow-[0px_30px_25px_0px_#010F261F] ${arr.length - 1 === key ? "rounded-[0px_0px_10px_10px]" : ""} ${key === 0 ? "rounded-[10px_10px_0px_0px]": key === 6 ? "rounded-[0px_0px_10px_10px]" : ""}`}
                    style={{backgroundColor: items?.bg_color}}>
                            <h6 className='font-[600] text-[#fff] lg:text-[20px] text-[16px]'>{items?.title}</h6>
                            <p className='text-[#ffffffa6] lg:text-[14px] text-[13px]'>{items?.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}
