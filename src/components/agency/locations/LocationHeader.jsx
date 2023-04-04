import React from "react";
import { Button } from "@mui/material";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const LocationHeader = () => {
  const navigate = useNavigate();

  const handleNewAccount = () => {
    navigate("/agency/locations/add");
  };

  return (
    <div className="flex flex-wrap items-center justify-between pt-5 md:gap-3 gap-2 px-3 md:px-4">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">Locations</h2>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outlined" color="primary">
          <VscFeedback className="w-4 h-4 text-primary-500 mr-2" />
          Submit Feedback
        </Button>

        <Button onClick={handleNewAccount} variant="contained" color="primary">
          <MdOutlinePersonAddAlt className="w-4 h-4 text-white mr-2" />
          Create Location
        </Button>
      </div>
    </div>
  );
};

export default LocationHeader;
