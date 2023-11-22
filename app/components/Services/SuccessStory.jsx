import { apiEndpoint } from "app/scripts/fetch";
import React from "react";

export default function SuccessStory({ data }) {
  return (
    <section className="">
      <div className="container">
        
      </div>
      <div
        className="bg-cover bg-norepeat bg-bottom lg:mt-[55px] mt-[30px] py-[60px]"
        style={{
          backgroundColor: `${data?.bg_color}`,
          backgroundImage: `url(${apiEndpoint(
            data?.bg_img?.data?.attributes?.url
          )})`,
        }}
      >
        <div className="container">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:pb-[65px] pb-[30px]">
          <div className="succesful-team md:basis-full" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <h4 className="font-bold text-white xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
              <span
                className="inline-block font-bold bg-no-repeat backgroundsize md:pt-16 pt-8 bg-size-100 max-w-[1000px] bg-[center_top_40%] md:px-[100px]"
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    data?.title_bg?.data?.attributes?.url
                  )})`,
                }}
              >
                {data?.title}
              </span>
            </h4>
          </div>
        </div>
          <div className="flex flex-wrap">
            <div className="md:flex-1" data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
              <h4
                className="xl:text-[65px] lg:text-[32px] text-[22px] font-[600] text-left lg:mb-[55px] mb-[30px] text-[#fff] lg:leading-[5rem_!important]"
                style={{ position: "sticky", top: "30px" }}
              >
                {data?.left_title}
              </h4>
            </div>
            <div className="md:flex-1" data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
              {data?.hiring_list.length && data?.hiring_list?.map((items, key) => (
                <div key={key.id} className="bg-[#ffffff] shadow-[rgba(0,_0,_0,_0.11)] rounded-[15px] md:p-[30px] p-[15px] mb-4">
                  <h5 className="flex md:flex-nowrap flex-wrap items-center mb-3 font-[700] text-[#171F44] lg:text-[26px] text-[18px]">
                    <img
                      className="w-[70px] mr-3"
                      src={apiEndpoint(items?.gif?.data?.attributes?.url)}
                      alt=""
                    />
                    {items.title}
                  </h5>
                  <p className="text-[#43485B] font-[400] text-[16px]">
                    {items?.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
