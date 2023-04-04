import React, { useState } from "react";
import TypeMessage from "./TypeMessage";

function SendMessageTab() {
  const [tabsNameActive, setTabsNameActive] = useState("SMS");

  const tabsData = ["SMS","Email"];
  const tabs = {
    SMS: <TypeMessage type={tabsNameActive} />,
    Email: <TypeMessage type={tabsNameActive} />,
  };


  const handleTabs = (tabName) => {
    setTabsNameActive(tabName);
  };

  return (
    <div className="h-auto mt-auto  px-3 py-1 border-t-2 bg-white">
      <div className="flex gap-6 flex-wrap bg-white">
        {tabsData.map((tabName, index) => {
          return (
            <div
              key={tabName}
              className={`ml-1 ${
                tabsNameActive === tabName
                  ? "text-blue-500"
                  : "underline-none"
              }`}
            >
              <h2
                className="text-[12px] cursor-pointer"
                onClick={() => handleTabs(tabName)}
              >
                {tabName}
              </h2>
            </div>
          );
        })}
      </div>
      <div>{tabs[tabsNameActive]}</div>
    </div>
  );
}

export default SendMessageTab;
