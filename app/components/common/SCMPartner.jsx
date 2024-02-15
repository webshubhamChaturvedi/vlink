import React from "react";
import Container from "./Container";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function SCMPartner({ crmPartner }) {
  return (
    <section className="py-[55px]">
      <Container>
        <div className="pb-[55px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="md:text-[90px] text-[50px] font-[800] gradient_text block w-[100%] mx-auto md:leading-[90px] leading-[50px]">
              {crmPartner?.bg_text}
            </span>
            <span className="w-[100%] font-bold relative top-[-30px]">
              {crmPartner?.title}
            </span>
          </h4>
        </div>
        <div
          className="relative flex flex-wrap shadow-[10px_10px_60px_20px_#0050D514] rounded-[50px] p-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${apiEndpoint(
              crmPartner?.bg_image?.data?.attributes?.url
            )})`,
          }}
        >
          {crmPartner?.chooseList.map((items, key) => (
            <div
              className="md:basis-4/12 w-full text-center p-5 hover:shadow-[5px_10px_40px_0px_#0050D521] transition duration-300 ease-linear hover:ease-linear hover:duration-300 rounded-[10px]"
              key={key}
            >
              <CloudinaryImage
                backendImgUrl={items?.image?.data?.attributes?.url}
                className="w-[80px] h-[80px] mx-auto mb-4"
                alt={items?.image?.data?.attributes?.alternativeText}
                type="icon"
              />
              <h6 className="font-bold md:pb-3 pb-2 md:text-[34px] text-[22px]">
                {items?.title}
              </h6>
              <p className="font-sans text-[#4A4D58] md:text-[20px] text-[14px] max-w-[250px] mx-auto">
                {items.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
