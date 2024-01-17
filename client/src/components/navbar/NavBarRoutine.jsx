import React from "react";
import { LuDumbbell } from "react-icons/lu";

const NavBarLog = ({ updatePage, currentPage }) => {
  return (
    <button
      className={
        currentPage === "routine"
          ? "cursor-pointer text-torq pr-5 pl-5 underline btn btn-ghost"
          : "cursor-pointer pr-5 pl-5 btn btn-ghost"
      }
      onClick={() => {
        updatePage("routine");
      }}
    >
      <LuDumbbell size={24} />
    </button>
  );
};

export default NavBarLog;
