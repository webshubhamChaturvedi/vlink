import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

export default function TrackBar(props) {
  const { duration, curTime, onTimeUpdate, initialDuration } = props;

  let curPercentage = (curTime / duration) * 100;
  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="bar">
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, #62207E ${curPercentage? curPercentage :0}%, white 0)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
    </div>
  );
}
