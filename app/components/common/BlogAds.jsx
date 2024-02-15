import React from 'react'

export default function BlogAds({adsdata, setModalCall}) {
  return (
            <div className="px-[15px] py-[30px] rounded-[7px] mt-4 text-center"
                style={{ backgroundColor: adsdata?.bgColor }}
            >
                <h6 className="text-[20px] text-[#730BA1] font-[700] tracking-[-1px] mb-3">
                  {adsdata?.mainTitle}
                </h6>
                <p className="text-[18px] text-[#000000] font-[400] mb-2">
                  {adsdata?.mainDescription}
                </p>
                <h6 className="text-[24px] text-[#000000] font-[800] tracking-[-1px] mb-4">
                  {adsdata?.title}
                </h6>
                <p className="text-[24px] text-[#000000] font-[800] tracking-[-1px]">
                  {adsdata?.description}
                </p>
                <button
                type='submit'
                  className={`block w-[100%] mt-5 block bg-[#730BA1] px-2 py-2 text-center text-white rounded-[5px] shadow-[10px_10px_40px_0px_#00000040]`}
                  onClick={setModalCall}
                >
                  {adsdata?.buttonText}
                </button>
            </div>
  )
}
