import React from "react";
import { IoIosStats } from "react-icons/io";

const NavBarStats = ({ updatePage, currentPage }) => {
  return (
    <button
      className={
        currentPage === "stats"
          ? "cursor-pointer text-torq pr-5 pl-5 btn btn-ghost"
          : "cursor-pointer pr-5 pl-5 btn btn-ghost"
      }
      onClick={() => {
        updatePage("stats");
      }}
    >
      <IoIosStats size={24} />
    </button>
  );
};

export default NavBarStats;
