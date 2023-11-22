import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import Link from "next/link";

export default function AugmentationProcess({ section, setModalCall = true }) {
  return (
    <section className="md:py-[55px] py-[20px] bg-cover bg-left bg-no-repeat">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:mb-[55px] mb-[30px]">
          <div className="succesful-team md:basis-full" data-aos="fade">
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
              <span
                className="inline-block font-bold bg-no-repeat backgroundsize pt-16 bg-size-40 max-w-[1000px] bg-[center_top_40%] md:px-[100px]"
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    section?.title_bg?.data?.attributes?.url
                  )})`,
                }}
              >
                {section?.title}
              </span>
            </h4>
          </div>
        </div>

        <div>
          <div className="work-item-wrap-hh">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-line gap-5">
              {section?.process_list?.map((item, index) => (
                <div
                  className={`md:pt-[30px]  pt-2 px-[20px] rounded-[5px] transation-custom 
                ${
                  index === 3
                    ? "shadow-[0px_0px_0px_#ccc]"
                    : "hover:shadow-[0px_0px_10px_#ccc] hover:bg-[#f3f2ff]"
                }
                `}
                  key={index}
                >
                  <div className={`work-item process-div`} data-aos="fade">
                    {index === 0 ? (
                      <div className="progress_line"></div>
                    ) : index === 1 ? (
                      <div className="progress_line"></div>
                    ) : index === 2 ? (
                      <div className="progress_line"></div>
                    ) : index === 3 ? (
                      <div className="progress_line_l"></div>
                    ) : (
                      ""
                    )}

                    <h4
                      className={`
                    ${
                      index === 0
                        ? `process_number text-[#ffffff] text-[20px] rounded-[8px] text-center leading-[60px] mb-5 bg-[${item?.bg_color}] w-[60px] h-[60px]`
                        : index === 1
                        ? `process_number text-[#ffffff] text-[20px] rounded-[8px] text-center leading-[60px] mb-5 bg-[${item?.bg_color}] w-[60px] h-[60px]`
                        : index === 2
                        ? `process_number text-[#ffffff] text-[20px] rounded-[8px] text-center leading-[60px] mb-5 bg-[${item?.bg_color}] w-[60px] h-[60px]`
                        : index === 3
                        ? ""
                        : ""
                    }
                    `}
                    >
                      {index === 3 ? (
                        <button
                          onClick={setModalCall}
                          className={`w-[200px] h-[50px] leading-[50px] md:mt-1 mt-5 bg-white hover:bg-white text-[#0050D5_!important] border border-[#0050D5_!important] white_btn relative rounded group overflow-hidden text-center inline-block bg-[${item?.bg_color}]`}
                        >
                          <span className="text-[#000] absolute top-0 left-0 w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#0050D5] group-hover:h-full opacity-90 ">
                            <span className="font-[600] relative group-hover:text-white flex items-center justify-center">
                              {item?.num}
                              <img
                                className="w-[25px] h-[25px] ml-3"
                                src={apiEndpoint(
                                  `/uploads/phone_icon_9b7047c6f9.png`
                                )}
                                alt=""
                              />
                            </span>
                          </span>
                        </button>
                      ) : (
                        item?.num
                      )}
                    </h4>
                    <div className="text-left mt-[15px] mb-[40px]">
                      <h6 className="text-[#000B1D] xl:text-[18px] text-[16px] font-sans font-[700] mb-[20px]">
                        {item?.title}
                      </h6>
                      <p className="text-[#585858] text-[14px] font-sans font-[400]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
