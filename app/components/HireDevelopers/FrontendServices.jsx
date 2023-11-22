import React from 'react';
import CloudinaryImage from 'app/components/common/CloudinaryImage';
import Container from '../common/Container';

export default function FrontendServices({frontend, isBackendService=false}) {
  return (
    <section
    className={`${isBackendService ? "lg:pt-[55px] pt-[35px]" : "bg-cover bg-no-repeat bg-center bg-fixed"}`}
    style={{
        backgroundImage: isBackendService ? `linear-gradient(140deg, ${frontend?.bg_color} 0%, #F7E4E3 75%)` : `url("https://backend.vlinkinfo.com/uploads/Group_238992_ab0761c3d9.png")`
    }}>
                    
                    {isBackendService ?
                        (
                            <Container>
                                <div className='lg:mb-[55px] mb-[35px]'>
                                    <h4 class="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3"><span class="lg:text-[100px] text-[45px] font-[800] gradient_text block w-[100%] lg:leading-[100px] leading-[45px]">{frontend?.bg_text}</span><span class="w-[100%] font-bold relative top-[-30px]">{frontend?.title}</span></h4>
                                </div>
                                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-10">
                                    <div className=''>
                                        <p className='text-[#00052F]  lg:text-[16px] text-[16px] font-[600] leading-[1.8] mb-4'>{frontend?.description}</p>
                                        <ul>
                                            {frontend?.servicesList?.map((items, key)=>(
                                                <li key={key} className='flex py-[30px]'>
                                                    <div className='w-[100px] h-[70px] mr-4 flex items-center justify-center shadow-[0px_10px_20px_0px_#0050D529] lg:p-4 p-3'>
                                                        <CloudinaryImage
                                                            backendImgUrl={items?.icon?.data?.attributes?.url}
                                                            alt={items?.icon?.data?.attributes?.alternativeText}
                                                            className="w-full"
                                                            type="icon"
                                                        />
                                                    </div>
                                                    <div className=''>
                                                        <h6 className='text-[20px] text-[#00102B] font-[600]'>{items?.title}</h6>
                                                        <p className='text-[16px] text-[#434343] font-[400] lg:max-w-[80%]'>{items?.description}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <CloudinaryImage
                                            backendImgUrl={frontend?.image?.data?.attributes?.url}
                                            alt={frontend?.image?.data?.attributes?.alternativeText}
                                            className="sticky top-0"
                                            type="isDesktop"
                                        />
                                    </div>
                                </div>
                            </Container>
                        )
                    :
                        
                        (
                            <div className='flex lg:items-stretch flex-wrap md:flex-nowrap'>
                                <div className='w-full py-[55px] px-[55px]'>
                                    <h4 class="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3"><span class="text-[100px] font-[800] gradient_text block w-[100%] leading-[100px]">{frontend?.bg_text}</span><span class="w-[100%] font-bold relative top-[-30px]">{frontend?.title}</span></h4>
                                    <ul>
                                        {frontend?.servicesList?.map((items, key)=>(
                                            <li key={key} className='border-t-[1px] border-[#949598] border-dashed flex items-center py-[30px]'>
                                                <div className='w-[70px] h-[70px] mr-4 flex items-center'>
                                                    <CloudinaryImage
                                                        backendImgUrl={items?.icon?.data?.attributes?.url}
                                                        alt={items?.icon?.data?.attributes?.alternativeText}
                                                        className=""
                                                        type="icon"
                                                    />
                                                </div>
                                                <div className=''>
                                                    <h6 className='text-[20px] text-[#00102B] font-[600]'>{items?.title}</h6>
                                                    <p className='text-[16px] text-[#434343] font-[400]'>{items?.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='w-3/4 '>
                                    {/* <CloudinaryImage
                                        backendImgUrl={frontend?.image?.data?.attributes?.url}
                                        alt={frontend?.image?.data?.attributes?.alternativeText}
                                        className="sticky top-0"
                                        type="isDesktop"
                                    /> */}
                                </div>
                            </div>
                        )
                    }
                    
        </section>
  )
}
