import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import User from "../User";
import Button from "@mui/material/Button";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import {
  AllUsers,
  contacts,
  StarredUsers,
  unreadUsers,
} from "../../../common/data/contactsData";

const Chatlist = ({ version }) => {
  const [selected, setSelected] = useState(-1);
  const [isMessages, setIsMessages] = useState(true);
  const [isContacts, setIsContacts] = useState(false);
  const [isUnread, setIsUnread] = useState(true);
  const [isStarred, setIsStarred] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const handleMessagesList = () => {
    setIsMessages(true);
    setIsContacts(false);
  };

  const handleContactsList = () => {
    setIsContacts(true);
    setIsMessages(false);
  };

  const handleUnread = () => {
    setIsUnread(true);
    setIsStarred(false);
    setIsAll(false);
  };

  const handleStarred = () => {
    setIsStarred(true);
    setIsUnread(false);
    setIsAll(false);
  };

  const handleAll = () => {
    setIsAll(true);
    setIsUnread(false);
    setIsStarred(false);
  };

  return (
    <>
      {/* Contacts */}
      <div
        className={`${
          version === "mobile"
            ? "block shadow-none rounded-none max-h-[90vh] "
            : "hidden md:block h-[85vh]"
        } max-w-[550px] min-w-[300px] flex-[1] bg-white rounded-2xl overflow-y-hidden shadow-xl`}
      >
        {/* contact-header */}
        <div className=" pb-2">
          <div className="flex items-center mt-5 justify-center">
            <div className="relative flex items-center w-[75%]">
              <input
                type="text"
                placeholder="Search here"
                className="p-2 pl-4 w-full bg-light-indigo rounded-3xl border border-gray-50 outline-none focus:border-primary-200"
              />
              <FiSearch className=" absolute left-[85%] text-gray-600 w-[18px]  h-[18px]" />
            </div>
          </div>

          <div className="flex items-baseline justify-center rounded-none border-b border-gray-300">
            <Button
              onClick={handleMessagesList}
              sx={{
                color: `${!isMessages && "gray"}`,
                borderBottom: `${isMessages && "3px solid"}`,
                paddingTop: "15px",
                marginTop: "0px",
                paddingBottom: "8px",
                borderRadius: "0",
              }}
              className=" rounded-none text-primary-600 flex flex-col items-center justify-center h-full flex-1"
            >
              <BsFillChatLeftTextFill className="w-4 h-5 text-primary-600" />
              <span>Messages</span>
            </Button>

            <Button
              onClick={handleContactsList}
              sx={{
                color: `${!isContacts && "gray"}`,
                borderBottom: `${isContacts && "3px solid"}`,
                paddingTop: "15px",
                paddingBottom: "8px",
                borderRadius: "0",
              }}
              className="  rounded-none flex flex-col items-center justify-center h-full flex-1"
            >
              <MdOutlinePermContactCalendar className="w-5 h-5" />
              <span>Contacts</span>
            </Button>
          </div>

          {isMessages && (
            <div className="flex  justify-center border-b text-sm text-gray-800">
              <span
                onClick={handleUnread}
                className={`${
                  isUnread && "text-primary-700 border-b-2 border-primary-700"
                } text-center py-2 flex-1 cursor-pointer`}
              >
                Unread
              </span>
              <span
                onClick={handleStarred}
                className={`${
                  isStarred && "text-primary-700 border-b-2 border-primary-700"
                } text-center py-2 flex-1 cursor-pointer`}
              >
                Starred
              </span>
              <span
                onClick={handleAll}
                className={`${
                  isAll && "text-primary-700 border-b-2 border-primary-700"
                } text-center py-2 flex-1 cursor-pointer`}
              >
                All
              </span>
            </div>
          )}
        </div>
        <div className="max-h-full overflow-y-scroll">
          {isMessages &&
            isUnread &&
            unreadUsers.map((contact) => (
              <User
                name={contact.name}
                message={contact.message}
                index={contact.id}
                selected={selected}
                setSelected={setSelected}
                status={contact.status}
              />
            ))}
          {isMessages &&
            isStarred &&
            StarredUsers.map((contact) => (
              <User
                name={contact.name}
                message={contact.message}
                index={contact.id}
                selected={selected}
                setSelected={setSelected}
                status={contact.status}
              />
            ))}
          {isMessages &&
            isAll &&
            AllUsers.map((contact) => (
              <User
                name={contact.name}
                message={contact.message}
                index={contact.id}
                selected={selected}
                setSelected={setSelected}
                status={contact.status}
              />
            ))}

          {isContacts &&
            contacts.map((contact) => (
              <User
                name={contact.name}
                index={contact.id}
                selected={selected}
                setSelected={setSelected}
                message={contact.email}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Chatlist;
