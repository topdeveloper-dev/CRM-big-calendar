import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { Card, MenuItem, TextField, Button } from "@mui/material";
import NumberButton from "./NumberButton";
import useLongPress from "../common/longPress/LongPress";

const Dialer = () => {
  const [numbers, setNumbers] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [text, setText] = useState("");

  const handleClearText = () => {
    setText(text.slice(0, -1));
  };

  const handleClearTextLongPress = () => {
    setText("");
  };

  const longPressEvent = useLongPress(
    handleClearTextLongPress,
    handleClearText
  );

  const onLongPressFn = (secondaryText) => {
    setText(text + secondaryText);
  };

  const onClickFn = (number) => {
    setText(text + number);
  };

  const handleSelectChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <>
      <Card
        variant="outlined"
        className="p-4 max-w-[300px] min-w-[300px] flex flex-col"
      >
        <div className="mt-4 p-4 border border-gray-100 rounded-lg items-center flex justify-center">
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-[80%] focus:outline-none bg-transparent text-gray-700"
            />
          </div>

          <FiDelete
            className="text-gray-500 cursor-pointer hover:text-gray-500 w-5 h-5"
            {...longPressEvent}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 m-4 flex-shrink-0">
          <NumberButton
            number="1"
            letters=""
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="2"
            letters="ABC"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="3"
            letters="DEF"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="4"
            letters="GHI"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="5"
            letters="JKL"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="6"
            letters="MNO"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="7"
            letters="PQRS"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="8"
            letters="TUV"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="9"
            letters="WXYZ"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="*"
            letters=""
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="0"
            letters="+"
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
          <NumberButton
            number="#"
            letters=""
            onClickFn={onClickFn}
            onLongPressFn={onLongPressFn}
          />
        </div>
        <div className="mx-4">
          <TextField
            size="small"
            label="Call from"
            fullWidth
            variant="outlined"
            select
          >
            {numbers.map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="flex items-center justify-center m-4">
          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{ padding: "12px", borderRadius: 28 }}
          >
            <FaPhone className="text-white-500 cursor-pointer hover:text-gray-500 w-5 h-5" />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Dialer;
