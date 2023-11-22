import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LINK from "../common/LINK";

export default function CloudModernization({ data, issupplyChain = false, isBlockChain = false, isCaseCloud = false }) {
  return (
    <section
      className="md:py-[65px] py-[35px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `${
          issupplyChain
            ? `url(${apiEndpoint(data?.image?.data?.attributes?.url)})`
            : "url('https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_768/Group_238746_3a80a180d3.jpg')"
        }`,
      }}
    >
      <div className="container">
        <div className={isBlockChain ? "text-center" : ""}>
          <div className={isCaseCloud ? "cloud_case" :  ""}>
            <h6 className="md:text-[24px] text-[18px] text-[rgba(255,_255,_255,_0.95)] font-[400] mb-1">
              {data?.sub_title ? data?.sub_title : ""}
            </h6>
            <h5
              className={isBlockChain ? `md:text-[30px] text-[22px] text-[#fff] font-[700] mb-5 max-w-[1000px] mx-auto` : "md:text-[30px] text-[22px] text-[#fff] font-[700] mb-5 max-w-[1000px]"}
            >
              {data?.title
                ? data?.title
                : "Do you need comprehensive SCM software to streamline your inventory management flow?"}
            </h5>
          </div>
          <LINK
              m_top={"0px"}
              reflink={data?.cloud_btn?.link}
              py={"py-2"}
              px={"px-7"}
              newBG={"#222222"}
              textColor={"#fff"}
              // bgColor={"#1a56db"}
              hoverBgColor={"#fff"}
              HOVERTextColor={"#000"}
              borderColor={"#000"}
              textFont={`18px`}
            >
                {data?.cloud_btn?.text
                ? data?.cloud_btn?.text
                : "Get a free consultation!"}
          </LINK>
        </div>
      </div>
    </section>
  );
}
