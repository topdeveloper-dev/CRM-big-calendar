import React from "react";

function Account({ selected, name, setSelected, address, status, index }) {
  return (
    <div
      onClick={() => setSelected(index)}
      className={`cursor-pointer  py-2 border border-gray-200mx-2 mt-3 flex items-start px-3 gap-3.5 ${
        index === selected
          ? "bg-primary-50 hover:bg-primary-50"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="h-11 w-11 rounded-full object-cover relative">
        <img
          src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`}
          alt="avatar"
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <h3 className=" font-medium">{name}</h3>
          <h2 className="font-normal text-xs">1 Jan, 23</h2>
        </div>
        <div>
          <h2 className="font-normal text-sm text-gray-500">{address}</h2>
        </div>
      </div>
    </div>
  );
}

export default Account;
