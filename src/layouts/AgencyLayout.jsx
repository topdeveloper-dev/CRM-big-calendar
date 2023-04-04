import React from "react";
import { SideNav as AgencySideNav } from "../components/agency/nav/SideNav";
import TopNav from "../components/common/topNav/TopNav";
import AgencyRoutes from "../routes/AgencyRoutes";

function SideNavigation() {
  return <AgencySideNav />;
}

const LocationLayout = () => {
  return (
    <>
      <SideNavigation />
      <div className="md:ml-[220px] lg:ml-[230px] xl:ml-[240px]">
        <TopNav isConversationTab={false} />
        <AgencyRoutes />
      </div>
    </>
  );
};

export default LocationLayout;
