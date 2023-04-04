import React from "react";
import { CircularProgress } from "@mui/material";

const PageLoader = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default PageLoader;
