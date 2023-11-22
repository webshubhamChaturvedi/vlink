import React from "react";
import Container from "../common/Container";
import CrsResponsabilitiesCard from "./CrsResponsabilitiesCard";
const CrsResponsabilities = ({ section_title, section_content }) => {
  return (
    <div>
      <Container className="lg:py-16 py-[30px]">
        <div className="flex justify-center items-center">
          <div className="lg:pb-10 pb-[25px]">
            <h5 className="text-black font-bold xl:text-4xl lg:text-[32px] text-[22px] xl:leading-[50px] lg:leading-[40px] leading-[35px] text-center mb-3">
              {section_title?.h1_black}
              <span className="font-bold text-company pl-1">
                {section_title?.h1_purple}
              </span>
            </h5>
            <p className="text-black font-normal text-[14px] text-center">
              {section_title?.h4_black}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {section_content?.section2_content?.map((item, key) => (
            <CrsResponsabilitiesCard
              shadow={false}
              rounded={false}
              bgWhite={true}
              item={item}
              key={key}
              userIconSize={"sm"}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CrsResponsabilities;
