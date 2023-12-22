import React from "react";

const NavBar = ({ currentPage, updatePage }) => {
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => {
          updatePage("log");
        }}
      >
        Workout Log
      </button>
      {" | "}
      <button
        className="cursor-pointer"
        onClick={() => {
          updatePage("routine");
        }}
      >
        Routines
      </button>
      {" | "}
      <button
        className="cursor-pointer"
        onClick={() => {
          updatePage("stats");
        }}
      >
        Statistics
      </button>
      {" | "}
      <button
        className="cursor-pointer"
        onClick={() => {
          updatePage("profile");
        }}
      >
        Profile
      </button>
    </>
  );
};

export default NavBar;
