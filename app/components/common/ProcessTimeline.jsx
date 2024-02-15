import React from "react";
import Container from "./Container";
import '../common/process.css'

export default function ProcessTimeline({ Process, isBlockProcess="false" }) {
  return (
    <section className="timeline-box1 py-[55px]"
    style={{ backgroundColor: Process?.bgColor ? Process?.bgColor : "transpatent"}}>
        <Container>
        <div className="pb-[55px]">
          <h4 className="relative font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
            <span className="md:text-[100px] text-[60px] font-[800] gradient_text block w-[100%] leading-[100px]">
              {Process?.bg_title ? Process?.bg_title :  "Process"}
            </span>
            <span className="w-[100%] font-bold relative mt-[-30px] block"
            style={{color: Process?.bg_title ? "#fff" : "#000"}}>
              {Process?.title}
            </span>
          </h4>
          <p className="text-center font-sans font-[400] text-[16px] text-[#ffffff] max-w-[1100px] mx-auto">
            {Process?.description}
          </p>
        </div>
        {Process?.processList ? Process?.processList?.map((items, key, arr)=>(
            <div className={`single-event-container ${key % 2 === 1
                ? ""
                : "right"}`} key={key}>
                <div className="event-description">
                  <h2 className="text-[#FFFFFF] md:text-[24px] text-[16px] font-[600] leading-6">{items?.title}</h2>
                  <p className="text-[#FFFFFFB2] md:text-[16px] text-[14px] font-[400]">{items?.description}</p>
                </div>
                <div className={`border-process ${key === 0
                ? "process-start"
                : key === 5
                ? "process-last"
                : ""} ${arr.length - 1 === key
                  ? "process-last" : ""}`}></div>
                <div className="circle-date">{items?.serialNum}</div>
            </div>
        ))
      :
      Process?.stepsList.map((items, key, arr)=>(
            <div className={`single-event-container ${key % 2 === 1
                ? ""
                : "right"}`} key={key}>
                <div className={`event-description1 rounded-[20px] shadow-[0px_0px_50px_0px_#0000001A] p-6`}
                style={{backgroundColor: items?.bgColor}}>
                <h2 className="text-[#B8B8B8] md:text-[16px] text-[12px] font-[600] leading-6">{items?.stepNum}</h2>
                <p className="text-[#1C1C1C] md:text-[24px] text-[16px] font-[400]">{items?.stepDesc}</p>
                </div>
                <div className={`border-process ${key === 0
                ? "process-start"
                : ""} ${isBlockProcess && arr.length - 1 === key
                  ? "process-last" : ""}`}></div>
                <div className="circle-date">{items?.serialNum}</div>
            </div>
        ))}
      </Container>
    </section>
  );
}
