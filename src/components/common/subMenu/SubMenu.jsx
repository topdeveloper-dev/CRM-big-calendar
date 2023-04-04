import React from "react";
import Menu from "@mui/material/Menu";

export default function SubMenu({
  children,
  anchorEl,
  setAnchorEl,
  handleClose,
}) {
  const open = Boolean(anchorEl);

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </Menu>
    </div>
  );
}
