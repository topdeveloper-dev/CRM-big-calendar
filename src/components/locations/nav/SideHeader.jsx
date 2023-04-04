import React from "react";

const SideHeader = () => {
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
                Location Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideHeader;
