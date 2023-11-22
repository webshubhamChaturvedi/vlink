import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Process({ section }) {
  return (
    <section className="md:py-[55px] py-[30px] bg-[url('/img/h3-bg-section.jpg')] bg-cover bg-left bg-no-repeat">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:mb-[55px] mb-[30px]">
          <div className="succesful-team md:basis-full" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
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
          <div className="work-item-wrap">
            <div className="work-line-shape">
              <div className="work-line-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1171.529"
                  height="170.91"
                  viewBox="0 0 1171.529 170.91"
                >
                  <g fill="none" strokeWidth="3">
                    <path
                      className="dashed1"
                      stroke="rgba(0 0 0 / 8%)"
                      strokeDasharray="12 6"
                      fillRule="evenodd"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      d="M376.374,5011.81s156,76.64,373.016-32.76c0,0,234.427-134.13,381.43-16.05,0,0,212.18,134.13,410.49-90.01"
                      transform="translate(-373.531 -4871.5)"
                    ></path>
                    <path
                      className="dashed2"
                      stroke="white"
                      strokeDasharray="12 6"
                      fillRule="evenodd"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      d="M376.374,5011.81s156,76.64,373.016-32.76c0,0,234.427-134.13,381.43-16.05,0,0,212.18,134.13,410.49-90.01"
                      transform="translate(-373.531 -4871.5)"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-line">
              {section?.process_list?.map((item, index) => (
                <div className="px-[10px]" key={index.id}>
                  <div
                    className={`work-item ${
                      index === 0
                        ? "process-one"
                        : index === 1
                        ? "process-two process-reverce"
                        : index === 2
                        ? "process-three"
                        : index === 3
                        ? "process-four process-reverce"
                        : ""
                    }  process-div`}

                    data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
                  >
                    <div className="process-img">
                      {index === 0 ? (
                        (<FontAwesomeIcon icon={faClipboardCheck} className="font-[14px] w-[14px]" />)
                      ) : index === 1 ? (
                        (<FontAwesomeIcon icon={faEnvelope} className="font-[14px] w-[14px]" />)
                      ) : index === 2 ? (
                        (<FontAwesomeIcon icon={faHouseLaptop} className="font-[14px] w-[14px]" />)
                      ) : index === 3 ? (
                        (<FontAwesomeIcon icon={faRocket} className="font-[14px] w-[14px]" />)
                      ) : (
                        ""
                      )}
                      <h4 className="number">{item?.num}</h4>
                    </div>
                    <div className="text-center mt-[15px] mb-[40px]">
                      {index === 3 ? (
                        <Link href={item?.bg_color} className="inline-flex rounded-[5px] mx-auto text-[#FFFFFF] bg-[#62207E] xl:text-[20px] text-[16px] font-sans font-[600] mb-[20px] px-[15px] py-[10px]">
                          {item?.title}
                          <img className="w-[25px] h-[25px] ml-3" src={apiEndpoint(`/uploads/phone_icon_9b7047c6f9.png`)} alt="" />
                        </Link>
                      ) : (
                        <h6 className="text-[#000B1D] xl:text-[24px] text-[20px] font-sans font-[600] mb-[20px]">
                          {item?.title}
                        </h6>
                      )}

                      <p className="text-[#585858] xl:text-[16px] text-[14px] font-sans font-[400] max-w-[330px]">
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
