import React from "react";
import "../../stylesheets/workout_log.css";

const WorkoutLogRight = ({ view, updateView }) => {
  return (
    <div>
      <button
        className={view === "list" && "text-torq"}
        onClick={() => updateView("list")}
      >
        List{" "}
      </button>
      {" | "}
      <button
        className={view === "calendar" && "text-torq"}
        onClick={() => updateView("calendar")}
      >
        {" "}
        Calendar
      </button>
    </div>
  );
};

export default WorkoutLogRight;
