import React from 'react';
import Container from './Container';
import CloudinaryImage from "app/components/common/CloudinaryImage";
import LINK from './LINK';


export default function CollaborateFrontend({crm}) {
  return (
    <section className="py-[55px] overflow-hidden">
      {crm ? 
      <Container>
        <div className={`max-w-[1300px] mx-auto flex flex-wrap rounded-[30px] pt-[30px] px-[40px] shadow-[10px_10px_40px_10px_#0050D514]`}
        style={{backgroundColor: crm?.bg_color}}
        >
          <div className="md:basis-6/12 flex items-center md:mb-0 mb-4 relative">
            <div className='pb-[35px]'>
              <h5 className=" mb-2 font-bold lg:text-[45px] md:text-[30px] text-[20px] mb-5"
              style={{color: crm?.btn_color}}>
                {crm?.title}
              </h5>
              <LINK
                m_top={"0px"}
                reflink={crm?.btn_link}
                py={"py-3"}
                px={"px-10"}
                newBG={"#001630"}
                textColor={"#fff"}
                hoverBgColor={"#fff"}
                HOVERTextColor={"#000"}
                borderColor={crm?.bg_color}
                textFont={`18px`}
              >
                {crm?.btn_text}
              </LINK>
            </div>
            {/* <CloudinaryImage
                backendImgUrl={crm?.bgImage?.data?.attributes?.url}
                className="absolute top-[0%] left-[5%] w-[100%]"
                alt={crm?.bgImage?.data?.attributes?.alternativeText}
                type="smallimg"
            /> */}
          </div>
          <div className="md:basis-6/12 relative">
                <CloudinaryImage
                  backendImgUrl={crm?.image?.data?.attributes?.url}
                  className="relative z-[0]"
                  alt={crm?.image?.data?.attributes?.alternativeText}
                  type="isTablet"
                />
          </div>
        </div>
      </Container>
      :
      ""
}
    </section>
  )
}
