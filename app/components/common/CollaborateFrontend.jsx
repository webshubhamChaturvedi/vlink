import React from "react";
import Container from "./Container";
import CloudinaryImage from "app/components/common/CloudinaryImage";
import LINK from "./LINK";
import { apiEndpoint } from "app/scripts/fetch";

export default function CollaborateFrontend({
  crm,
  isEducol = false,
  isCollaborateStaticData = false,
  isBenchData = false,
  isDotCol = false,
  isBG = false,
  isdes = false,
  isJava = false,
  setModalCall
}) {
  return (
    <section className={`${isJava ? "" : "md:py-[55px] py-7 overflow-hidden"}`}>
      {crm ? (
        <Container>
          <div
            className={`max-w-[1300px] mx-auto flex flex-wrap rounded-[30px] md:pt-[30px] md:px-[40px] 
          shadow-[10px_10px_40px_10px_#0050D514] bg-no-repeat bg-cover bg-center p-6`}
            style={{
              background: isBG
                ? `url(${apiEndpoint(crm?.bgImage?.data?.attributes?.url)})`
                : crm?.bg_color,
            }}
          >
            <div
              className={`${
                isBenchData ? "md:basis-8/12" : "md:basis-8/12"
              } flex items-center md:mb-0 mb-4 relative`}
            >
              <div className="pb-[35px]">
                <h5
                  className={`font-bold ${
                    isBenchData ? "lg:text-[35px] mb-2" : "lg:text-[35px] mb-7"
                  } md:text-[30px] text-[20px] `}
                  style={{ color: crm && crm?.btn_color }}
                >
                  {crm?.title}
                </h5>
                {isdes && (
                  <p className="text-[#243280] lg:text-[24px] text-[18px] font-[600]">
                    {crm?.small_description}
                  </p>
                )}
                {isdes &&
                  crm?.descriptions &&
                  crm?.descriptions &&
                  crm?.descriptions?.map((data, key) => (
                    <p
                      key={key}
                      className="text-[#06021F] lg:text-[20px] text-[16px] font-[400] my-[20px]"
                    >
                      {data?.description}
                    </p>
                  ))}
                {isBenchData && (
                  <p className="text-[#243280] lg:text-[24px] text-[18px] font-[600]">
                    {crm?.small_description}
                  </p>
                )}
                {isBenchData ? (
                  crm?.descriptions &&
                  crm?.descriptions?.map((data, key) => (
                    <p
                      key={key}
                      className="text-[#06021F] lg:text-[20px] text-[16px] font-[400] my-[20px]"
                    >
                      {data?.description}
                    </p>
                  ))
                ) : isDotCol ? (
                  <ul className="list-none pl-0 grid md:grid-cols-1">
                    {crm?.descriptions &&
                      crm?.descriptions?.map((data, key) => (
                        <li
                          key={key}
                          className="text-[#0D1750] lg:text-[16px] text-[14px] font-[400] pr-4 mb-3"
                        >
                          {data?.description}
                        </li>
                      ))}
                  </ul>
                ) : (
                  <ul className="list-none pl-0 grid md:grid-cols-3">
                    {crm?.descriptions &&
                      crm?.descriptions?.map((data, key) =>
                        key === 0 ? (
                          <li
                            key={key}
                            className="text-[#243280] lg:text-[22px] text-[16px] font-[600] pr-4"
                          >
                            {data?.description}
                          </li>
                        ) : key === 1 ? (
                          <li
                            key={key}
                            className="text-[#243280] lg:text-[22px] text-[16px] font-[600] pr-4"
                          >
                            {data?.description}
                          </li>
                        ) : key === 2 ? (
                          <li
                            key={key}
                            className="text-[#243280] lg:text-[22px] text-[16px] font-[600] pr-4"
                          >
                            {data?.description}
                          </li>
                        ) : key === 3 ? (
                          <li
                            key={key}
                            className="text-[#243280] lg:text-[18px] text-[14px] font-[400] pr-4 mb-5"
                          >
                            {data?.description}
                          </li>
                        ) : key === 4 ? (
                          <li
                            key={key}
                            className="text-[#243280] lg:text-[18px] text-[14px] font-[400] pr-4 mb-5"
                          >
                            {data?.description}
                          </li>
                        ) : (
                          <li
                            key={key}
                            className="text-[#243280] lg:text-[18px] text-[14px] font-[400] pr-4 mb-5"
                          >
                            {data?.description}
                          </li>
                        )
                      )}
                  </ul>
                )}
                {isBenchData ? (
                  ""
                ) : (
                  <p className="text-[#000000] text-[20px] mb-5 font-[600]">
                    {crm?.small_description}
                  </p>
                )}
                {crm?.btn_link ? (
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
                ) : crm?.btn_text ? (
                  <button
                    className={`bg-[#111013] text-white border border-transparent group h-min font-medium focus:z-10 relative rounded overflow-hidden inline-block px-7 py-3 shadow-[10px_20px_40px_0px_#00000033]`}
                    onClick={() => setModalCall(crm?.btn_text)}
                  >
                    <span
                      className={`bg-[#fff] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                    ></span>
                    <span
                      className={`group-hover:text-black flex items-center font-[600] relative`}
                    >
                      {crm?.btn_text}
                      <svg
                        className={`ml-2 stroke-[white] group-hover:stroke-[black]`}
                        width="16"
                        height="16"
                        viewBox="0 0 18 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 1.5L16 10.3684L8.5 19.2368"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className={`${
                isBenchData ? "md:basis-4/12" : "md:basis-4/12 md:block hidden"
              } relative`}
            >
              {crm?.image?.data?.attributes?.url &&
              <CloudinaryImage
                backendImgUrl={crm?.image?.data?.attributes?.url}
                className="relative z-[0]"
                alt={crm?.image?.data?.attributes?.alternativeText}
                type="isTablet"
              />
              }
            </div>
          </div>
        </Container>
      ) : isCollaborateStaticData ? (
        <Container>
          <div
            className={`mx-auto flex flex-wrap rounded-[30px] pt-[30px] px-[40px] shadow-[10px_10px_40px_10px_#0050D514]`}
            style={{ backgroundColor: "#FDF0EE" }}
          >
            <div className="md:basis-6/12 flex items-center md:mb-0 mb-4 relative">
              <div className="pb-[35px]">
                <h5
                  className={`mb-2 font-bold lg:text-[45px] md:text-[30px] text-[20px] mb-5`}
                  style={{ color: crm?.btn_color }}
                >
                  Get your Complete Case study Guide by Geniusee
                </h5>
                <p className="text-[#243280] text-[24px] mb-10 font-[600]">
                  And check out on how the Educational Technology is developing,
                  where it’s headed to and whether there is a room for your
                  business there.
                </p>
                <LINK
                  m_top={"0px"}
                  reflink={"/hire-developers/process"}
                  py={"py-3"}
                  px={"px-10"}
                  newBG={"#001630"}
                  textColor={"#fff"}
                  hoverBgColor={"#fff"}
                  HOVERTextColor={"#000"}
                  borderColor={crm?.bg_color}
                  textFont={`18px`}
                >
                  {"Get Started"}
                </LINK>
              </div>
            </div>
            <div className="md:basis-6/12 relative">
              <CloudinaryImage
                backendImgUrl={"/uploads/oh_img169_1_2_3b46b91939.png"}
                className="relative z-[0]"
                alt={crm?.image?.data?.attributes?.alternativeText}
                type="isTablet"
              />
            </div>
          </div>
        </Container>
      ) : (
        ""
      )}
    </section>
  );
}
