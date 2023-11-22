import React from "react";
import TabTechStacks from "app/components/Home/TechStacks/TabTechStacks";
import { useRouter } from "next/router";

const GridTechStacks = ({ list }) => {
  const router = useRouter();
  return (
    <div className="technologystacks-outer md:pb-8 lg:pb-8 lg:p-10 p-0 text-center w-full">
      <div className="grid lg:grid-cols-2 gap-8 p-4 lg:p-0 h-full">
        {list?.map((item, index) => (
          <div
            className={`${
              index % 2 == 1
                ? "bg-white rounded-[15px] drop-shadow-[0px_0px_16px_rgba(0,80,213,0.13)]"
                : "bg-white"
            } rounded-[15px] drop-shadow-[0px_0px_16px_rgba(0,80,213,0.13)]`}
            key={`inner-${index}`}
          >
            <div className="technologystacks-padd flex flex-col lg:flex-row  h-full py-6 lg:py-0">
              <div className="text-center lg:text-left p-4">
                <div className="flex flex-wrap md:justify-between justify-center mb-5">
                  <p
                    className={`md:text-[20px] text-[17px] font-[600] mb-5 text-center lg:text-left md:w-auto w-[100%]`}
                  >
                    {item?.h}
                  </p>
                  <div className="flex flex-wrap sm:justify-none justify-center">
                    <button
                      className="shadow-[0px_0px_20px_rgba(0,80,213,0.13)] hover:bg-primary text-primary bg-white hover:text-white px-3 py-3 leading-[16px]"
                      onClick={
                        item?.button_link
                          ? () => router.push(item.button_link)
                          : () => {}
                      }
                    >
                      <span className="text-[14px] leading-[16px] whitespace-nowrap">
                        {item?.button_text}
                      </span>
                    </button>
                  </div>
                </div>
                <p className={`text-sm  mb-4`}>{item?.p}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {item &&
                    item?.section4_language?.length > 0 &&
                    item?.section4_language?.map((tab, index) => {
                      return (
                        <TabTechStacks
                          index={index}
                          tabData={tab}
                          key={index}
                        />
                      );
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
