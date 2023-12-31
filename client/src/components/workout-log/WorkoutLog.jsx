import React, { useState, useEffect } from "react";
import axios from "axios";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import { IoAddCircleOutline } from "react-icons/io5";
import "../../stylesheets/workout_log.css";

const WorkoutLog = ({ updatePage }) => {
  const [workouts, setWorkouts] = useState([]);
  const [view, setView] = useState("list");
  const updateView = (newView) => {
    setView(newView);
  };
  const getWorkoutData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/workout");
      setWorkouts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWorkoutData();
  }, []);
  return (
    <div className="workout-container">
      <div className="workout-header flex flex-row justify-between pl-5 pr-5 items-center">
        <div className="flex flex-row items-center">
          <h2 className="workout-title text-left text-2xl">Log </h2>
          <IoAddCircleOutline
            className="text-xl ml-2 cursor-pointer text-torq"
            onClick={() => updatePage("workout")}
          />
        </div>
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
      </div>
      {view === "calendar" && <CalendarView workouts={workouts} />}
      {view === "list" && (
        <ListView workouts={workouts} updatePage={updatePage} />
      )}
    </div>
  );
};

export default WorkoutLog;
