import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineSwitchAccount,
  MdSupervisorAccount,
} from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";

import { FiRefreshCw } from "react-icons/fi";

import "./sideNav.css";
import SideHeader from "./SideHeader";
import NavAccordion from "./NavAccordion";

export const SideNav = ({ version }) => {
  return (
    <div
      className={`${
        version === "mobile"
          ? "flex w-full border-r-0"
          : "hidden md:flex min-w-[220px] lg:w-[230px] xl:w-[240px]  border-r"
      }  font-medium flex-col fixed left-0 top-0 z-[10]  h-screen  border-gray-300`}
    >
      <SideHeader />

      <div
        id="sidebar-wrapper"
        className="mt-10 tracking-tight flex flex-col box-border"
      >
        <NavLink
          to="/agency/"
          className=" sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
        >
          <MdOutlineSpaceDashboard className=" sett-icon text-gray-800 w-5 h-5" />{" "}
          <span>Agency Dashboard</span>
        </NavLink>
        <NavLink
          to="/agency/sass-configurator"
          className=" sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
        >
          <IoStatsChartOutline className=" sett-icon text-gray-800 w-5 h-5" />{" "}
          <span>Sass Configurator</span>
        </NavLink>

        <NavLink
          to="/agency/locations"
          className=" sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
        >
          <MdSupervisorAccount className=" sett-icon text-gray-800 w-5 h-5" />{" "}
          <span>Locations</span>
        </NavLink>
        <NavLink
          to="/agency/account-snapshots"
          className=" sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
        >
          <MdOutlineSwitchAccount className=" sett-icon text-gray-800 w-5 h-5" />{" "}
          <span>Account Snapshots</span>
        </NavLink>
        <NavLink
          to="/agency/reselling"
          className=" sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
        >
          <FiRefreshCw className=" sett-icon text-gray-800 w-5 h-5" />{" "}
          <span>Reselling</span>
        </NavLink>
        <NavLink
          to="/agency/marketplace"
          className=" sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
        >
          <BiShoppingBag className=" sett-icon text-gray-800 w-5 h-5" />{" "}
          <span>Market Place</span>
        </NavLink>
        {/*   <NavAccordion padding="pl-5" title="Conversations" icon={<BiMessageSquareDetail className="w-5 h-5"/>}>
          <NavLink
            to="/agency/conversations"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Conversations</span>
          </NavLink>
          <NavLink
            to="/agency/manual-actions"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Manual Actions</span>
          </NavLink>
        </NavAccordion> */}
      </div>

      <div className="absolute bg-white border-l-4 tracking-tight border-primary-500 bottom-0 w-full max-h-[90%] overflow-y-scroll border-t border-t-gray-200">
        {/* Settings Nav */}

        <NavAccordion
          padding="pl-5"
          sticky={true}
          title="Settings"
          ActiveHeader="text-primary-500"
          icon={<IoSettingsOutline className="w-5 h-5" />}
        >
          <NavLink
            to="/agency/settings/profile"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Profile</span>
          </NavLink>

          <NavLink
            to="/agency/settings/company"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Company</span>
          </NavLink>

          <NavLink
            to="/agency/settings/team"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Team</span>
          </NavLink>

          <NavLink
            to="/agency/settings/billing"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Billing</span>
          </NavLink>
          <NavLink
            to="/agency/settings/snapshot"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>SnapShot</span>
          </NavLink>
          <NavLink
            to="/agency/settings/phone-system"
            className=" sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Phone System-Twillio</span>
          </NavLink>
        </NavAccordion>
      </div>
    </div>
  );
};
