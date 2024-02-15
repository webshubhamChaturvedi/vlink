import React, { useEffect } from "react";
import "../common/timeline.css";
import Container from "./Container";

export default function TimeLine({
  Process,
  isBlockProcess = "false",
  isColor = false,
}) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      function qs(selector, all = false) {
        return all
          ? document.querySelectorAll(selector)
          : document.querySelector(selector);
      }

      const sections = qs(".section11", true);
      const timeline = qs(".timeline11");
      const line = qs(".line");
      line.style.bottom = `calc(100% - 20px)`;
      let prevScrollY = window.scrollY;
      let up, down;
      let full = false;
      let set = 0;
      const targetY = window.innerHeight * 0.8;

      function scrollHandler(e) {
        const { scrollY } = window;
        up = scrollY < prevScrollY;
        down = !up;
        const timelineRect = timeline.getBoundingClientRect();
        const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top
        const dist = targetY - timelineRect.top;
        const disb = targetY - timelineRect.bottom;

        if (down && !full) {
          set = Math.max(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`;
        } else {
          set = Math.min(set, dist);
          line.style.bottom = `calc(100% - ${set}px)`;
        }

        if (dist > timeline.offsetHeight + 200 && !full) {
          // full = true;
          line.style.bottom = `-50px`;
        }

        sections.forEach((item) => {
          const rect = item.getBoundingClientRect();

          if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add("show-me");
          } else {
            item.classList.remove("show-me");
          }
        });

        prevScrollY = window.scrollY;
      }

      scrollHandler();
      line.style.display = "block";
      window.addEventListener("scroll", scrollHandler);
    }
  }, []);

  return (
    <section
      className="body11 lg:py-[55px] py-[35px] overflow-hidden"
      style={{ backgroundColor: Process?.bgColor }}
    >
      <Container className="container11">
        <div className="pb-[55px]">
          <h4
            className={`relative font-bold xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3`}
          >
            <span className="md:text-[100px] text-[60px] font-[800] gradient_text block w-[100%] leading-[100px]">
              {Process?.bg_title ? Process?.bg_title : "Process"}
            </span>
            <span
              className="w-[100%] font-bold relative mt-[-30px] block"
              style={{
                color: isColor
                  ? "#000000"
                  : Process?.bg_title
                  ? "#ffffff"
                  : "#000000",
              }}
            >
              {Process?.title}
            </span>
          </h4>
          <p
            className={`${
              isColor ? "text-black" : "text-[#ffffff]"
            } text-center font-sans font-[400] text-[16px] max-w-[1100px] mx-auto`}
          >
            {Process?.description}
          </p>
        </div>
        <div class="timeline11">
          <div class="line"></div>
          {Process?.stepsList &&
            Process?.stepsList.map((items, key, arr) => (
              <div
                className={`section11 single-event-container1 ${
                  key % 2 === 1 ? "" : "right"
                }`}
                key={key}
              >
                <div class="bead11"></div>
                <div
                  className={`content11 event-description1 rounded-[20px] shadow-[0px_0px_50px_0px_#0000001A] p-2 md:p-6`}
                  style={{ backgroundColor: items?.bgColor }}
                >
                  <h2 className="text-[#B8B8B8] md:text-[16px] text-[12px] font-[600] leading-6">
                    {items?.stepNum}
                  </h2>
                  <p className="text-[#1C1C1C] md:text-[24px] text-[16px] font-[400]">
                    {items?.stepDesc}
                  </p>
                </div>
              </div>
            ))}

          {Process?.processList &&
            Process?.processList.map((items, key, arr) => (
              <div
                className={`section11 single-event-container1 ${
                  key % 2 === 1 ? "" : "right"
                }`}
                key={key}
              >
                <div class="bead11"></div>
                <div
                  className={`content11 event-description1 rounded-[20px] shadow-[0px_0px_50px_0px_#0000001A] p-2 md:p-6`}
                  style={{ backgroundColor: items?.bgColor }}
                >
                  <h2 className="text-[#B8B8B8] md:text-[16px] text-[12px] font-[600] leading-6 mb-1">
                    {items?.serialNum}
                  </h2>
                  <h6 className="lg:text-[24px] text-[20px] text-[#000] font-[600] mb-2">
                    {items?.title}
                  </h6>
                  <p className="text-[#1C1C1C] md:text-[20px] text-[16px] font-[400]">
                    {items?.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
