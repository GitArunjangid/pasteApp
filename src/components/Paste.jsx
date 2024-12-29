import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  return (
    <div className="flex flex-col gap-10 mt-5 ">
      <input
        className="p-2, rounded-lg min-w-[600px] mt-5 p-2 pl-4 bg-[#f5f5f5]"
        type="search"
        placeholder="search here...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>

      <div className="flex flex-col gap-5 border p-2">
        <div className="text-left font-bold text-2xl">All Pastes</div>
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div
                className="border flex flex-row place-content-between p-2"
                key={paste?._id}
              >
                <div className="text-lg font-bold">{paste.title}</div>

                <div className="flex flex-col place-items-end">
                  <div className="flex gap-2">
                    <button>
                      <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                    </button>
                    <button>
                      <a href={`/pastes/${paste?._id}`}>View</a>
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copy to clipboard");
                      }}
                    >
                      Copy
                    </button>
                    <button>Share</button>
                  </div>

                  <div>{paste.createdAt}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default paste;
