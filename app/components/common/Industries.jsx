import React from "react";
import Container from "./Container";
import CloudinaryImage from "../common/CloudinaryImage";
import { apiEndpoint } from "app/scripts/fetch";
import "./industries.css";

export default function Industries({ industries }) {
  return (
    <>
      {/* {industries?.map((items, key)=>( */}
      <section
        className="lg:py-[65px] py-[35px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_480/5778896_1_1_d29f006360.png)`,
        }}
      >
        <Container>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-10 flex flex-wrap items-center">
            <div className="w-full">
              <h4 class="relative font-bold text-[#fff] xl:text-[50px] lg:text-[32px] text-[22px] text-left xl:leading-[85px] lg:leading-[35px] mb-3">
                <span class="lg:text-[100px] md:text-[65px] text-[45px] font-[800] gradient_text block w-[100%] leading-[100px]">
                  {industries?.bgTitle}
                </span>
                <span class="w-[100%] font-bold mt-[-40px] block">
                  {industries?.title}
                </span>
              </h4>
              <p className="md:text-[20px] text-[16px] text-[#FFFFFFCC] font-[400]">
                {industries?.description}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
              {industries?.Industies &&
                industries?.Industies.map((data, key) => (
                  <div
                    key={key}
                    className="bg-[#fff] shadow-[0px_25px_40px_0px_#0000001A] rounded-[8px_40px_8px_40px] py-[30px] px-[20px] text-center sx-icon-bx-1 group"
                    style={{ backgroundColor: `${data?.bgColor}` }}
                  >
                    <CloudinaryImage
                      backendImgUrl={data?.icon?.data?.attributes?.url}
                      alt={data?.icon?.data?.attributes?.alternativeText}
                      className="mx-auto mb-5 group-hover:invert w-[80px] h-[80px]"
                      type="icon"
                    />
                    <h6 className="text-[20px] text-[#050748] group-hover:text-[#ffffff] font-[400]">
                      {data?.title}
                    </h6>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
      {/* ))} */}
    </>
  );
}
