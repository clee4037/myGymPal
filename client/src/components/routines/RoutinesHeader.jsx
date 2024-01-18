import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const Routines = ({ createRoutine }) => {
  return (
    <div className="flex flex-row pl-5 items-center">
      <h2 className="text-left text-2xl">Routines</h2>
      <IoAddCircleOutline
        className="text-xl ml-2 cursor-pointer text-torq"
        onClick={() => createRoutine()}
      />
    </div>
  );
};

export default Routines;
