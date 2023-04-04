import React, { useState } from "react";
import {
  AiOutlineFacebook,
  AiOutlineMessage,
  AiOutlineStar,
} from "react-icons/ai";
import {
  BiHappy,
  BiMessageSquare,
  BiSad,
  BiTimeFive,
  BiUser,
} from "react-icons/bi";
import { BsCalendarCheck, BsFileCheck } from "react-icons/bs";
import {
  HiOutlineDocumentReport,
  HiOutlineDocumentText,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineMarkEmailUnread } from "react-icons/md";
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SubMenu from "../../common/subMenu/SubMenu";

const LocationCard = ({ data }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const handleSubmenuClick = (event) => {
    setOpenSubmenu(event.currentTarget);
  };
  const handleSubmenuClose = () => {
    setOpenSubmenu(null);
  };

  return (
    <div className="border flex flex-col justify-between bg-white border-gray-200 rounded-2xl shadow-lg">
      <div className="flex items-center justify-end gap-3 p-3  px-4 border-b border-gray-200">
        <div className="cursor-pointer">
          <HiOutlineDocumentReport className="w-6 h-6" />
        </div>

        <div
          onClick={handleSubmenuClick}
          className="flex items-center cursor-pointer gap-2 px-2"
        >
          <HiOutlineDotsVertical className="w-5 h-5" />
        </div>
      </div>

      {/* SUB-MENU */}
      <SubMenu
        anchorEl={openSubmenu}
        setAnchorEl={setOpenSubmenu}
        handleClose={handleSubmenuClose}
      >
        <div className="flex flex-col text-sm">
          <span className="chat-submenu-item cursor-pointer py-[8px] px-4 pl-4  hover:bg-gray-100">
            Edit
          </span>
          <span
            className="chat-submenu-item cursor-pointer py-[8px] px-4 pl-4 hover:bg-gray-100"
            /* onClick={() => setMore(!more)} */
          >
            Manage Client
          </span>
          <span
            className="cursor-pointer py-[8px] px-4 pl-4 hover:bg-gray-100"
            /*   onClick={() => setMore(!more)} */
          >
            Switch to SaaS
          </span>
        </div>
      </SubMenu>

      {/* content */}
      <div className="flex p-6 py-7">
        {/* content divided into five columns */}
        {/* column1 */}
        <div className="flex-[2] flex flex-col gap-3">
          {/* location-heading */}
          <Link
            to="/location/"
            className="flex items-center gap-3 hover:opacity-[0.7]"
          >
            <span className="bg-gray-400 rounded-full w-8 h-8"></span>
            <h1 className="text-xl font-semibold">{data}</h1>
          </Link>

          <div className="mb-3 flex flex-col gap-3 text-sm">
            <p className="flex items-center gap-3 text-gray-500">
              <IoLocationOutline className="w-5 h-5" />
              1003 Bishop Street, Honolulu, HI 96813
            </p>
            <p className="flex items-center pl-1 gap-2 text-gray-500">
              <IoIosCall className="w-5 h-5" />
              +18082156661
            </p>
          </div>
        </div>

        {/* column2 */}
        <div className="flex flex-col gap-8 flex-[1]">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">Active Users</h2>
            <div className="flex items-center gap-2 text-sm">
              <BiUser className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">No. of Contacts</h2>
            <div className="flex items-center gap-2 text-xs">
              <BiUser className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
        </div>
        {/* column3 */}
        <div className="flex flex-col gap-8 flex-[1]">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">Calls</h2>
            {/* inCalls */}
            <div className="flex items-center gap-2 text-sm">
              <VscCallIncoming className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            {/* outcalls */}
            <div className="flex items-center gap-2 text-sm">
              <VscCallOutgoing className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <BiTimeFive className="w-4 h-4" />
              <span>0m</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">
              No. of Appointments
            </h2>
            <div className="flex items-center gap-2 text-xs">
              <BsCalendarCheck className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
        </div>
        {/* column4 */}
        <div className="flex flex-col gap-8 flex-[1]">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">Emails</h2>
            {/* inEmails */}
            <div className="flex items-center gap-2 text-sm">
              <MdOutlineMarkEmailUnread className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            {/* outEmails */}
            <div className="flex items-center gap-2 text-sm">
              <MdOutlineEmail className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">Submissions</h2>
            <div className="flex items-center gap-2 text-xs">
              <HiOutlineDocumentText className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <BsFileCheck className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <AiOutlineFacebook className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
        </div>

        {/* column5 */}
        <div className="flex flex-col gap-8 flex-[1]">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">Text Messages</h2>
            {/* inMessage */}
            <div className="flex items-center gap-2 text-sm">
              <AiOutlineMessage className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            {/* outMessage */}
            <div className="flex items-center gap-2 text-sm">
              <BiMessageSquare className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-500 ">Reviews</h2>
            <div className="flex items-center gap-2 text-xs">
              <AiOutlineStar className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <BiHappy className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <BiSad className="w-4 h-4" />
              <span>0</span>
              <span className="p-1 bg-green-100 rounded-md">0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
    </div>
  );
};

export default LocationCard;
