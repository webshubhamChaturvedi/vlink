import React from "react";
import TabTechStacks from "./TabTechStacks";

const GridTechStacks = ({ list }) => {
  // let one = list?.map((i, k) =>
  //   i?.tech_language.map((i, k) => i?.icon?.data?.attributes?.url)
  // );
  return (
    <div className="md:px-10 px-0 text-center w-full md:mt-8 mt-4">
      <div className="grid lg:grid-cols-2 md:gap-8 gap-5 lg:p-0 h-full">
        {list?.map((item, index) => (
          <div
            className={`${
              index % 2 == 1
                ? "bg-white rounded-[15px] drop-shadow-[0px_0px_16px_rgba(0,80,213,0.13)]"
                : "bg-white"
            }  rounded-[15px] drop-shadow-[0px_0px_16px_rgba(0,80,213,0.13)]`}
            key={index}
          >
            <div className="flex flex-col lg:flex-row h-full md:py-6 lg:py-0">
              <div className="text-center lg:text-left p-4">
                <p className={`md:text-[20px] text-[17px] font-[600] mb-5`}>
                  {item?.tech_stacks_content?.h}
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  {item &&
                    item?.tech_language.length > 0 &&
                    item?.tech_language?.map((tab, key) => {
                      return <TabTechStacks key={key} tabData={tab} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridTechStacks;
