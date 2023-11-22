import React, { useState, useEffect } from "react";
import Play from "./Play";
import Pause from "./Pause";
import TrackBar from "./TrackBar";
import useAudioPlayer from "./useAudioPlayer";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import VolumeBar from "./VolumeBar";
const AudioPlayer = ({ song, initialDuration, share, setShare }) => {
  const {
    volume,
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedVolume,
    setClickedTime,
    setVolume,
  } = useAudioPlayer(song);

  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }
  return (
    <div className="player">
      <audio id="audio">
        <source src={song} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="flex  flex-1 items-center">
        <div className="">
          {playing ? (
            <Pause handleClick={() => setPlaying(false)} />
          ) : (
            <Play handleClick={() => setPlaying(true)} />
          )}
        </div>

        <div className="w-full">
          <div className="">
            <TrackBar
              curTime={curTime}
              duration={duration}
              initialDuration={initialDuration}
              onTimeUpdate={(time) => setClickedTime(time)}
            />
          </div>
          <div className="grid grid-cols-4">
            <span className="text-[#fff] pl-4 pt-1 ">
              {formatDuration(curTime)}/{formatDuration(duration)}
            </span>

            <span className="flex  flex-1 ">
              <span className="flex justify-center align-center w-[34px] h-[34px] ">
                <img src="/icons/speaker.svg" alt="speaker" />
              </span>
              <VolumeBar
                volume={volume}
                onVolumeUpdate={(volumes) => {
                  setClickedVolume(volumes);
                  setVolume(volumes);
                }}
              />
            </span>

            <span
              onClick={() => setShare(!share)}
              className="text-[#fff] min-w-[72px] text-[15px] cursor-pointer col-span-2 flex justify-end items-center mr-2"
            >
              Share
              <img
                src="/img/podcast/share.svg"
                alt="share"
                width={16}
                height={16}
                className="inline ml-2 align-sub"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
