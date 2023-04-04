import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdCall, MdOutlineCancel } from "react-icons/md";
import MessagesContainer from "./MessagesContainer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./chat.css";
import SubMenu from "../../../common/subMenu/SubMenu";

const ChatContainer = () => {
  const [isFav, setIsFav] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuClick = (event) => {
    setOpenSubmenu(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setOpenSubmenu(null);
  };

  const handleCall = () => {
    setIsCalling(true);
  };

  return (
    <>
      {/* Chat Container */}
      <div className=" flex-[2] bg-white rounded-2xl h-[85vh] md:h-[85vh] max-w-[1020px]  shadow-xl">
        {/* chat-header */}
        <div className="h-[60px] flex justify-between items-center px-6 py-3 border-b-2">
          <div className="flex gap-3 items-center">
            <img
              src="/paradigm.jpg"
              alt=""
              className=" rounded-full w-11 h-11 border object-fill"
            />
            <div className="">
              <div>Admin</div>
              <div className="text-sm text-gray-500 mt-[-4px]">offline</div>
            </div>
          </div>

          <div className="flex items-center gap-2 relative">
            <span
              onClick={() => setIsFav(!isFav)}
              className="bg-red-50 hover:bg-red-100 hover:scale-[1.05] cursor-pointer rounded-full flex items-center justify-center p-3"
            >
              {isFav == false ? (
                <span className="flex items-center justify-center">
                  <AiOutlineStar className="w-5 h-5" />
                  Add to Starred
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <AiFillStar className="text-red-500 w-5 h-5" />
                  Remove from Starred
                </span>
              )}
            </span>
            {/* <span
              onClick={handleSubmenuClick}
              className="bg-blue-50 hover:scale-[1.05] cursor-pointer hover:bg-blue-100  rounded-full flex items-center justify-center p-3"
            >
              <HiOutlineDotsVertical className="" /> Mark as read
            </span> */}

            {/* SUB-MENU */}
            <SubMenu
              anchorEl={openSubmenu}
              setAnchorEl={setOpenSubmenu}
              handleClose={handleSubmenuClose}
            >
              <div className="flex flex-col">
                <span
                  className="chat-submenu-item cursor-pointer py-[8px] px-3 pl-4 hover:bg-gray-100"
                  /* onClick={() => setMore(!more)} */
                >
                  Mute
                </span>
                <span
                  className="cursor-pointer py-[8px] px-3 pl-4 hover:bg-gray-100"
                  /*   onClick={() => setMore(!more)} */
                >
                  Hide
                </span>
              </div>
            </SubMenu>

            {/*  {more && (
              <DropDown 
              isDropDown={more}
               setIsDropDown={setMore}
               customStyle="w-[175px] top-8 right-3"
               >
                <span
                  onClick={() => setOpenDeleteModel(true)}
                  className="chat-submenu-item cursor-pointer py-[8px] px-3 pl-4  hover:bg-gray-100"
                >
                  Delete Conversation
                </span>
                <span
                  className="chat-submenu-item cursor-pointer py-[8px] px-3 pl-4 hover:bg-gray-100"
                  onClick={() => setMore(!more)}
                >
                  Mute
                </span>
                <span
                  className="cursor-pointer py-[8px] px-3 pl-4 hover:bg-gray-100"
                  onClick={() => setMore(!more)}
                >
                  Hide
                </span>
              </DropDown>
            )} */}
          </div>
        </div>

        <div className="">
          <MessagesContainer />
        </div>
      </div>
    </>
  );
};

export default ChatContainer;
