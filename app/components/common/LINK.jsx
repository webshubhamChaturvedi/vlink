import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function LINK({newBG, textFont, nowrap, table, reflink, FAIcon, children, py, px, textColor, bgColor, borderColor, HOVERTextColor, hoverBgColor, m_top}) {
  return (
    <Link
          href={`${reflink}`}
          className={`${table === "undefined" ? table : "t"} text-[${textColor === "undefined" ? "#fff" : textColor}] text-[${textFont === "undefined" ? "14px" : textFont}] hover:text-[${HOVERTextColor === "undefined" ? HOVERTextColor : "#ffffff"}] mt-[${m_top === "undefined" ? "0px" : m_top}] bg-[${bgColor === "undefined" ? "#0050D5" : bgColor}] border border-[${borderColor === "undefined" ? "#0050D5" : borderColor === "" ? "#0050D5" : borderColor}] hover:bg-[${bgColor === "undefined" ? bgColor : "#0050D5"}] focus:ring-4 focus:ring-blue-300 disabled:hover:bg-[${bgColor === "undefined" ? bgColor : "#0050D5"}] dark:bg-[${bgColor === "undefined" ? bgColor : "#0050D5"}] dark:hover:bg-[${bgColor === "undefined" ? bgColor : "#0050D5"}] dark:focus:ring-blue-800 dark:disabled:hover:bg-[${bgColor === "undefined" ? bgColor : "#0050D5"}] focus:!ring-2 group h-min text-center font-medium focus:z-10 relative rounded overflow-hidden text-center inline-block ${py === "undefined" ? "py-2" : py} ${px === "undefined" ? "px-4" : px}`}
          style={{backgroundColor: newBG}}
        >
            <span
              className={`hhh inline-block absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  group-hover:bg-[${hoverBgColor === "undefined" ? "#fff" : hoverBgColor}]`}
            ></span>
            <span className={`flex items-center flex-nowrap ${nowrap === "undefined" ? nowrap : "flex-nowrap"} font-[400] relative z-10 group-hover:text-[#000]`}>
              {children} <FontAwesomeIcon icon={faArrowRight} className='ml-2 font-[14px] w-[14px] '  />
            </span>
        </Link>
  )
}
