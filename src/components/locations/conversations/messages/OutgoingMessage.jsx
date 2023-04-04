import React from "react";

function OutGoingMessage() {
  return (
    <>
      <div className="w-full py-2 rounded-md mt-3 flex justify-end items-start px-3 gap-2">
        <div className="flex flex-col items-end">
          <h2 className="font-normal text-[11px] mt-2 justify-self-end text-gray-400">
            Fri, May 08, 2020 8:00 PM
          </h2>

          <div className="bg-blue-50 border border-blue-50 py-2 px-4 rounded-xl mt-1 w-fit max-w-sm rounded-tr-none">
            <h3 className="font-normal text-[14px] ">
              Hi, do you want to book an Appointment?
            </h3>
          </div>
        </div>
        <div className="h-10 w-10 rounded-full object-cover">
          <img
            src="/paradigm.jpg"
            alt="avatar"
            className=" w-9 h-9 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default OutGoingMessage;
