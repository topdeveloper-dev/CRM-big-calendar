import React from "react";
import Backdrop from "../backdrop/Backdrop";

const RightDrawer = ({ children, drawerState, setDrawerState }) => {
  return (
    <>
      {drawerState && <Backdrop setIsState={setDrawerState} />}

      <div
        className={`${drawerState ? "translate-x-[0%]" : "translate-x-[100%]"}
      h-screen bg-white z-[30] w-[65%] max-w-[350px] fixed top-0  right-0 transition-all duration-150 ease-out  overflow-hidden shadow`}
      >
        {children}
      </div>
    </>
  );
};

export default RightDrawer;
