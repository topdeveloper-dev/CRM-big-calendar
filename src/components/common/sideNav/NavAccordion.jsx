import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const NavAccordion = ({
  children,
  title,
  icon,
  sticky,
  ActiveHeader,
  ActiveBody,
  padding,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`${padding} py-[10px]  cursor-pointer ${
          sticky && "sticky top-0 bg-white"
        } hover:bg-gray-100 rounded-sm mx-[6px] pr-3 flex items-center justify-between mb-1`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex items-center gap-3 ${isOpen && ActiveHeader}`}>
          {icon}
          <span>{title}</span>
        </div>
        <MdArrowForwardIos
          className={`w-3 h-3 ${
            isOpen && ActiveHeader
          } transition-all duration-150 ease-out ${isOpen && "rotate-90"}`}
        />
      </div>
      <div
        className={`  ${
          isOpen && ActiveBody
        } flex flex-col transition-all duration-150 overflow-hidden ease-out ${
          isOpen ? "h-auto translat-y-0" : "translate-y-[-5%] h-0"
        }`}
      >
        <div className=""> {isOpen && children} </div>
      </div>
    </div>
  );
};

export default NavAccordion;
