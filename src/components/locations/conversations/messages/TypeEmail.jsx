import React, { createRef, useEffect, useRef, useState } from "react";
import { BsEmojiSmile, BsTag } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiFillMinusCircle } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllConversationsQuery,
  useSendMessageMutation,
} from "../../../common/manageState/service/messageService";
import { setConversationId } from "../../../common/manageState/reducer/conversationReducer";
import EmojiPicker from "emoji-picker-react";
import "./typemessage.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import DipositionModel from "../../Models/DispositionModel";
import Backdrop from "../../Models/Backdrop";
import ScheduleModel from "../../Models/ScheduleModel";
import ScriptModel from "../../Models/ScriptModel";

function TypeEmail({ type }) {
  const [messageBody, setMessageBody] = useState("");
  const inputRef = createRef();
  const [viewEmojis, setViewEmojis] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  const [file, setFile] = useState();
  const [model, setModel] = useState(false);
  const [AppointmentModel, setAppointmentModel] = useState(false);
  const [scriptModel, setScriptModel] = useState(false);

  const dispatch = useDispatch();
  const { contactDetails } = useSelector((state) => state.contactReducer);
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const fetchConveration = useGetAllConversationsQuery();
  console.log(type);

  const handleMessage = (e) => {
    e.preventDefault();
    const sendObj = {
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
        toast.success("Message has been sent");
        alert("Message has been sent");
      })
      .catch((error) => {
        console.log("error", error.data.message);
        /*    toast.error(error?.data?.message) */
        alert(error?.data?.message);
      });
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
      {/*  <ToastContainer position="bottom-right" newestOnTop /> */}
      {model && <Backdrop model={model} setModel={setModel} />}
      {model && <DipositionModel setModel={setModel} />}

      {scriptModel && (
        <Backdrop scriptModel={scriptModel} setScriptModel={setScriptModel} />
      )}
      {scriptModel && <ScriptModel setScriptModel={setScriptModel} />}

      {AppointmentModel && (
        <Backdrop
          AppointmentModel={AppointmentModel}
          setAppointmentModel={setAppointmentModel}
        />
      )}
      {AppointmentModel && (
        <ScheduleModel setAppointmentModel={setAppointmentModel} />
      )}

      <div className="flex gap-2">
        <div className="flex flex-col items-start w-full h-full ">
          <textarea
            ref={inputRef}
            placeholder="Type here..."
            className="w-full rounded-md border border-gray-300 text-xs h-20"
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
          <BsTag className="h-4 w-4 text-gray-600 cursor-pointer hover:text-yellow-400" />

          <HiOutlineDocumentText className="h-4 w-4 text-gray-600 cursor-pointer hover:text-yellow-400" />
        </div>
      </div>
      <div className="py-2 mt-2 border-t-2 flex items-center justify-between">
        {/* <div className="flex items-center gap-4">
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700  hover:ring-4 hover:ring-red-300 font-medium 
          rounded-md text-[11px] px-3 py-2"
            onClick={() => setModel(true)}
          >
            End Chat
          </button>
        </div> */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleClear}
            type="button"
            class="focus:outline-none text-gray bg-gray-200  hover:ring-2 hover:ring-gray-300 font-medium 
          rounded-md text-[11px] px-3 py-2"
          >
            Clear
          </button>

          {/* <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400  hover:ring-2 hover:ring-yellow-300 font-medium 
          rounded-md text-[11px] px-3 py-2"
          onClick={()=>setScriptModel(true)}
          >
            Script
          </button> */}
          {/* 
          <button
            type="button"
            class="focus:outline-none text-white bg-blue-700  hover:ring-2 hover:ring-blue-300 font-medium 
          rounded-md text-[11px] px-3 py-2"
          onClick={()=>setAppointmentModel(true)}
          >
            Schedule
          </button> */}
          <button
            type="button"
            class="focus:outline-none text-white bg-blue-700  hover:ring-2 hover:ring-blue-300 font-medium 
          rounded-md text-[11px] px-3 py-2"
            onClick={handleMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default TypeEmail;
