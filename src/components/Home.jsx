import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import paste from "./Paste";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="flex flex-col mt-5">
      <div className="flex flex-row  mt-4 place-content-between">
        <input
          className="p-2 pl-4 rounded-lg border mt-2 w-[85%] bg-[#f5f5f5] "
          type="text"
          placeholder="Enter title  here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button
          className=" bg-[#333cef] rounded-lg mt-2 text-white"
          onClick={createPaste}
        >
          {pasteId ? "Update my paste" : "Create my Paste"}
        </button>
      </div>

      <div className=" flex place-content-center mt-8">
        <textarea
          className="flex rounded-lg min-w-[500px] w-[100%] p-4 bg-[#f5f5f5] border"
          value={value}
          placeholder="Enter content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
