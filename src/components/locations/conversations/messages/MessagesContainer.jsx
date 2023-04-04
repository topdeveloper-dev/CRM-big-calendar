import React from "react";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import SendMessageTab from "./SendMessageTab";

function MessagesContainer() {
  return (
    <div className="flex flex-col justify-between overflow-hidden">
      <div className=" max-h-[calc(85vh-225px)] md:max-h-[calc(85vh-225px)] overflow-y-scroll">
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <IncomingMessage />
      </div>

      <div className=" h-[165px] w-[100%]">
        <SendMessageTab />
      </div>
    </div>
  );
}

export default MessagesContainer;
