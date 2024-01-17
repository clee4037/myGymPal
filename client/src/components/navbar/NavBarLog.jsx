import React from "react";
import { GoHistory } from "react-icons/go";

const NavBarLog = ({ updatePage, currentPage }) => {
  return (
    <button
      className={
        currentPage === "log"
          ? "cursor-pointer text-torq pr-5 pl-5 btn btn-ghost"
          : "cursor-pointer pr-5 pl-5 btn btn-ghost "
      }
      onClick={() => {
        updatePage("log");
      }}
    >
      <GoHistory size={24} />
    </button>
  );
};

export default NavBarLog;
