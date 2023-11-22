import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { DateTime } from "luxon";

const SocialSticky =({ data, classContainer,datedata })=> {

    const luxonDate = DateTime.fromJSDate(new Date(datedata));
    
    const stickyRef = useRef();

    const eventScroll =()=> {
        const social = stickyRef.current;

        if(social){
            if(window.pageYOffset>2695){
                social.style.position = '';
                social.style.top = 'unset';
                social.style.bottom = '0px';
            }else if(window.pageYOffset>196){
                social.style.position = '';
                social.style.top = '0px';
                social.style.bottom = 'unset';
            }else{
                social.style.position = 'relative';
                social.style.top = '0px';
                social.style.bottom = 'unset';
            }
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', eventScroll);
        return ()=> window.removeEventListener('scroll', eventScroll);
    }, []);

    return (
        <span ref={stickyRef} style={{ position: 'relative', top: "0px" }} className={"social-sticky text-center align-center z-[21] " + classContainer}>
            <div className='p-2 mb-2'>
                {datedata && (<h3 className='text-md font-[600] text-[24px]'>{luxonDate.day.toLocaleString({ minimumIntegerDigits: 2 })}</h3>)}
                {datedata && (<h6 className='text-xs'>{luxonDate.toFormat("MMM")} {luxonDate.toFormat("yyyy")}</h6>)}
            </div>
            <div className='pt-2'>
                <a className='text-xs font-[600] text-[16px]' href="#" target="_blank" rel="noreferrer">
                    Share
                </a>
            </div>
            <div className='p-2 flex-row justify-center items-center space-x-2'>
                {data&&data.map((item, i)=>
                    <Link href={item.href}  target="_blank" key={i} className='flex flex-1 w-fit my-6 cursor-pointer' style={{ marginLeft: "5px", marginRight:"5px"}}>
                        <span className='hidden'>LinkedIn</span>
                        <span className="border bg-[#fff] border-color-[#ccc] rounded-full p-2" style={{height: "48px", width: "48px"}}>
                            <img alt={item.alternativeText || item.name} src={item.src} style={{ width: "16px", height: "16px" }} className='mx-auto mt-2'/>
                        </span>
                    </Link>
                )} 
            </div>
        </span>
    );
}

export default SocialSticky;