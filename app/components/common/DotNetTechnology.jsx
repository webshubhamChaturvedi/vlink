import React from 'react'
import Container from './Container';
import CloudinaryImage from "app/components/common/CloudinaryImage"
import Link from 'next/link';

export default function DotNetTechnology({dottec, isJava=false}) {
  
  return (
    <section className={`${isJava ? "" : "lg:py-[55px] py-[35px]"}`}>
      <Container>
        <div className="lg:mb-[55px] mb-[35px]">
          <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            {dottec?.bgText && 
              <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">
                {dottec?.bgText}
              </span>
            }
            <span class={`w-[100%] font-bold relative block ${dottec?.bgText && "mt-[-30px]"}`}>
              {dottec?.title}
            </span>
          </h4>
          <p className='lg:text-[18px] text-[16px] font-[400] text-center text-[#4C4C4C] max-w-[1100px] mx-auto'>Dot NET programmers at VLink have hands-on experience in popular Dot NET frameworks, libraries, and platforms. Our developers possess the capability to scale your dot net development project.</p>
        </div>
        <ul>
          {dottec?.TechStack.map((items, key)=>(
            <li key={key} className='flex lg:flex-nowrap flex-wrap bg-[#FFFFFF] shadow-[0px_0px_30px_0px_#0000000F] mb-4 p-0 rounded-[4px]'>
              <div className='bg-[#E8F1FF] lg:w-[30%] w-[100%] p-3 text-[#00102B] text-[22px] font-[600] inline-flex items-center rounded-[4px_0px_0px_4px]'>
                {items?.icon?.data?.attributes?.url &&
                  <span className='inline-flex items-center justify-center w-[60px] h-[60px] rounded-[100%] bg-[#fff] mr-3'>
                    <CloudinaryImage
                      backendImgUrl={items?.icon?.data?.attributes?.url}
                      alt={items?.icon?.data?.attributes?.alternativeText}
                      className="w-[30px]"
                      type="icon"
                    />
                  </span>
                }
                {items?.title}
              </div>
              <div className='lg:w-[70%] w-[100%] inline-flex flex-wrap items-center p-3'>
                {items?.Languages?.map((data,index)=>(
                  data?.sno ?
                    <Link href={`${data?.sno}`} key={index} className={`${index + 1 != items?.Languages?.length ? "border-r-[1px] border-[#B8B7B7]" : ""} text-[20px] text-[#0050D5] font-[400] py-2 px-4 inline-block mb-2`}>
                      {data?.text}
                    </Link>
                    :
                    <span key={index} className={`text-[20px] text-[#00102B] font-[400] py-2 px-4 ${index + 1 != items?.Languages?.length ? "border-r-[1px] border-[#B8B7B7]" : ""} inline-block mb-2`}>
                    {data?.text}
                    </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
