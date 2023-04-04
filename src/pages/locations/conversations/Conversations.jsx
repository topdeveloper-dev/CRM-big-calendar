import React, { useState } from "react";
import Sidebar from "../../../components/locations/conversations/sidebar/Sidebar";
import Chatlist from "../../../components/locations/conversations/chatlist/Chatlist";
import ChatContainer from "../../../components/locations/conversations/messages/ChatContainer";
import { HiOutlineMenu } from "react-icons/hi";
import LeftDrawer from "../../../components/common/drawers/LeftDrawer";
import RightDrawer from "../../../components/common/drawers/RightDrawer";

const Conversations = () => {
  const [isConversationDrawer, setIsConversationDrawer] = useState(false);
  const [isDetailDrawer, setIsDetailDrawer] = useState(false);
  const navData = [{ url: "/conversations", text: "Conversations" }];

  const handleConversationDrawer = () => {
    setIsConversationDrawer((prev) => !prev);
  };

  const handleDetailsDrawer = () => {
    setIsDetailDrawer((prev) => !prev);
  };

  return (
    <>
      {/*Smaller devices SideDrawer */}
      <LeftDrawer
        drawerState={isConversationDrawer}
        setDrawerState={setIsConversationDrawer}
      >
        <Chatlist version="mobile" />
      </LeftDrawer>
      <RightDrawer
        drawerState={isDetailDrawer}
        setDrawerState={setIsDetailDrawer}
      >
        <Sidebar version="mobile" />
      </RightDrawer>

      {/* Main-Background */}
      <div className="bg-light-indigo  h-[100vh]">
        {/*Wrapper for content */}
        <div className=" px-3 md:px-6 ">
          {/* Smaller devices Header */}
          <div className="px-2 pt-3 md:hidden flex items-center justify-between">
            <HiOutlineMenu
              onClick={handleConversationDrawer}
              className="md:hidden w-6 h-6"
            />
            <HiOutlineMenu
              onClick={handleDetailsDrawer}
              className="md:hidden w-6 h-6"
            />
          </div>

          {/* Main body Content*/}
          <div className="flex gap-2 md:gap-5 md:pt-5 pt-2 ">
            <Chatlist />
            <ChatContainer />
            {/* <Sidebar /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversations;
