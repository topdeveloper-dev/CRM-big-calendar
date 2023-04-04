import React from "react";
import Accordion from "../../../common/accordion/Accordion";

function Sidebar({ version }) {
  return (
    <div
      className={`${
        version === "mobile"
          ? "block mt-5 shadow-none rounded-none h-[90vh] "
          : "hidden md:flex w-full h-[85vh] rounded-2xl shadow-xl"
      } flex-[1] bg-white max-w-[550px]  overflow-hidden  `}
    >
      <div className="max-h-[80vh] w-full overflow-y-scroll overflow-x-hidden">
        <div className=" p-4 text-gray-800">Info</div>

        <Accordion title="Contact">Contact</Accordion>
        <Accordion title="General Info">General Info</Accordion>
        <Accordion title="Additional Info">Additional Info</Accordion>
        <div className=" p-4 text-gray-800">Tasks</div>

        <Accordion title="Tasks">Tasks</Accordion>
        <Accordion title="Notes">Notes</Accordion>
        <Accordion title="Appointment">Notes</Accordion>
      </div>
    </div>
  );
}

export default Sidebar;
