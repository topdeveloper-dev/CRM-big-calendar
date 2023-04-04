import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosReturnLeft } from "react-icons/io";
import { accounts } from "../data/contactsData";
import Account from "../../account/Account";
import { Link } from "react-router-dom";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import SubMenu from "../subMenu/SubMenu";

const SideHeader = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuClick = (event) => {
    setOpenSubmenu(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setOpenSubmenu(null);
  };

  return (
    <>
      <div className="w-full sticky top-0 h-[70px] bg-white border-b border-gray-200">
        <div className="flex p-3 gap-3 items-center ">
          <img
            src="https://pictures.alignable.com/eyJidWNrZXQiOiJhbGlnbmFibGV3ZWItcHJvZHVjdGlvbiIsImtleSI6ImJ1c2luZXNzZXMvbG9nb3Mvc3F1YXJlLzU0NDg1MDEvMTU2MjM1ODQwNF9wZGd0cmkucG5nIiwiZWRpdHMiOnt9fQ=="
            alt=""
            className=" rounded-full w-9 h-9 mb-3 border object-fill"
          />
          <div className="flex gap-4 items-center">
            <div className="text-sm">
              <div className="text-sm text-primary-500 font-semibold">
                Agency View
              </div>
              <div
                onClick={handleSubmenuClick}
                className="flex items-center text-gray-700  hover:opacity-[0.8] gap-2 cursor-pointer bg-gray-50 p-[2px] border border-gray-100 rounded-md mt-1"
              >
                Switch Accounts <HiOutlineSwitchVertical className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SUB-MENU */}
      <SubMenu
        anchorEl={openSubmenu}
        setAnchorEl={setOpenSubmenu}
        handleClose={handleSubmenuClose}
      >
        <div className="flex flex-col px-4">
          <div className="sticky top-0 py-3 bg-white mt-0  z-[5] ">
            <div className="relative flex items-center w-[100%]">
              <input
                type="text"
                placeholder="Search here"
                className="p-2 pl-4 w-full bg-light-indigo rounded-3xl border border-gray-50 outline-none focus:border-primary-200"
              />
              <FiSearch className="absolute left-[85%] text-gray-600 w-[18px] h-[18px]" />
            </div>

            <Link
              to="/agency/locations"
              className=" flex items-center gap-3 mt-3 cursor-pointer text-primary-500"
            >
              <IoIosReturnLeft className="w-5 h-5" />{" "}
              <span>Switch to Agency View</span>
            </Link>
          </div>

          <div className="">
            {accounts.map((contact) => (
              <Account
                name={contact.businessName}
                address={contact.address}
                index={contact.id}
              />
            ))}
          </div>
        </div>
      </SubMenu>
    </>
  );
};

export default SideHeader;
