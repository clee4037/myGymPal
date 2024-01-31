import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import "../../stylesheets/workout_log.css";
import { useNavigate } from "react-router-dom";

const LogLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center">
      <h2 className="workout-title text-left text-2xl">Log </h2>
      <IoAddCircleOutline
        className="text-xl ml-2 cursor-pointer text-torq"
        onClick={() => navigate("/workout")}
      />
    </div>
  );
};

export default LogLeft;
