import React from "react";
import { Button } from "@mui/material";
import useLongPress from "../common/longPress/LongPress";

const NumberButton = ({ number, letters, onClickFn, onLongPressFn }) => {
  const handleClick = () => {
    onClickFn(number);
  };

  const handleLongPress = () => {
    if (number === "0") {
      onLongPressFn("+");
    } else {
      onLongPressFn(number);
    }
  };

  const longPressEvent = useLongPress(handleLongPress, handleClick);

  return (
    <Button
      variant="contained"
      color="primary"
      className="text-2xl font-bold rounded-full w-16 p-0 m-1 flex items-center justify-center"
      {...longPressEvent}
    >
      <div className="flex items-center justify-center">
        <div className="mr-1">{number}</div>
        <div className="text-sm font-light flex-grow text-right">{letters}</div>
      </div>
    </Button>
  );
};

export default NumberButton;
