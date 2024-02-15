import React, {useEffect} from 'react';
import Container from '../common/Container';
import CloudinaryImage from "app/components/common/CloudinaryImage";
import "app/components/CaseStudies/deliverproduct.css";

export default function DeliverProjects({deliverproducts}) {

  return (
    <section className='lg:pt-[55px] pt-[35px]'>
        
        <Container className='mb-[55px]'>
            <div className="pb-[55px]">
                <h4 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
                    <span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[80px]">
                        {deliverproducts?.bgTitle}
                    </span>
                    <span class="w-[100%] font-bold relative mt-[-30px] block">
                        {deliverproducts?.title}
                    </span>
                </h4>
                <p className="text-[16px] text-[#383838] font-[400] text-center max-w-[800px] mx-auto">{deliverproducts?.description}</p>
            </div>
            <div className='grid grid-cols-12 lg:gap-16 gap-8'>
                {deliverproducts?.ResultList?.map((items, key)=>(
                    <div key={key} className='lg:col-span-3 md:col-span-6 col-span-12 lg:text-left text-center'>
                        <h6 className='text-[100px] font-[700] leading-[110px]'
                        style={{color: items?.numberColor}}>{items?.number}</h6>
                        <p className='text-[#383838] text-[16px] font-[400]'>{items?.text}</p>
                    </div>
                ))}
            </div>
        </Container>
        <div className='overflow-hidden '
        // pt-[300px] pb-[350px] deliverproducts' 
        style={{backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #DBECFF 100%)`}}
        >
            <div className=' grid grid-cols-1 gap-16'
            //  deliverpro'
            // style={{backgroundImage: `linear-gradient(180deg, #DBECFF 101.54%, rgba(255, 255, 255, 0) 156.67%)`}}
            >
                {deliverproducts?.Images?.map((items, key)=>(
                    <div className='image' key={key}>
                        <CloudinaryImage 
                            backendImgUrl={items?.image?.data?.attributes?.url}
                            alt={items?.image?.data?.attributes?.alternativeText}
                            type="smallimg"
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
