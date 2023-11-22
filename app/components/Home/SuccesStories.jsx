import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import SuccessStoriesCards from "app/components/common/SucessStoriesCards";
// import { apiEndpoint } from "app/scripts/fetch";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LINK from "../common/LINK";

const SuccessStories = ({ section_title, section_content }) => {
  return (
    <div>
      <Container className="md:py-[55px] py-[30px]">
        <div className="flex justify-center items-center">
          <div className="md:pb-5 pb-3">
            <h5 className="text-company text-center mb-3 font-sans font-[700] xl:text-4xl lg:text-[32px] text-[22px]">
              {section_title?.h1_purple || "Success"}
              <span className="font-bold text-black">
                {section_title?.h1_black || "Stories"}
              </span>
            </h5>
            <p className="text-[14px]">
              {section_title?.p ||
                "Many Companies, Multiple Verticals, One Outcome"}
            </p>
          </div>
        </div>
        <div>
          <SuccessStoriesCards list={section_content} />
        </div>
        <div className="flex justify-center">
          <LINK
            m_top={"20px"}
            reflink={`${section_title?.href || "/case-study/"}`}
            py={"py-2"}
            px={"px-5"}
            FAIcon={faArrowRight}
            bgColor={"#0050D5"}
            textColor={"#fff"}
            hoverBgColor={"#fff"}
            HOVERTextColor={"#000"}
            borderColor={"#0050D5"}
          >
            {section_title?.label || "More Case Studies"}
          </LINK>
        </div>
      </Container>
    </div>
  );
};

export default SuccessStories;
