import { useRouter } from "next/router";
import { useState } from "react";
import LINK from "app/components/common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HireDevelopersPricing({
  section_title,
  section_content,
}) {
  const [tab, setTab] = useState(0);
  const router = useRouter();
  return (
    <div className="container mx-auto xl:px-48 px-4 md:py-[55px] py-[30px]">
      <div className="grid grid-cols-3 md:gap-8 gap-4 flex justify-center flex-wrap">
        <div className="col-span-3 text-center mb-2">
          <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center mb-3">
            {section_title?.h1_black}
            <span className="text-company">
              {" " + section_title?.h1_purple}
            </span>
          </h5>
          <p className="font-sans text-[14px] font-[400] text-[#000000]">
            {section_title?.body || section_title?.p}
          </p>
        </div>
        <div className="col-span-3 text-center mb-4">
          <ul className="flex space-x-4 flex-wrap items-center justify-center">
            {section_content &&
              section_content?.length &&
              section_content?.map((item, index) => (
                <li
                  key={index}
                  className={` text-[18px] ${
                    tab === index
                      ? `underline underline-offset-1 font-[700] text-[#000000]`
                      : `font-[600] text-[#565656]`
                  } cursor-pointer`}
                  onClick={() => setTab(index)}
                >
                  {item?.title}
                </li>
              ))}
          </ul>
        </div>
        {section_content &&
          section_content?.length &&
          section_content[tab]?.section8_detail?.map((item, index) => {
            return (
              <div
                key={index}
                className={`lg:col-span-1 sm:col-span-3 col-span-3 md:px-6 px-4 md:py-8 py-4  rounded-[10px] ${
                  index !=
                  parseInt(section_content[tab]?.section8_detail?.length / 2)
                    ? "bg-[#ffffff]"
                    : " bg-[#0050D5] "
                } drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)]`}
              >
                <p
                  className={`font-sans ${
                    index !=
                    parseInt(section_content[tab]?.section8_detail?.length / 2)
                      ? "text-[#353535]"
                      : " text-white "
                  }   text-[20px] font-[600] mb-3`}
                >
                  {item?.title}
                </p>
                <h3
                  className={`font-sans ${
                    index !=
                    parseInt(section_content[tab]?.section8_detail?.length / 2)
                      ? "text-[#353535]"
                      : " text-white "
                  } md:text-[35px] text-[28px] font-[600] mb-2`}
                >
                  ${item?.min} {item.max ? "-$" + item.max : "onwards"}
                </h3>
                <p
                  className={`font-sans font-[400] text-[18px]  ${
                    index !=
                    parseInt(section_content[tab]?.section8_detail?.length / 2)
                      ? "text-[#9A95C0]"
                      : "text-[rgba(255,255,255,0.83)]"
                  }  mb-8`}
                >
                  {item?.exp}
                </p>

                <LINK
                  m_top={"20px"}
                  reflink={`/hire-developers/process/`}
                  py={"py-2"}
                  px={"px-7"}
                  FAIcon={faArrowRight}
                  bgColor={"#0050D5"}
                  textColor={"#fff"}
                  hoverBgColor={"#fff"}
                  HOVERTextColor={"#000"}
                  borderColor={"#0050D5"}
                >
                  {item?.Link || "Get Started"}
                </LINK>
              </div>
            );
          })}
      </div>
    </div>
  );
}
