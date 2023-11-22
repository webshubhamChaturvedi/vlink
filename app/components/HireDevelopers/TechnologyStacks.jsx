import React from "react";
import Container from "app/components/common/Container";
import GridTechStacks from "./GridTechStacks";

const TechnologyStacks = ({ section_title, section_content }) => {
  return (
    <div className="bg-[#F7FAFF] technologystacks">
      <Container className="md:py-[55px] py-[30px]">
        <div className="flex flex-col">
          <div className="md:mb-[45px] mb-[25px]">
            <h5 className="text-center xl:text-4xl lg:text-[32px] text-[28px] mb-3 text-[#383838] font-[700]">
              {section_title?.h1_black}
              <span className="text-company"> {section_title?.h1_purple}</span>
            </h5>
            <p className="hidden text-[#6D6D6D] text-[14px] text-center md:block">
              {section_title?.p}
            </p>
          </div>
          <GridTechStacks list={section_content} />
        </div>
      </Container>
    </div>
  );
};

export default TechnologyStacks;
