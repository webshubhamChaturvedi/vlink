import React from 'react'
import Container from './Container';
import CloudinaryImage from '../common/CloudinaryImage';
import { apiEndpoint } from 'app/scripts/fetch';
import { createMarkup } from "./../../scripts/utils";

export default function Results({results}) {
  return (
    <section className='lg:py-[55px] py-[35px] bg-no-repeat bg-cover bg-left lg:mb-[55px] mb-[35px]'
    style={{ backgroundImage: `url(${apiEndpoint(results?.bgImage?.data?.attributes?.url)})`}}>
        <Container>
            <div className="lg:pb-[55px] pb-[35px]">
                <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                    <span className="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[80px]">
                    {results?.bg_title}
                    </span>
                    <span className="w-[100%] font-bold relative mt-[-30px] font-sans block">
                    {results?.title}
                    </span>
                </h4>
            </div>
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-6 col-span-12'>
                    <p className='text-[#383838] lg:text-[20px] text-[14px] font-[400]' dangerouslySetInnerHTML={createMarkup(results?.description)}></p>
                </div>
                <div className='lg:col-span-6 col-span-12'>
                {/* <CloudinaryImage
                    backendImgUrl={results?.image?.data?.attributes?.url}
                    alt="arrow-right-white"
                    className="w-full"
                    type="isDesktop"
                /> */}
                </div>
            </div>
        </Container>
    </section>
  )
}
