import React, { useEffect } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LINK from "../common/LINK";

export default function CloudModernization({
  data,
  issupplyChain = false,
  isBlockChain = false,
  isCaseCloud = false,
  isTxtClr,
}) {
  return (
    <section
      className="md:py-[65px] py-[35px]  bg-center"
      style={{
        background: `${
          issupplyChain
            ? `url(${apiEndpoint(data?.image?.data?.attributes?.url)})`
            : "url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_768/Group_238746_3a80a180d3.jpg')"
        }`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className={isBlockChain ? "text-center" : ""}>
          <div className={isCaseCloud ? "cloud_case" : ""}>
            <h6
              className={`md:text-[24px] text-[18px]  font-[400] mb-1`}
              style={{
                color: isTxtClr ? data?.isTxtClr : "#fff",
              }}
            >
              {data?.sub_title ? data?.sub_title : ""}
            </h6>
            <h5
              className={
                isBlockChain
                  ? `md:text-[30px] text-[22px] font-[700] mb-5 mx-auto`
                  : "md:text-[30px] text-[22px] font-[700] mb-5 max-w-[1000px]"
              }
              style={{
                color: isTxtClr ? data?.isTxtClr : "#fff",
              }}
            >
              {data?.title
                ? data?.title
                : "Do you need comprehensive SCM software to streamline your inventory management flow?"}
            </h5>
          </div>

          {isCaseCloud ? (
            <button
              id={data?.cloud_btn?.text.split(" ").join("")}
              className={`buttonOpen group py-3 px-5 mt-[20px] bg-[#0050D5_!important] text-[#ffffff_!important] border-0 relative rounded-[4px] overflow-hidden text-center inline-block`}
            >
              <span
                class={`bg-[#ffffff_!important] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
              ></span>
              <span
                className={`group-hover:text-black font-[600] relative flex items-center`}
              >
                {data?.cloud_btn?.text
                  ? data?.cloud_btn?.text
                  : "Get a free consultation!"}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-3 font-[14px] w-[14px] md:block hidden"
                />
              </span>
            </button>
          ) : (
            <LINK
              m_top={"20px"}
              reflink={data?.cloud_btn?.link}
              py={"py-2"}
              px={"px-7"}
              newBG={"#0050D5"}
              textColor={"#fff"}
              // bgColor={"#1a56db"}
              hoverBgColor={"#fff"}
              HOVERTextColor={"#000"}
              borderColor={"transparent"}
              textFont={`18px`}
            >
              {data?.cloud_btn?.text
                ? data?.cloud_btn?.text
                : "Get a free consultation!"}
            </LINK>
          )}
        </div>
      </div>
    </section>
  );
}
