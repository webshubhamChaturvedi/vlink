import React from "react";


export default function VolumeBar(props) {
  const { volume, onVolumeUpdate } = props;

  const curPercentage = volume  ;

  function calcClickedVolume(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector(".bar__progress_volume");
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const volumePerPixel = 100 / barWidth;
    return volumePerPixel * clickPositionInBar;
  }

  function handleVolumeDrag(e) {
    onVolumeUpdate(calcClickedVolume(e) /100);

    const updateVolumeOnMove = eMove => {
    
      onVolumeUpdate(calcClickedVolume(eMove)/100);
    };

    document.addEventListener("mousemove", updateVolumeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateVolumeOnMove);
    });
  }

  return (
    <div className="bar_volume">
      <div
        className="bar__progress_volume"
        style={{
          background: `linear-gradient(to right, #62207E ${curPercentage *100}%, white 0)`
        }}
        onMouseDown={e => handleVolumeDrag(e)}
      >
        <span
          className="bar__progress__knob_volume"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
     
    </div>
    
  );
}
