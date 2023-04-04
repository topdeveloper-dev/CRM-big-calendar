import React from "react";

const Backdrop = ({ setIsState }) => {
  const handleClose = () => {
    setIsState(false);
  };
  return (
    <div
      className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-gray-800 opacity-50"
      style={{ zIndex: "25" }}
      onClick={handleClose}
    ></div>
  );
};

export default Backdrop;
