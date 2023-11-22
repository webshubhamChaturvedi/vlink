import React from "react";
import Container from "../common/Container";
import TabTechStacks from "../Home/TechStacks/TabTechStacks";

const TechStacks = ({ section_title, section_content }) => {
  return (
    <div className="bg-[#F7FAFF]">
      <Container className="md:py-16 py-[30px]">
        <div className="flex flex-col">
          <div className="md:mb-5">
            <h3 className="text-center xl:text-4xl lg:text-[32px] text-[22px] md:mb-3 mb-2 text-[#383838] font-[700]">
              {section_title?.h1_black}
              <span className="text-company">{section_title?.h1_purple}</span>
            </h3>
            <p className="hidden text-center md:block text-[#353535] font-[14px]">
              {section_title?.p}
            </p>
          </div>
          <div className="md:px-10 px-0 text-center w-full md:mt-8 mt-4">
            <div className="grid lg:grid-cols-2 md:gap-8 gap-5 lg:p-0 h-full">
              {section_content?.map((item, index) => (
                <div
                  className={`${
                    index % 2 == 1
                      ? "bg-white rounded-[15px] drop-shadow-[0px_0px_16px_rgba(0,80,213,0.13)]"
                      : "bg-white"
                  }  rounded-[15px] drop-shadow-[0px_0px_16px_rgba(0,80,213,0.13)]`}
                  key={`inner-${index}`}
                >
                  <div className="flex flex-col lg:flex-row h-full md:py-6 lg:py-0">
                    <div className="text-center lg:text-left p-4">
                      <p
                        className={`md:text-[20px] text-[17px] font-[600] mb-5`}
                      >
                        {item?.fin_tech_content?.h1}
                      </p>
                      <div className="flex flex-wrap gap-2 items-center">
                        {item &&
                          item?.fin_tech_lang.length > 0 &&
                          item?.fin_tech_lang?.map((tab, index) => {
                            return <TabTechStacks key={index} tabData={tab} />;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TechStacks;
