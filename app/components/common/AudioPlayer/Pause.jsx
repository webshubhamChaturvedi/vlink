import PauseIcon from "app/components/icons/PauseIcon";
import React from "react";


export default function Pause(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <PauseIcon />
    </button>
  );
}
