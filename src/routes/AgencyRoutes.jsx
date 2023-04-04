import React from "react";
import { Routes, Route } from "react-router-dom";
import Locations from "../pages/agency/Locations";
import AddLocation from "../pages/agency/AddLocation";
import UnderConst from "../pages/underConst/UnderConst";

const AgencyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UnderConst />} />
      <Route path="/sass-configurator" element={<UnderConst />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/locations/add" element={<AddLocation />} />
      <Route path="/account-snapshots" element={<UnderConst />} />
      <Route path="/reselling" element={<UnderConst />} />
      <Route path="/marketplace" element={<UnderConst />} />
      <Route path="/affiliate-portal" element={<UnderConst />} />
      <Route path="/settings/profile" element={<UnderConst />} />
      <Route path="/settings/company" element={<UnderConst />} />
      <Route path="/settings/team" element={<UnderConst />} />
      <Route path="/settings/billing" element={<UnderConst />} />
    </Routes>
  );
};

export default AgencyRoutes;
