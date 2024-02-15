import React from "react";
import CloudinaryImage from "../common/CloudinaryImage";
import { createMarkup } from "app/scripts/utils";

const GridCards = ({ list }) => {
  return (
    <div className="w-full lg:!ml-9 !ml-0">
      {console.log(list, "lis")}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-7 md:p-4 lg:p-0 h-full">
        {list?.map((item, index) => (
          <div
            className={`${
              index % 2 == 1
                ? ""
                : "sm:odd:bg-white sm:even:bg-white odd:bg-white even:bg-[#ECECEC] drop-shadow-[0px_0px_10px_rgba(0,80,213,0.13)]"
            } drop-shadow-[0px_0px_10px_rgba(0,80,213,0.13)] rounded-[10px] sm:odd:bg-white sm:even:bg-white odd:bg-white even:bg-[#ECECEC]`}
            key={`inner-${index}`}
          >
            <div className="flex flex-col lg:flex-row items-center h-full px-6 py-6 lg:py-4 gap-[10px]">
              <div className="shrink-0">
                {item?.icon && (
                  <CloudinaryImage
                    backendImgUrl={item.icon}
                    alt={item?.alt}
                    className="w-14 h-14"
                    type={"icon"}
                  />
                )}
              </div>
              <div className="text-center lg:text-left p-2">
                <p
                  className={`
                    text-black
                     mb-2  font-[600] md:text-[18px] text-[16px]`}
                >
                  {item.h1}
                </p>
                <div
                  className="h-22 text-sm font-sans font-[400] text-[14px] text-[#353535] anchorInPage"
                  dangerouslySetInnerHTML={createMarkup(
                    item?.descriptionEditor
                  )}
                >
                  {/* {item.p} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridCards;
