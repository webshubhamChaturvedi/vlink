import React, { useState, useEffect, useRef } from "react";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Benefits({ benefits }) {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop - 400;
      const sectionHeight = section.offsetHeight;

      if (
        pageYOffset >= sectionOffsetTop &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeStyle = {
    backgroundColor: "#0050D5",
    translate: ".9s ease",
  };

  return (
    <>
      <section className="lg:py-[55px] py-[30px]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-around items-center">
            <div
              className="succesful-team md:basis-full"
              data-aos="fade"
              data-aos-easing="linear"
            >
              <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
                <span
                  className="max-w-[650px] inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-60 max-w-[1000px] 
                  bg-[center_top_20%]"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dthpnue1d/image/upload/v1690807050/Benefits_9b7ccd5199.png)`,
                  }}
                >
                  {benefits.title}
                </span>
              </h4>
              <p className="max-w-[850px] mx-auto leading-6 font-sans font-[400] text-[16px] text-center text-[#7F7D7D]"></p>
            </div>
          </div>

          <div className="flex flex-wrap lg:mt-[55px] mt-[30px]">
            <div className="lg:flex-1 lg:mb-0 mb-6">
              <ul className="flex flex-wrap lg:gap-10 gap-5 sticky top-[200px]">
                {benefits?.left_list?.map((item, key) => (
                  <li
                    className={`w-full flex items-center cursor-pointer  ${
                      activeSection === `section1_${key}` ? "active" : ""
                    }`}
                    key={key}
                    id="button_nav"
                  >
                    <span
                      className={`flex items-center ${
                        activeSection === `section1_${key}`
                          ? "lg:text-[25px] text-[20px] text-[#171F44] font-[600]"
                          : "lg:text-[20px] text-[16px] text-[#2D355A] font-[400]"
                      }`}
                    >
                      <div className="w-[50px]">
                        {activeSection === `section1_${key}` ? (
                          <CloudinaryImage
                            backendImgUrl={`/uploads/active_dot_f4d35532c3.png`}
                            alt="active-dot"
                            className="mr-4 inline-block w-5"
                            type="icon"
                          />
                        ) : (
                          <CloudinaryImage
                            backendImgUrl={item?.icon?.data?.attributes?.url}
                            alt={item?.icon?.data?.attributes?.alternativeText}
                            className="mr-4 inline-block w-5"
                            type="icon"
                          />
                        )}
                      </div>

                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:flex-1 lg:px-0">
              {benefits.right_list?.map((items, key) => (
                <div
                  data-section
                  id={`section1_${key}`}
                  className="pb-5 md:pb-20"
                  key={key}
                >
                  <div
                    className={` p-[20px]  md:p-[40px]  rounded-[10px] ${
                      activeSection === `section1_${key}` ? "activeStyle" : ""
                    }`}
                    key={key}
                  >
                    <h6
                      className={`md:text-[30px]  text-[24px] font-[600] flex md:flex-nowrap flex-wrap items-center mb-4 ${
                        activeSection === `section1_${key}`
                          ? "text-[#fff]"
                          : "text-[#171F44]"
                      }`}
                    >
                      {items.title}
                    </h6>
                    <p
                      className={`text-[16px] font-[400] ${
                        activeSection === `section1_${key}`
                          ? "text-[#fff]"
                          : "text-[#43485B]"
                      }`}
                    >
                      {items.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
