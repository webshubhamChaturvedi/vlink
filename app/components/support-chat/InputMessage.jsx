import React, { useState } from "react";
import SendButton from "./../common/SendButton";
import PaperPlaneIcon from "./../../../public/icons/paper-plane.svg";

const InputMessage = ({ onSend, session }) => {

  const [ content, setContent ] = useState("");
  const [ send, setSend ] = useState(false);

  return (
    <div className="flex bg-white justify-between items-center m-2 h-[50px] border border-solid rounded">
    {/* <div className="flex bg-white justify-between items-center m-2 h-[50px] border border-solid border-cadetBlue rounded "> */}
      <input
        placeholder="Send Message"
        className="p-2 bg-transparent border-0"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <div className="p-2">
        <SendButton
          disabled= {send}
          icon={PaperPlaneIcon}
          onClick={async () => {
            if(content !== "") {
            let message = {
              type: "text",
              from: "user",
              origin: "chat",
              content: content,
            };
            setSend(true);
            await onSend(session, message);
            setContent('');
            setSend(false);
          }
          }}
        />
      </div>
    </div>
  );
};
export default InputMessage;
