import React from "react";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { LuDumbbell } from "react-icons/lu";
import { IoIosStats } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavBarButtons = ({ button, updatePage, currentPage }) => {
  const navigate = useNavigate();
  const icons = {
    profile: <CgProfile size={24} />,
    log: <GoHistory size={24} />,
    routine: <LuDumbbell size={24} />,
    stats: <IoIosStats size={24} />,
  };
  return (
    <button
      className={
        currentPage === { button }
          ? "cursor-pointer text-torq pr-5 pl-5 btn btn-ghost"
          : "cursor-pointer pr-5 pl-5 btn btn-ghost"
      }
      onClick={() => {
        updatePage(button);
        button === "log" ? navigate("/") : navigate(`/${button}`);
      }}
    >
      {icons[button]}
    </button>
  );
};

export default NavBarButtons;
