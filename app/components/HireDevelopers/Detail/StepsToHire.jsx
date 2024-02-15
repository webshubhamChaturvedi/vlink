import { apiEndpoint } from "app/scripts/fetch";
import Image from "next/image";
import { useRouter } from "next/router";
import LINK from "app/components/common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "../../common/CloudinaryImage";

export default function StepsToHire({ section }) {
  const router = useRouter();
  return (
    <section className="step-counter bg-[url('/img/h3-bg-section-01.png')] bg-cover bg-center bg-no-repeat md:py-16 py-[30px]">
      <div className="container mx-auto xl:px-32 px-4">
        <div className="grid grid-cols-4 gap-5 flex justify-center flex-wrap">
          <div className="col-span-4 text-center mb-12">
            <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-center font-sans xl:leading-[50px] leading-[30px]">
              <span className="text-[#62207E] mr-2">
                {section?.h2_purple} -
              </span>
              {section?.h2_black}
            </h5>
          </div>
        </div>
        <ol
          className="relative grid md:grid-cols-4 xl:gap-16 lg:gap-8"
          style={{ counterReset: "index 0" }}
        >
          {section?.section4_detail?.map((item, index) => {
            return (
              <li
                key={index}
                className={` content-step-hire relative 
     lg:col-span-1 md:col-span-2 col-span-3 
     gap-16 
     
     before:absolute md:before:bottom-0 before:z-10
     md:before:left-[50%] before:right-[0px] md:before:top-[unset] before:top-[5px] before:translate-x-[-50%]
     before:flex before:items-center 
     before:justify-center 
     before:w-[calc(2rem+1px)] 
     before:h-[calc(2rem+1px)] 
     before:text-[0.625rem] 
     before:font-bold 
     before:text-slate-700 
     before:rounded-[100%] 
     before:shadow-sm 
     before:ring-1 
     before:ring-slate-900/5 
     before:bg-[#DADADA]
     dark:before:bg-slate-700 
     dark:before:text-slate-200 
     dark:before:ring-0 
     dark:before:shadow-none 
     dark:before:highlight-white/5 
     md:pb-14 
     pb-10
     ${
       index + 1 != section?.section4_detail?.length
         ? " md:after:absolute after:bottom-[calc(1rem+1px)]  md:after:left-[calc(50%+30px)] md:before:translate-x-[-50%] after:right-0 md:after:w-[100%] md:after:h-px   md:after:bg-[#ccc]  dark:after:bg-slate-200/5"
         : ""
     } `}
              >
                <div className="step-img">
                  {/* <img
                    src={apiEndpoint(item?.image?.data?.attributes?.url)}
                    alt={
                      item?.image?.data?.attributes?.alternativeText ||
                      item?.image?.data?.attributes?.url
                    }
                    className="w-[50px] h-[50px] mb-2"
                  /> */}
                  <CloudinaryImage
                    backendImgUrl={item?.image?.data?.attributes?.url}
                    alt={item?.image?.data?.attributes?.alternativeText}
                    className="w-[50px] h-[50px] mb-2"
                  />
                </div>
                <h6 className="font-sans text-[#353535] text-[20px] font-[700] mb-3">
                  {item?.title}
                </h6>
                <p className="font-sans text-[14px] font-[400] text-[#585858] md:w-[100%] w-[90%]">
                  {item?.body}
                </p>
              </li>
            );
          })}
        </ol>
        <div className="text-center">
          <LINK
            m_top={"60px"}
            reflink={`${"/about-us/contact-us"}`}
            py={"py-2"}
            px={"px-5"}
            FAIcon={faArrowRight}
            bgColor={"#0050D5"}
            textColor={"#fff"}
            hoverBgColor={"#fff"}
            HOVERTextColor={"#000"}
            borderColor={"#0050D5"}
          >
            {"Contact Us"}
          </LINK>
        </div>
      </div>
    </section>
  );
}
