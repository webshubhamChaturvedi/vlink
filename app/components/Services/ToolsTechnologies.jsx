import React, { useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function ToolsTechnologies({
  tech,
  isToolsTechnologies = false,
  isStaff = false,
  isWeb,
  isHm = false,
  isHm2 = true,
}) {
  const [activeTab, setActiveTab] = useState(isWeb);

  const handleTab = (item) => {
    setActiveTab(item.title);
  };

  return (
    <section
      className={`lg:py-[55px] py-[30px] bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage:
          tech?.bg_img &&
          `url(https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_480/5778896_1_1_d29f006360)`,
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-around items-center lg:mb-[50px] mb-[30px]">
          <div className="succesful-team md:basis-full">
            {isStaff ? (
              <h4
                className={`${
                  isHm2 ? "text-[#fff]" : "text-black"
                } font-bold xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]`}
              >
                <span
                  className="inline-block font-bold bg-no-repeat backgroundsize pt-16 lg:bg-size-100 bg-size-60 bg-[center_top_40%] md:px-[40px]"
                  style={{
                    backgroundImage: `url(${apiEndpoint(
                      tech?.title_bg?.data?.attributes?.url
                    )})`,
                  }}
                >
                  {tech?.title}
                </span>
              </h4>
            ) : (
              ""
            )}
            {isToolsTechnologies ? (
              <h4
                className={`${
                  isHm2 ? "text-[#fff]" : "text-black"
                } font-boldxl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]`}
              >
                <span
                  className="inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-60 bg-[center_top_40%] md:px-[40px]"
                  style={{
                    backgroundImage: `url(${apiEndpoint(
                      tech?.title_bg?.data?.attributes?.url
                    )})`,
                  }}
                >
                  {tech?.title}
                </span>
              </h4>
            ) : (
              ""
            )}
            <p className="text-[#FFFFFF94] text-center font-[600] text-[18px]">
              {tech?.description && tech?.description}
            </p>
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center items-center gap-3 mb-[50px]">
            {tech?.tags_list?.map((item, key) => (
              <li
                onMouseOver={() => handleTab(item)}
                className={`cursor-pointer  rounded-[50px] py-[10px] px-[20px] inline-block ${
                  activeTab === item.title
                    ? "acive bg-[#0050D5] text-[#fff] text-[16px] font-[600] shadow-[0px_0px_30px_0px_#0000001F]"
                    : "bg-[#ffffff] shadow-[0px_1px_6px_0px_#0000001C] text-[#141414] text-[16px] font-[600]"
                }`}
                key={key}
              >
                {item?.title}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center">
            {tech?.tab_content?.map((items, key) =>
              activeTab === items.category ? (
                <div
                  className="lg:w-[18%] md:w-[23%] w-[48%] mx-[1%] bg-[#fff] py-[30px] text-center transition duration-300 ease-linear rounded-[12px] mb-[2%] shadow-[10px_10px_25px_0px_#00000014] hover:ease-linear hover:duration-300  rounded-[5px] border-[1px] border-[#fff] hover:border-[#0050D5] hover:border-[2px]"
                  key={key}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-easing="linear"
                >
                  <div>
                    <span className="w-[50px] h-[50px] rounded-[100%] flex items-center justify-center mx-auto">
                      {items?.image?.data ? (
                        <CloudinaryImage
                          backendImgUrl={items?.image?.data?.attributes?.url}
                          alt={items?.image?.data?.attributes?.alternativeText}
                          type="icon"
                        />
                      ) : (
                        ""
                      )}
                    </span>
                    <p className="mt-4 text-[16px] text-[#000000] font-[400] ">
                      {items.title}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
