import React from 'react'
import Image from 'next/image'
import { DateTime } from 'luxon'
import Link from 'next/link'
export default function ArticleComponent({ item }) {
  const date = DateTime.fromJSDate(item.date)
    .setLocale('en-us')
    .toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' })
  return (
    <div>
      <div className="text-center w-full mb-7">
        <div className="bg-white">
          <div className="flex justify-start">
            <img className='basis-1/3' src={item.src} alt={item.alternativeText || item.src} width={55} height={60}/>
            <div className="pl-8 md:pl-0 w-fit text-sm">
              <Link href={item.href||`#`}>
                <p className="text-left text-lightBlue cursor-pointer text-md font-medium line-clamp-2  pt-0 pl-2">
                  {item?.title}
                </p>
              </Link>
              <p className="text-left text-gray pl-2">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
