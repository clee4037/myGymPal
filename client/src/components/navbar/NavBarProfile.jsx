import React from "react";
import { CgProfile } from "react-icons/cg";

const NavBarProfile = ({ updatePage, currentPage }) => {
  return (
    <button
      className={
        currentPage === "profile"
          ? "cursor-pointer text-torq pr-5 pl-5 btn btn-ghost"
          : "cursor-pointer pr-5 pl-5 btn btn-ghost"
      }
      onClick={() => {
        updatePage("profile");
      }}
    >
      <CgProfile size={24} />
    </button>
  );
};

export default NavBarProfile;
