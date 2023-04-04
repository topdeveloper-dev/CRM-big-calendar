import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscGlobe } from "react-icons/vsc";
import { IoCallOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import LeftDrawer from "../drawers/LeftDrawer";
import RightDrawer from "../drawers/RightDrawer";
import Popover from "@mui/material/Popover";
import Dialer from "../../dialer/Dialer";
import SideNav from "../sideNav/SideNav";
import userAvatar from "../../../assets/user2.jpg";
import { StarredUsers } from "../data/contactsData";
import User from "../../locations/conversations/User";
import { logOut } from "../../../redux/userSlice";
import { toast } from "react-toastify";
import SubMenu from "../subMenu/SubMenu";

const TopNav = (props) => {
  const [isLeftDrawer, setIsLeftDrawer] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const item = useSelector((state) => state.itemSlice.item);

  const navigate = useNavigate();

  const handleSubmenuClick = (event) => {
    setOpenSubmenu(event.currentTarget);
  };
  const handleSubmenuClose = () => {
    setOpenSubmenu(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleDrawer = () => {
    setIsLeftDrawer((prev) => !prev);
  };
  const handleNotificationDrawer = () => {
    setIsNotification((prev) => !prev);
  };

  const handleLogout = () => {
    toast.success("Logout Successfully");
    logOut();
    handleSubmenuClose();

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      <LeftDrawer drawerState={isLeftDrawer} setDrawerState={setIsLeftDrawer}>
        <SideNav version="mobile" />
      </LeftDrawer>

      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Dialer />
      </Popover>
      {/* <RightDrawer
        drawerState={isNotification}
        setDrawerState={setIsNotification}
      >
        {StarredUsers.map((contact) => (
          <User
            name={contact.name}
            message={contact.message}
            index={contact.id}
            status={contact.status}
          />
        ))}
      </RightDrawer> */}

      <div className="w-[full] sticky z-[9] font-medium top-0 h-[70px] flex items-center justify-between px-2 md:px-6 md:pl-8 bg-white border-b border-gray-300">
        <ul
          class="flex flex-wrap -mb-px font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {item[0] == "" ? null : (
            <li class="mr-2 text-base font-medium" role="presentation">
              <button
                class="inline-block p-4 rounded-t-lg"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                {item[0]}
              </button>
            </li>
          )}
          {item[0] == "Conversations" ? (
            <>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/conversations");
                  }}
                >
                  Conversations
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/manual-actions");
                  }}
                >
                  Manual Actions
                </button>
              </li>
            </>
          ) : item[0] == "Contacts" ? (
            <>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/contacts");
                  }}
                >
                  Contacts
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/bulk-actions");
                  }}
                >
                  Bulk Actions
                </button>
              </li>
            </>
          ) : item[0] == "Opportunities" ? (
            <>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/opportunities");
                  }}
                >
                  Opportunities
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/pipeline");
                  }}
                >
                  Pipeline
                </button>
              </li>
            </>
          ) : item[0] == "Automation" ? (
            <>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/workflows");
                  }}
                >
                  Workflows
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                  onClick={() => {
                    navigate("/location/campaigns");
                  }}
                >
                  Campaigns
                </button>
              </li>
            </>
          ) : null}
        </ul>

        <div className="flex items-center ml-3">
          <HiOutlineMenu
            onClick={handleDrawer}
            className="md:hidden w-6 h-6 mr-4 "
          />
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {/* <div className="hidden md:flex relative  items-center w-[75%]">
            <input
              type="text"
              placeholder="Search here"
              className="p-2 pl-4 w-full bg-light-indigo  rounded-3xl border border-gray-50 outline-none focus:border-primary-200"
            />
            <BiSearch className=" absolute left-[85%] text-gray-600 w-[18px]  h-[18px]" />
          </div> */}
          {props.isConversationTab === true ? (
            <span
              className="bg-light-indigo hover:bg-primary-50 rounded-full flex items-center cursor-pointer justify-center p-1 md:p-2"
              onClick={handleClick}
            >
              <IoCallOutline className=" md:w-6 md:h-6 w-5 h-5 hover:scale-[1.04]  text-gray-600" />
            </span>
          ) : (
            <></>
          )}

          <span
            onClick={handleNotificationDrawer}
            className="bg-light-indigo hover:bg-primary-50 rounded-full flex items-center justify-center cursor-pointer p-1 md:p-2"
          >
            <IoMdNotificationsOutline className="md:w-6 hover:scale-[1.04]  md:h-6 w-5 h-5 text-gray-600" />
          </span>

          {/* User Account with DropDown Menu */}
          <div className="relative  w-11 h-11 flex  items-center justify-center">
            <img
              onClick={handleSubmenuClick}
              src={userAvatar}
              alt=""
              className=" cursor-pointer hover:scale-[1.04] hover:opacity-[0.9] hover:bg-primary-50  rounded-full  object-cover border "
            />
            <SubMenu
              anchorEl={openSubmenu}
              setAnchorEl={setOpenSubmenu}
              handleClose={handleSubmenuClose}
            >
              <div className="flex m-3 gap-3 items-center w-full">
                <img
                  src={userAvatar}
                  alt=""
                  className=" rounded-full w-9 h-9 border object-fill"
                />
                <div className="">
                  <div>Paradigm User</div>
                  <div className="text-sm text-gray-500 mt-[-4px]">Admin</div>
                </div>
              </div>

              <div className=" flex justify-between items-center text-gray-700 px-3 py-2 border-t border-gray-200 cursor-pointer hover:bg-gray-50">
                Login As
                <MdArrowForwardIos className="w-3 h-3" />
              </div>
              <div
                onClick={handleLogout}
                className="px-3 py-2 border-t border-gray-200 text-gray-700 cursor-pointer hover:bg-gray-50"
              >
                Logout
              </div>
            </SubMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
