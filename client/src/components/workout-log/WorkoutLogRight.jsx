import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import { getWorkoutData } from "../../utils/getWorkoutData";
import { IoAddCircleOutline } from "react-icons/io5";
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
