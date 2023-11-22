import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ACTION_TYPE from "store/action-type";
export default function OtherOpeningsCard({ section }) {
  const dispatch = useDispatch();
  return (
    <div className="p-[30px] mt-10 bg-[#D9D9D933] drop-shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.25)] rounded-[8px]">
      <h4 className="font-[600] mb-4 leading-[27px] text-[#1D1D1D] text-[18px] font-sans ">
        {"Other Openings"}
      </h4>
      <div className="mb-4 cursor-pointer">
        {section &&
          section?.length > 0 &&
          section?.map((item, index) => {
            return (
              <div
              className="mb-4"
              onClick={async () => {
                await dispatch({
                  type: ACTION_TYPE.JOB_DETAIL,
                  payload: {
                    jobId: item,
                  },
                });
                 
                
              }}  key={index}>
                <p className="text-[#0050D5] font-sans pb-1 text-[16px] font-[600]">
                {item?.title?._cdata} – J{item?.jobdiva_no?._text}
                </p>
                <p className="text-[#1D1D1D] text-[16px] font-sans font-[400]">
                {item?.city?._text +
                    " ," +
                    item?.state?._text +
                    " ," +
                    item?.countryid?._text}
                </p>
              </div>
            );
          })}
      </div>
      <a href="/resources/career"  className="text-[#0050D5] text-[16px] font-sans font-[400] pt-6 cursor-pointer">View all job openings </a>
    </div>
  );
}
