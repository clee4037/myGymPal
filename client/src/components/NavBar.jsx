import React, { useRef, useState, useEffect } from "react";

const NavBar = ({ currentPage, updatePage }) => {
  const [hiddenButton, setHiddenButtons] = useState(null);
  useEffect(() => {
    setHiddenButtons(currentPage);
  }, [currentPage]);
  const updateHiddenButton = (newButton) => {
    setHiddenButtons(newButton);
  };
  return (
    <>
      {hiddenButton !== "log" && (
        <button
          onClick={() => {
            updateHiddenButton("log");
            updatePage("log");
          }}
        >
          Workout Log
        </button>
      )}
      {hiddenButton !== "routine" && (
        <button
          onClick={() => {
            updateHiddenButton("routine");
            updatePage("routine");
          }}
        >
          Routines
        </button>
      )}
      {hiddenButton !== "stats" && (
        <button
          onClick={() => {
            updateHiddenButton("stats");
            updatePage("stats");
          }}
        >
          Statistics
        </button>
      )}
      {hiddenButton !== "profile" && (
        <button
          onClick={() => {
            updateHiddenButton("profile");
            updatePage("profile");
          }}
        >
          Profile
        </button>
      )}
    </>
  );
};

export default NavBar;
