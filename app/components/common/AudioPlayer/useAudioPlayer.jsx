import { useState, useEffect } from "react";

function useAudioPlayer(song) {
  const [duration, setDuration] = useState();

  const [curTime, setCurTime] = useState();
  const [volume, setVolume] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();
  const [clickedVolume, setClickedVolume] = useState();

  useEffect(() => {
    const audio = document.getElementById("audio");
    const setAudioData = async () => {
      await setCurTime(audio.currentTime);
      await setDuration(audio.duration);
      await setVolume(audio.volume);
    };

    const setAudioTime = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };
    const setAudioVolume = () => {
      setVolume(audio.volume);
    };
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumeupdate", setAudioVolume);
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }
    if (clickedVolume && clickedVolume >= 0 && clickedVolume <= 1) {
      audio.volume = clickedVolume;
      setClickedVolume(null);
    }
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("volumeupdate", setAudioVolume);
    };
  });

  return {
    curTime,
    duration,
    playing,
    volume,
    setPlaying,
    setClickedTime,
    setClickedVolume,
    setVolume,
  };
}

export default useAudioPlayer;
