import React from "react";
import { Routes, Route } from "react-router-dom";
import LocationLayout from "../layouts/LocationLayout";
import AgencyLayout from "../layouts/AgencyLayout";
import Login from "../pages/login/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/agency/*" element={<AgencyLayout />} />
      <Route path="/location/*" element={<LocationLayout />} />
    </Routes>
  );
};

export default MainRoutes;
