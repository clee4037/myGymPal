import React, { useRef, useState, useEffect } from "react";

const NavBar = ({ currentPage, updatePage }) => {
  // const [hiddenButton, setHiddenButtons] = useState(null);
  // useEffect(() => {
  //   setHiddenButtons(currentPage);
  // }, [currentPage]);
  // const updateHiddenButton = (newButton) => {
  //   setHiddenButtons(newButton);
  // };
  return (
    <>
      <button
        onClick={() => {
          updatePage("log");
        }}
      >
        Workout Log
      </button>
      {" | "}
      <button
        onClick={() => {
          updatePage("routine");
        }}
      >
        Routines
      </button>
      {" | "}
      <button
        onClick={() => {
          updatePage("stats");
        }}
      >
        Statistics
      </button>
      {" | "}
      <button
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
