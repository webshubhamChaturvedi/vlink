import { background } from "@cloudinary/url-gen/qualifiers/focusOn";
import React from "react";

export default function ThemesElement({themeselement}) {
  return (
    <section className="mt-[-300px] relative z-[1]">
      <div className="container bg-[#22222D] lg:p-[80px_0px_0px_80px] p-[30px_20px_30px_20px] rounded-[30px]">
        <h6 className="lg:text-[48px] md:text-[32px] text-[24px] text-[#FFFFFF] font-[700]">
          {themeselement?.title}
        </h6>
        <p className="lg:text-[20px] text-[14px] text-[#FFFFFF] font-[400] mb-3">
          {themeselement?.description}
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
          <div className="pt-2 lg:pb-[50px] pb-[30px]">
            <h6 className="text-[18px] text-[#FFFFFFAB] font-[400] mb-4">
              {themeselement?.primaryHd}
            </h6>
            <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-7">
                {themeselement?.coloursList?.map((items, key)=>(
                    <li key={key} className=" rounded-[8px] p-3 w-[160px] h-[110px] flex flex-wrap items-end"
                    style={{backgroundColor: items?.colourName}}>
                        <div>
                        <p className="text-[16px] text-[#FFFFFF] font-[600] w-full">
                            {items?.bg_colour}
                        </p>
                        <p className="text-[14px] text-[#FFFFFFC9] font-[400] w-full">
                            {items?.colourCode}
                        </p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
          <div className="bg-[#1B1B27] p-[30px] rounded-[50px_0px_0px_0px]">
            <p className="text-[20px] text-[#FFFFFF] font-[600]">
              {themeselement?.typography}
                {themeselement?.fontFamily.map((items, key)=>(
                    <span key={key} className="text-[16px] text-[#FFFFFF99] font-[400] inline-block ml-2">{items?.fontName}</span>
                ))}
            </p>
            <h6 className="lg:text-[80px] text-[50px] text-[#FFFFFF] font-[700]">{themeselement?.fontHd}</h6>
            <p className="text-[14px] text-[#FFFFFF] font-[400]">
              {themeselement?.fontText}
            </p>
            <div className="flex justify-between border-b-[1px] border-[#FFFFFF33] py-[20px]">
              <div className="text-[14px] text-[#FFFFFF99] font-[400] w-[50%]">
                Style Name
              </div>
              <div className="text-[14px] text-[#FFFFFF99] font-[400] w-[50%]">
                Example + Font size
              </div>
            </div>
            {themeselement?.styleName?.map((items, index)=>(
                <div key={index} className={`flex justify-between  border-[#FFFFFF33] py-[20px] ${index < (themeselement.styleName.length-1) ? "border-b-[1px]" : ""}`}>
                  <div className={`text-[#FFFFFF] font-[600] w-[50%] ${index == 0 ? "lg:text-[20px] text-[16px]" : index == 1 ? "text-[16px]" : index == 2 ? "text-[14px]" : index == 3 ? "lg:text-[12px]" : ""}`}>
                      {items?.hdTitle}
                  </div>
                  <div className="w-[50%]">
                      <p className={`text-[#FFFFFF] font-[600] ${index == 0 ? "lg:text-[20px] text-[16px]" : index == 1 ? "text-[16px]" : index == 2 ? "text-[14px]" : index == 3 ? "lg:text-[12px]" : ""}`}>
                          {items?.hdDescription}
                      </p>
                      <p className={`text-[#FFFFFF80] font-[400] ${index == 0 ? "text-[16px]" : index == 1 ? "text-[14px]" : index == 2 ? "text-[12px]" : index == 3 ? "lg:text-[10px]" : ""}`}>
                          {items?.hdHeading}
                      </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
