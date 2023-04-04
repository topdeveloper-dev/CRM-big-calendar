import React from "react";
import Backdrop from "../backdrop/Backdrop";

const LeftDrawer = ({ children, drawerState, setDrawerState }) => {
  return (
    <>
      {drawerState && <Backdrop setIsState={setDrawerState} />}

      <div
        className={`${drawerState ? "translate-x-[0%]" : "translate-x-[-100%]"}
     md:hidden h-screen bg-white z-[30] w-[65%] max-w-[350px] fixed top-0  left-0 transition-all duration-150 ease-out  overflow-hidden shadow`}
      >
        {children}
      </div>
    </>
  );
};

export default LeftDrawer;
