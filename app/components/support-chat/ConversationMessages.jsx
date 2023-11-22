import React, { useState } from "react";
import moment from "moment/moment";

const ConversationMessage = ({ message: { from, content, created_at} }) => {

  const [ showDate, setShowDate ] = useState(false);

  return (
    <div className={`cursor-pointer max-w-2/6 ${from=='operator'?"mr-auto":"ml-auto"} mt-2 text-${from=='operator'?"left":"right"}`}>
      {from=="operator"&&
      <span className={`text-xs flex justify-start p-1 text-[#7B7B7B]`}>
        <p className="ml-4 mr-1" style={{fontSize:"10px"}}>
          {from=='operator'?"Aundrea":"Delivered"}
        </p>
        {showDate&&
        <p style={{fontSize:"10px"}}>
          {moment(new Date(created_at)).format("ddd, MMM D, YYYY h:mm A")}
        </p>}
      </span>}
      <div onMouseEnter={()=>setShowDate(true)} onMouseOut={()=>setShowDate(false)} style={{ color: from=='operator'?"#000000":"#ffffff", background: from=='operator'?"#b5b5b5":"#10609D" }} className={`rounded-${from=='operator'?"r":"l"}-xl ${from=='operador'?"ml-2.5":"mr-2.5"} inline-block rounded-t-xl text-sm p-2`}>
        {content}
      </div>
      {from!="operator"&&
      <span className="text-xs flex justify-end p-1 text-[#7B7B7B]">
        <p className="ml-4 mr-1" style={{fontSize:"10px"}}>
          {from=='operator'?"Aundrea":"Delivered"}
        </p>
        <p style={{fontSize:"10px"}}>
          {moment(new Date(created_at)).format("ddd, MMM D, YYYY h:mm A")}
        </p>
      </span>}
    </div>
  );
};
export default ConversationMessage;
