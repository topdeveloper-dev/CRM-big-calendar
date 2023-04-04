import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "../../../redux/userSlice";
import DropDown from "../dropDown/DropDown";

const UserDropDown = ({ accDropDown, setAccDropDown, userAvatar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    toast.success("Logout Successfully");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <DropDown
      isDropDown={accDropDown}
      setIsDropDown={setAccDropDown}
      customStyle="w-[200px] top-8 right-3 overflow-x-hidden"
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
    </DropDown>
  );
};

export default UserDropDown;
