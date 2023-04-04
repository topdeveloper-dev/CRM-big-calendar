import React from "react";
function IncomingMessage() {
  return (
    <>
      <div className="w-full py-2 rounded-md mt-3 flex items-start px-3 gap-2">
        <div className="h-10 w-10 rounded-full object-cover">
          <img
            src="/paradigm.jpg"
            alt="avatar"
            className="rounded-full w-9 h-9 object-cover"
          />
        </div>
        <div className="">
          <h2 className="font-normal text-[11px] text-gray-400">
            Fri, May 08, 2020 8:00 PM
          </h2>
          <div className="bg-transparent border border-gray-200 py-2 px-4 rounded-xl rounded-tl-none w-fit max-w-sm mt-1">
            <h3 className="font-normal text-[14px]">
              Hi, I just recieved a message.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncomingMessage;
