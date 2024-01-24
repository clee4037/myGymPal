import React from "react";
import "../../stylesheets/workout_log.css";
import { useNavigate } from "react-router-dom";

const WorkoutLogRight = ({ view, updateView }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={view === "list" && "text-torq"}
        onClick={() => {
          updateView("list");
          navigate("/");
        }}
      >
        List{" "}
      </button>
      {" | "}
      <button
        className={view === "calendar" && "text-torq"}
        onClick={() => {
          updateView("calendar");
          navigate("/calendar");
        }}
      >
        {" "}
        Calendar
      </button>
    </div>
  );
};

export default WorkoutLogRight;
