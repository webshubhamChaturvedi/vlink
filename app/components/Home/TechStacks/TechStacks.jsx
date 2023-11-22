import React from "react";
import Container from "../../common/Container";
import GridTechStacks from "./GridTechStacks";
const TechStacks = ({ section_title, section_content }) => {
  return (
    <div className="bg-[#F7FAFF]">
      <Container className="md:py-16 py-[30px]">
        <div className="flex flex-col">
          <div className="md:mb-5">
            <h4 className="text-center xl:text-4xl lg:text-[32px] text-[22px] md:mb-3 mb-2 text-[#383838] font-[700]">
              {section_title?.h}
            </h4>
            <p className="hidden text-center md:block text-[#353535] font-[14px]">
              {section_title?.p}
            </p>
          </div>
          <GridTechStacks list={section_content} />
        </div>
      </Container>
    </div>
  );
};

export default TechStacks;
