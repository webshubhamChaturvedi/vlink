import React from "react";

const SupportStatus = ({ online = true }) => {
  return (
    <div
      className={`h-2.5 w-2.5 ${
        online ? "bg-green-600" : "bg-red-600"
      } rounded-full`}
    ></div>
  );
};
export default SupportStatus;
