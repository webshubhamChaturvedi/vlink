import { apiEndpoint } from "app/scripts/fetch";
import { useMemo } from "react";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "../common/CloudinaryImage";

const OurSolution = ({ section_title, section_content }) => {
  const items = useMemo(() => {
    return section_content?.map((item) => ({
      image_url: item?.image?.data?.attributes?.url,
      alt: item?.image?.data?.attributes?.name,
      h: item.h,
      p: item.p,
    }));
  }, [section_content]);

  return (
    <section className="md:py-[55px] py-[30px] bg-[#ECF4FE]">
      <div className="container">
        <h5 className="text-center xl:text-4xl lg:text-[32px] text-[22px] mb-3 text-[#383838] font-[700] xl:leading-[50px] md:leading-[40px] leading-[30px]">
          {section_title?.h1_black}
          <span className="text-company">{section_title?.h1_purple}</span>
        </h5>
        <p className="text-[#6D6D6D] text-[14px] text-center md:block mt-0">
          {section_title?.p}
        </p>
        <div className="grid grid-cols-1 gap-8 md:mt-[45px] mt-[30px]">
          {items.map((item, index) => (
            <div
              className="bg-white rounded-[10px] lg:p-[40px] p-[20px] flex flex-wrap md:flex-nowrap"
              key={index}
            >
              <div className="md:w-[100px] w-[70px] md:mr-[20px] mb-2 ">
                {/* <img src={apiEndpoint(item?.image_url)} alt={item?.alternativeText || item?.image_url} /> */}
                <CloudinaryImage
                  backendImgUrl={item?.image_url}
                  alt={item?.alternativeText}
                  type="icon"
                />
              </div>
              <div className="w-[100%]">
                <h6 className="lg:text-[30px] md:text-[24px] text-[20px] font-[600] font-sans text-[#212121] lg:mb-2">
                  {item?.h}
                </h6>
                <p className="text-[#353535] lg:text-[20px] md:text-[18px] text-[16px] font-sans">
                  {item?.p}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <LINK
            m_top={"40px"}
            reflink={`${section_title?.href}`}
            py={"py-3"}
            px={"px-7"}
            FAIcon={faArrowRight}
            bgColor={"#0050d5"}
            textColor={"#fff"}
            hoverBgColor={"#fff"}
            HOVERTextColor={"#000"}
            borderColor={"#0050d5"}
            textFont={"16px"}
          >
            {section_title?.button_text}
          </LINK>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
