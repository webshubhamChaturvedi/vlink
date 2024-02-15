import React from 'react';
import Container from '../common/Container';
import CloudinaryImage from 'app/components/common/CloudinaryImage';

export default function TestimonialNew({testimonial}) {
  return (
    <section className='lg:py-[55px] py-[35px]'>
        <Container className='max-w-[1100px] mx-auto'>
            
            <p className='lg:text-[30px] text-[24px] text-[#FFFFFF] font-[600] relative'>
            <CloudinaryImage 
                backendImgUrl={testimonial?.bgImage?.data?.attributes?.url} 
                alt={testimonial?.bgImage?.data?.attributes?.url}
                className="w-full max-w-[100px] absolute top-[-60px] left-[-60px]"
                type="smallimg"
            />
            {testimonial?.description}</p>
            <div className='flex mt-6 items-center'>
                <span className='w-[110px] h-[110px] block bg-[#fff] rounded-[100%] flex items-center justify-center mr-3'>
                    <CloudinaryImage 
                        backendImgUrl={testimonial?.icon?.data?.attributes?.url}
                        alt={testimonial?.icon?.data?.attributes?.url}
                        className="w-full max-w-[70px]"
                        type="smallimg"
                    />
                </span>
                <div>
                    <h6 className='md:text-[30px] text-[24px] text-[#FFFFFF] font-[600]'>{testimonial?.name}</h6>
                    <p className='lg:text-[20px] text-[16px] text-[#fdfdfd] font-[400]'>{testimonial?.designation}</p>
                </div>
            </div>
        </Container>
    </section>
  )
}
