import React, { useEffect, useRef } from "react";
import Backdrop from "../backdrop/Backdrop";

const DropDown = ({
  children,
  isDropDown,
  border,
  setIsDropDown,
  customStyle
}) => {
  const ref = useRef(null);

  console.log("menu state", isDropDown);
  /* Detecting Click outside */
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsDropDown(false);
    }
  };

  return (
    <>
      {/* {isBackdrop && <Backdrop setIsState={setIsDropDown} />} */}
      <div
        ref={ref}
        className={`chat-submenu z-[40] font-nomral  pr-0  max-h-[400px] overflow-y-scroll  absolute flex flex-col rounded-md border
        ${customStyle} text-sm bg-white ${
          border ? "border-gray-200 shadow-xl" : "border-gray-100 shadow-md"
        }`}
      >
        {/* <span className="absolute top-0 left-[-6px] w-0 h-0  border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-primary-500">
        </span> */}

        {children}
      </div>
    </>
  );
};

export default DropDown;
