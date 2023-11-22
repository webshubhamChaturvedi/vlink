import React from "react";
import ConversationMessage from "./ConversationMessages";

const Conversation = ({ messages }) => {
  
  const Separator = ({ title = "Today" }) => {
    return (<span className="flex flex-row justify-around items-center my-2">
              <span className="h-[1px] w-full" style={{ background:"linear-gradient(to left,rgba(153,153,153,1) 0,rgba(246,246,246,1) 84%,rgba(255,255,255,0) 100%)",}}/> 
              <span className="flex flex-1 px-3 text-gray-600">{title}</span>
              <span className="h-[1px] w-full" style={{ background:"linear-gradient(to right,rgba(153,153,153,1) 0,rgba(246,246,246,1) 84%,rgba(255,255,255,0) 100%)",}}/> 
            </span>);
  }
  
  return (
    <div id="customScrollbar" className="px-4" style={{ height: "540px", overflowY: "auto" }}>
    {/* <div className="flex flex-col flex-1 p-4 min-h-[250px] overflow-y-auto scrollbar"> */}
      <Separator title="Today" />
      {messages&&messages.length>0?
        messages.map((item, i)=><ConversationMessage message={item} key={i} />)
      :
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-center text-gray-500">No messages yet</span>
      </div>
      }

    </div>
  );
};
export default Conversation;
