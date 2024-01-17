import React from "react";

const NavBarTitle = ({ updatePage, currentPage }) => {
  return (
    <div
      className="navbar-start"
      onClick={() => {
        updatePage("log");
      }}
    >
      <h1 className="text-2xl font-bold text-torq pl-2">MyWorkoutPal</h1>
    </div>
  );
};

export default NavBarTitle;
