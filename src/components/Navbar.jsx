import React from "react";
import { NavLink } from "react-router-dom";

const Naavbar = () => {
  return (
    <div className="flex flex-row gap-10 place-content-center p-2 text-white bg-slate-800">
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/pastes"}>Pastes</NavLink>
    </div>
  );
};

export default Naavbar;
