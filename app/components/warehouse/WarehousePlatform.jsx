import React, { useState, useEffect, useRef } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WarehousePlatform({ data }) {

  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const ref = useRef();

  let isBackendWarehouse = data?.platform_list?.map((data, key) => (<></>));

  const WarehouseImagelength = Number(isBackendWarehouse.length);
  
  useEffect(() => {
    if (typeof window !== "undefined" > 767) {
      const handleScroll = () => {
        const container = ref.current;

        const scrollTop = window.scrollY - container.offsetTop;

        const containerHeight = container.clientHeight;

        // const scrollTop = window.scrollY;

        const maxScrollTop = containerHeight;

        const opacity = scrollTop === maxScrollTop ? 0 : 1;

        setScrollOpacity(opacity);

        // Calculate the current section based on the scroll position

        const sectionHeight = maxScrollTop / WarehouseImagelength;

        const section = Math.floor(scrollTop / sectionHeight);

        setCurrentSection(section);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  let imageUrls = data?.platform_list?.map((list, key) =>
    apiEndpoint(list?.image?.data?.attributes?.url)
  );

  return (
    <section>
      <div
        className="container md:pt-[55px] pt-[30px]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div className="succesful-team md:basis-full">
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px]">
              <span
                className="inline-block font-bold text-company bg-no-repeat bg-size-60 bg-[center_bottom_80%] pt-16 max-w-[800px]"
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    data?.image?.data?.attributes?.url
                  )})`,
                }}
              >
                {data?.title}
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="container md:py-[55px] py-[30px] lg:px-[10%]">
        <div
          className="md:flex-nowrap flex-wrap"
          style={{
            display: "flex",
            // height: "400vh"
          }}
          ref={ref}
        >
          <div className="succesful-team md:basis-5/12 w-full mb-4 lg:mb-0">
            {data?.platform_list?.map((data, key) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                key={key.id}
                className="md:flex-nowrap flex-wrap md:h-[100vh] md:mb-0 mb-7"
              >
                <div className="md:max-w-[350px] w-full md:mb-0 mb-5">
                  <h5 className="lg:text-[24px] text-[20px] font-[600] text-left mb-2 text-[#383838] xl:leading-[35px] lg:leading-[25px]">
                    {data.h1_title}
                    <span className="text-[#0050D5]">{data.colored_text}</span>
                  </h5>
                  <LINK m_top={'20px'} reflink={`${data?.btn_link}`} py={'py-2'} px={'px-5'} FAIcon={faArrowRight} bgColor={'#0050D5'} textColor={'#fff'} hoverBgColor={'#fff'} HOVERTextColor={'#000'} borderColor={"#0050D5"}>
                      {data?.btn_text}
                </LINK>
                </div>
                <img
                  src={apiEndpoint(data?.image?.data?.attributes?.url)}
                  alt=""
                  className="md:hidden"
                />
              </div>
            ))}
          </div>
          <div
            className="relative md:basis-7/12 w-full lg:mt-10 md:block hidden"
            // style={{
            //   height: "100%"
            // }}
          >
            {currentSection === -1 ? (
              <img
                src={imageUrls[0]}
                alt="Thumbnail"
                style={{
                  opacity: scrollOpacity,

                  transition: "transition: all 0.5s",

                  // height: "100px",

                  // width: "100px",
                  // position: "fixed",

                  position: "sticky",
                  top: "0px",
                }}
              />
            ) : (
              <img
                src={imageUrls[currentSection]}
                alt="Thumbnail"
                style={{
                  opacity: scrollOpacity,

                  transition: "transition: all 0.5s",

                  // height: "100px",

                  // width: "100px",
                  // position: "fixed",

                  position: "sticky",
                  top: "55px",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
