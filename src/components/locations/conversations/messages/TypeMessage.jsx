import React, { createRef, useEffect, useRef, useState } from "react";
import { BsEmojiSmile, BsTag } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiFillMinusCircle } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";
import "./typemessage.css";

function TypeMessage({ type }) {
  const [messageBody, setMessageBody] = useState("");
  const inputRef = createRef();
  const [viewEmojis, setViewEmojis] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const [file, setFile] = useState();
  const [model, setModel] = useState(false);
  const [AppointmentModel, setAppointmentModel] = useState(false);
  const [scriptModel, setScriptModel] = useState(false);

  /*  const dispatch = useDispatch();
  const { contactDetails } = useSelector((state) => state.contactReducer); */

  /*   const [sendMessage, { isLoading }] = useSendMessageMutation();
  const fetchConveration = useGetAllConversationsQuery(); */
  /*  console.log(type); */

  const handleMessage = (e) => {
    e.preventDefault();
    /*   const sendObj = {
      type: type,
      contactId: contactDetails?.contact.id,
      message: messageBody,
    };

    sendMessage(sendObj)
      .unwrap()
      .then((payload) => {
        console.log("New Message Payload", payload);
        dispatch(setConversationId(payload.conversationId));
        fetchConveration.refetch();
        setMessageBody("");
        setFile(null);
        toast.success("Message has been sent")
        alert("Message has been sent");
      })
      .catch((error) => {
        console.log("error", error.data.message);
        toast.error(error?.data?.message)
        alert(error?.data?.message);
      }); */
  };

  const pickEmoji = ({ emoji }, e) => {
    const ref = inputRef.current;
    ref.focus();
    const start = messageBody.substring(0, ref.selectionStart);
    const end = messageBody.substring(ref.selectionStart);
    const msg = start + emoji + end;
    setMessageBody(msg);
    inputRef.current.selectionEnd = cursorPosition;
    setCursorPosition(start.length + emoji.length);
  };

  useEffect(() => {
    inputRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoji = () => {
    inputRef.current.focus();
    setViewEmojis((prev) => !prev);
  };

  const handleClear = () => {
    setMessageBody("");
    setFile(null);
  };

  return (
    <div className="mt-2.5">
      <div className="flex gap-2">
        <div className="flex flex-col items-start w-full h-full ">
          <textarea
            ref={inputRef}
            placeholder="Type here..."
            className=" p-2 w-full rounded-md border outline-none focus:border-blue-400 focus:border-2 border-gray-300 text-sm text-gray-600 h-16"
            style={{ resize: "none" }}
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
          ></textarea>

          {file && (
            <div className="relative">
              {" "}
              <img
                className="w-12 h-12 object-cover border-2 border-white mt-2"
                src={file ? URL.createObjectURL(file) : ""}
                alt=""
              ></img>{" "}
              <AiFillMinusCircle
                className="absolute top-0 right-[-2px] text-red-500"
                onClick={() => setFile(null)}
              />{" "}
            </div>
          )}

          <input
            type="file"
            autoFocus
            name="file"
            id="img_upload"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="flex flex-col gap-1 relative">
          {viewEmojis && (
            <div className="absolute bottom-20 right-0">
              <EmojiPicker
                emojiStyle="twitter"
                lazyLoad={true}
                onEmojiClick={pickEmoji}
              />
            </div>
          )}
          <BsEmojiSmile
            className="h-4 w-4 text-gray-600 cursor-pointer hover:text-yellow-400 "
            onClick={handleEmoji}
          />
          <label htmlFor="img_upload" className="img_icon">
            <MdOutlineAttachment className="h-4 w-4 text-gray-600 cursor-pointer hover:text-yellow-400" />
          </label>
          {/* <HiOutlineDocumentText className="h-4 w-4 text-gray-600 cursor-pointer hover:text-yellow-400" /> */}
        </div>
      </div>
      <div className=" flex mt-3 items-center gap-3 md:justify-between">
        {/* <div className="flex items-center gap-1 md:gap-4">
          <button
            type="button"
            class="focus:outline-none text-gray-800 border bg-transparent border-red-300  hover:bg-red-50  font-normal 
          rounded-md text-[12px] px-3 py-1"
            onClick={() => setModel(true)}
          >
            End Chat
          </button>
        </div> */}
        <div className="flex items-center gap-1 md:gap-4">
          <button
            onClick={handleClear}
            type="button"
            class="focus:outline-none text-gray-800 border bg-transparent border-gray-400  hover:bg-gray-50  font-normal 
            rounded-md text-[12px] px-3 py-1"
          >
            Clear
          </button>

          {/* <button
            type="button"
            class="focus:outline-none text-gray-800 border bg-transparent border-indigo-300  hover:bg-indigo-50  font-medium
            rounded-md text-[12px] px-3 py-1"
            onClick={() => setScriptModel(true)}
          >
            Script
          </button>

          <button
            type="button"
            class="focus:outline-none text-gray-800 border bg-transparent border-indigo-300  hover:bg-indigo-50  font-medium 
            rounded-md text-[12px] px-3 py-1"
            onClick={() => setAppointmentModel(true)}
          >
            Schedule
          </button> */}
          <button
            type="button"
            class="focus:outline-none text-gray-800 border bg-transparent border-blue-300  hover:bg-blue-50  font-medium 
            rounded-md text-[12px] px-3 py-1"
            onClick={handleMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default TypeMessage;
