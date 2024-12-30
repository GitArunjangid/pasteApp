import React from "react";
import paste from "./Paste";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPastes = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row  mt-4 place-content-between">
        <input
          className="p-2 pl-4 rounded-lg border mt-2 w-[85%] bg-[#f5f5f5] "
          type="text"
          placeholder="enter title  here"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        {/* <button
        onClick={createPaste}
        >
            {
            pasteId ? "Update my paste" 
            : "Create my Paste"
            }
            </button> */}
      </div>

      <div className="flex place-content-center mt-8">
        <textarea
          className="flex rounded-lg min-w-[500px] w-[100%] p-4 bg-[#f5f5f5] border"
          value={paste.content}
          placeholder="enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPastes;
