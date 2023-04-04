import React from "react";
import { SideNav as LocationSideNav } from "../components/locations/nav/SideNav";
import TopNav from "../components/common/topNav/TopNav";
import LocationRoutes from "../routes/LocationRoutes";

function SideNavigation() {
  return <LocationSideNav />;
}

const LocationLayout = () => {
  return (
    <>
      <SideNavigation />
      <div className="md:ml-[220px] lg:ml-[230px] xl:ml-[240px]">
        <TopNav isConversationTab={true} />
        <LocationRoutes />
      </div>
    </>
  );
};

export default LocationLayout;
