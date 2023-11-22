import { createMarkup } from "app/scripts/utils";
import React, { useState } from "react";
import CloudinaryImage from "../common/CloudinaryImage";

const Advantage = ({ item }) => {
  const [open, setOpen] = useState();
  return (
    <div className="faq-box mb-4 rounded-[10px] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.13)] bg-[#ffffff]">
      <div
        className="flex items-center justify-between faq-qt p-4 font-sans"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className="flex items-center"
          style={{ color: open ? "#62207E" : "#2B2B2D" }}
        >
          <span className="mr-4 inline-block">
            {/* <img
              src={
                process.env.NEXT_PUBLIC_API_URL +
                item?.image?.data?.attributes?.url
              }
              alt={item?.image?.data?.attributes?.alternativeText || item?.image?.data?.attributes?.name}
              className="md:w-[32px] w-[32px]"
            /> */}
            <CloudinaryImage
              type="icon"
              backendImgUrl={item?.image?.data?.attributes?.url}
              alt={item?.image?.data?.attributes?.alternativeText}
              className="md:w-[32px] w-[32px]"
            />
          </span>
          {item?.title}
        </div>
        <span className="inline-block">
          <img
            src="/img/dataAnalytics/83.png"
            alt="Vlink dataAnalytics"
            className=""
          />
        </span>
      </div>
      {item?.p ? (
        <div
          className="faq-content py-4 px-6 rounded font-sans"
          style={{ display: open ? "" : "none" }}
        >
          <div dangerouslySetInnerHTML={createMarkup(item?.p)}></div>
        </div>
      ) : (
        <div
          className="faq-content py-4 px-6 rounded font-sans"
          style={{ display: open ? "" : "none" }}
        >
          <p>Lorem ipsum dolor sit amet consectetuer</p>
        </div>
      )}
    </div>
  );
};

export default Advantage;
