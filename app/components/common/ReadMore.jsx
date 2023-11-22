import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ReadMore = ({ text, textColor, icon, link, ...rest }) => {
  const Parent = ({ children }) =>
    link ? <Link href={link} className=''>{children}</Link> : <>{children}</>
  return (
    <Parent>
      <div className=" " {...rest}>
        <span className={`${textColor} text-sm font-semibold capitalize mr-3 flex items-center`}>
          {text} <FontAwesomeIcon icon={faArrowRight} className='ml-2 font-[14px] w-[14px]' />
        </span>
      </div>
    </Parent>
  )
}

export default ReadMore
