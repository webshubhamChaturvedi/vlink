import Image from "next/image";
import React from "react";

export default function LeftIconList({
  list,
  iconWidth,
  iconHeight,
  customIcon,
  extraClassName,
  displayGrid = false,
  gridCols = 2,
  noPadding = false,
  textClass = "",
}) {
  return (
    <div>
      <div
        className={`flex flex-col w-full md:flex-row items-start md:items-center justify-around`}
      >
        <div
          className={` w-full max-w-5xl ${
            displayGrid
              ? "mx-auto md:grid md:grid-cols-" + gridCols + " gap-3"
              : ""
          }  ${noPadding ? "" : "pb-4"}`}
        >
          {list?.length > 0 &&
            list.map((item, index) => {
              return (
                <div
                  style={{ padding: "0" }}
                  className={`flex md:mt-1 mt-2 !items-start ${extraClassName}`}
                  key={index}
                >
                  <div className="flex-shrink-0 h-auto pt-1">
                    <Image
                      width={iconWidth ? iconWidth : 16}
                      height={iconHeight ? iconHeight : 16}
                      src={`/icons/${customIcon ? customIcon : item.icon}`}
                      className="block"
                      alt={item?.alt || "doticon"}
                    />
                  </div>
                  <p
                    className={`pl-3 ${textClass} text-[16px] font-[600] font-sans text-[#353535]`}
                  >
                    {item?.p
                      ? item?.p
                      : item?.points
                      ? item?.points
                      : item?.list
                      ? item?.list
                      : item?.title}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
