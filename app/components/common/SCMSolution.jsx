import React from "react";
import Container from "app/components/common/Container";
import LINK from "./LINK";
import CloudinaryImage from "../common/CloudinaryImage";

export default function SCMSolution({crm}) {
  return (
    <section className="py-[55px] overflow-hidden">
      <Container>
        <div className={`max-w-[1300px] mx-auto flex flex-wrap rounded-[30px] py-[30px] px-[40px] shadow-[10px_10px_40px_10px_#0050D514]`}
        style={{backgroundColor: crm?.bg_color}}
        >
          <div className="md:basis-7/12 flex items-center md:mb-0 mb-4">
            <div>
              <h5 className="text-[#01477A] mb-2 font-bold lg:text-[50px] md:text-[40px] text-[24px] mb-5">
                {crm?.title}
              </h5>
              <LINK
                m_top={"0px"}
                reflink={crm?.btn_link}
                py={"py-3"}
                px={"px-10"}
                bgColor={crm?.btn_bgColor}
                textColor={crm?.btn_color}
                hoverBgColor={"#fff"}
                HOVERTextColor={"#000"}
                borderColor={crm?.btn_bgColor}
                textFont={`18px`}
              >
                {crm?.btn_text}
              </LINK>
            </div>
          </div>
          <div className="md:basis-5/12 relative">
                <CloudinaryImage
                  backendImgUrl={crm?.bg_image?.data?.attributes?.url}
                  className="absolute top-[-30%] right-[-25%] w-[70%]"
                  alt={crm?.bg_image?.data?.attributes?.alternativeText}
                  type="smallimg"
                />
                <CloudinaryImage
                  backendImgUrl={crm?.image.data?.attributes?.url}
                  className="relative z-[0]"
                  alt={crm?.image?.data?.attributes?.alternativeText}
                  type="smallimg"
                />
          </div>
        </div>
      </Container>
    </section>
  );
}
