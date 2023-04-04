import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { MdOutlineContactPage } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import "./sideNav.css";
import SideHeader from "./SideHeader";
import NavAccordion from "./NavAccordion";
import { useDispatch } from "react-redux";
import { itemData } from "../../../redux/itemSlice";

export const SideNav = ({ version }) => {
  const dispatch = useDispatch();

  const handleItemDashboard = () => {
    const itemsList = [""];
    dispatch(itemData(itemsList));
  };

  const handleItemConversations = () => {
    const itemsList = ["Conversations", "Manual Actions"];
    dispatch(itemData(itemsList));
  };

  const handleItemContacts = () => {
    const itemsList = ["Contacts", "Bulk Actions"];
    dispatch(itemData(itemsList));
  };

  const handleItemCalendar = () => {
    const itemsList = [""];
    dispatch(itemData(itemsList));
  };
  const handleItemOpportunities = () => {
    const itemsList = ["Opportunities", "Pipeline"];
    dispatch(itemData(itemsList));
  };

  const handleItemAutomation = () => {
    const itemsList = ["Automation", "Workflows"];
    dispatch(itemData(itemsList));
  };

  return (
    <div
      className={`${
        version === "mobile"
          ? "flex w-full border-r-0"
          : "hidden md:flex min-w-[220px] lg:w-[230px] xl:w-[240px]  border-r"
      }  font-medium flex-col fixed left-0 top-0 z-[10] bg-white h-screen  border-gray-300`}
    >
      <SideHeader />

      <div
        id="sidebar-wrapper"
        className="mt-10 tracking-tight flex flex-col box-border"
      >
        <NavLink
          to="/location/"
          className="sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          onClick={() => handleItemDashboard()}
        >
          <MdOutlineSpaceDashboard className="sett-icon text-gray-800 w-5 h-5" />
          {""}
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to={"/location/conversations"}
          className="sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          onClick={() => handleItemConversations()}
        >
          <BiMessageSquareDetail className="sett-icon text-gray-800 w-5 h-5" />
          {""}
          <span>Conversations</span>
        </NavLink>

        <NavLink
          to="/location/calendar"
          className="sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          onClick={() => handleItemCalendar()}
        >
          <HiOutlineCalendar className="sett-icon text-gray-800 w-5 h-5" />
          {""}
          <span>Calendar</span>
        </NavLink>

        <NavLink
          to="/location/contacts"
          className="sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          onClick={() => handleItemContacts()}
        >
          <MdOutlineContactPage className="sett-icon text-gray-800 w-5 h-5" />
          {""}
          <span>Contacts</span>
        </NavLink>

        <NavLink
          to="/location/Opportunities"
          className="sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          onClick={() => handleItemOpportunities()}
        >
          <HiOutlineLightBulb className="sett-icon text-gray-800 w-5 h-5" />
          {""}
          <span>Opportunities</span>
        </NavLink>

        <NavLink
          to="/location/workflows"
          className="sideNav pl-5 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          onClick={() => handleItemAutomation()}
        >
          <MdOutlineMotionPhotosAuto className="sett-icon text-gray-800 w-5 h-5" />
          {""}
          <span>Automation</span>
        </NavLink>
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
            to="/location/settings/business-profile"
            className="sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Business Profile</span>
          </NavLink>
          <NavLink
            to="/location/settings/company-billing"
            className="sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Company Billing</span>
          </NavLink>
          <NavLink
            to="/location/settings/my-staff"
            className="sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>My Staff</span>
          </NavLink>
          <NavLink
            to="/location/settings/pipelines"
            className="sideNav pl-12 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
          >
            <span>Pipelines</span>
          </NavLink>

          <NavAccordion
            ActiveHeader="text-primary-500"
            ActiveBody="mb-3 text-gray-500"
            padding="pl-12"
            title="Calendar"
          >
            <NavLink
              to="/location/settings/calendars/main"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Calendars</span>
            </NavLink>
            <NavLink
              to="/location/settings/calendars/preferences"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Preferences</span>
            </NavLink>
            <NavLink
              to="/location/settings/calendars/availability"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Availability</span>
            </NavLink>
            <NavLink
              to="/location/settings/calendars/connections"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Connections</span>
            </NavLink>
          </NavAccordion>

          <NavAccordion
            ActiveHeader="text-primary-500"
            ActiveBody="mb-3 text-gray-500"
            padding="pl-12"
            title="Phone Numbers"
          >
            <NavLink
              to="/location/settings/phoneNumbers/manage"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Manage</span>
            </NavLink>
            <NavLink
              to="/location/settings/phoneNumbers/usageSummary"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Usage Summary</span>
            </NavLink>
            <NavLink
              to="/location/settings/phoneNumbers/regulatory-bundles"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Regulatory Bundle/Address</span>
            </NavLink>
            <NavLink
              to="/location/settings/phoneNumbers/tollfree-registration"
              className="sideNav pl-14 py-[10px] hover:bg-gray-100 rounded-sm mx-[6px] flex items-center gap-3 mb-1"
            >
              <span>Toll-Free Number Registration</span>
            </NavLink>
          </NavAccordion>
        </NavAccordion>
      </div>
    </div>
  );
};
