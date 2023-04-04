import React from "react";

function User({ selected, name, setSelected, message, status, index }) {
  return (
    <div
      onClick={() => setSelected(index)}
      className={`cursor-pointer py-2 border-gray-200 mx-2 mt-3 flex items-start px-3 gap-3.5 ${
        index === selected
          ? "bg-primary-50 hover:bg-primary-50"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="h-11 w-11 rounded-full object-cover relative">
        <img
          src="/paradigm.jpg"
          alt="avatar"
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-medium">{name}</h3>
          <h2 className="font-normal text-xs">1 Jan, 23</h2>
        </div>
        <div>
          <h2 className="font-normal text-sm text-gray-500">{message}</h2>
        </div>
      </div>
    </div>
  );
}

export default User;
