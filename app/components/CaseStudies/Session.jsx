import React from 'react'
import Container from '../common/Container';
import CloudinaryImage from 'app/components/common/CloudinaryImage';
import LINK from '../common/LINK';
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Session({
    session,
    setModalCall = true,
}) {
  return (
    <section className='lg:py-[55px] py-[35px]'>
        <Container>
            <div className='lg:grid grid-cols-12 gap-16'>
                <div className='col-span-6 flex lg:mb-[0px] mb-[30px]'>
                    {session?.Images?.map((items, key)=>(
                        <>
                            <CloudinaryImage 
                                backendImgUrl={items?.image?.data?.attributes?.url}
                                alt="arrow-right-white"
                                className="mx-auto mr-3 w-[50%]"
                                type="smallimg"
                            />
                        </>
                    ))}
                </div>
                <div className='col-span-6 flex items-center'>
                    <div>
                        <h4 className='text-[40px] text-[#0C2139] font-[700] mb-3'>{session?.title}</h4>
                        <p className='text-[24px] text-[#0C2139] font-[400] mb-3'>{session?.description}</p>
                        <Button
                        onClick={setModalCall}
                        className={`mt-[20px] blue_btn text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block`}
                      >
                        <span
                          class={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1`}
                        ></span>
                        <span
                          className={"font-[400] relative group-hover:text-black flex items-center text-[18px] py-1 px-3"}
                        >
                          {session?.btn_text}
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2 font-[14px] w-[14px] md:block hidden"
                          />
                        </span>
                      </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}
