import React from "react";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../../common/CloudinaryImage";

const ItemTechnology = ({
  isService = false,
  list,
  center = false,
  rowItems = 2,
  wideGap = false,
  viewMore = false,
  plainBg = false,
  className = "",
}) => {
  const gridCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  };
  return (
    <div>
      <div className=" md:pb-8  lg:pb-8 md:p-8 text-center w-full ">
        <div
          className={`grid ${gridCols[rowItems]} ${
            wideGap ? "gap-12" : "gap-4"
          } p-4 md:p-0  items-center`}
        >
          {list && list.length ? (
            list.map((item, index) => (
              <div
                className={`${
                  index % 2 == 1
                    ? "bg-gridCardMobileBg md:bg-white"
                    : "bg-white"
                } shadow-lg rounded-md relative ${
                  viewMore ? " services-card" : ""
                } ${className} p-4 max-h-[180px]`}
                key={`inner-${index}`}
              >
                <div
                  className={`flex flex-col ${
                    center ? "" : "md:flex-row"
                  } items-center`}
                >
                  <div className="min-h-[60px]">
                    {/* <img
                      src={apiEndpoint(item?.image?.data?.attributes?.url)}
                      alt={
                        item?.image?.data?.attributes?.alternativeText ||
                        item?.image?.data?.attributes?.name
                      }
                      width={item?.image?.data?.attributes?.width}
                      height={item?.image?.data?.attributes?.height}
                    /> */}
                    <CloudinaryImage
                      backendImgUrl={item?.image?.data?.attributes?.url}
                      alt={item?.image?.data?.attributes?.alternativeText}
                      width={item?.image?.data?.attributes?.width}
                      height={item?.image?.data?.attributes?.height}
                      type="icon"
                    />
                  </div>
                  <div
                    className={` initial bg-white services-text ${
                      plainBg ? "plain" : ""
                    } p-2 text-center rounded-md md:center w-full`}
                  >
                    <p className={`font-semibold p-2`}>{item?.h1}</p>
                    {item?.p && (
                      <p className="h-22 text-secondary uppercase max-w-[330px] line-clamp-4 mx-auto text-sm">
                        {item?.p}
                      </p>
                    )}
                    {viewMore && (
                      <button
                        className={`absolute z-10 hidden ${
                          plainBg
                            ? "bg-transparent border border-white text-white"
                            : "bg-white text-darkPrimary"
                        }  py-2 px-8 bottom-5 left-1/2 -translate-x-1/2`}
                      >
                        {item?.label ?? "View More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemTechnology;
