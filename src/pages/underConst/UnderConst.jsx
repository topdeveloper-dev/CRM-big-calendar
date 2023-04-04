import React from "react";
import underDev from "./UC2.png";

const UnderConst = () => {
  return (
    <>
      <div className="bg-light-indigo w-full h-[100vh]  flex flex-col justify-center items-center">
        <img
          className="w-[400px] bg-cover opacity-70 mt-[-200px]"
          src={underDev}
          alt=""
        />
        <h4 className="text-gray-700 font-medium text-center mt-5">
          Under construction
        </h4>
      </div>
    </>
  );
};

export default UnderConst;
