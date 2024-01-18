import React, { useState, useEffect } from "react";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import WorkoutLogLeft from "./WorkoutLogLeft";
import WorkoutLogRight from "./WorkoutLogRight";
import { getWorkoutData } from "../../utils/getWorkoutData";
import "../../stylesheets/workout_log.css";

const WorkoutLog = ({ updatePage }) => {
  const [workouts, setWorkouts] = useState([]);

  // REFACTOR TO USE REACT ROUTER
  const [view, setView] = useState("list");

  const updateView = (newView) => {
    setView(newView);
  };

  const fetchWorkoutData = async () => {
    const data = await getWorkoutData();
    setWorkouts(data);
  };

  useEffect(() => {
    fetchWorkoutData();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between pl-5 pr-5 items-center">
        <WorkoutLogLeft updatePage={updatePage} />
        <WorkoutLogRight view={view} updateView={updateView} />
      </div>
      {view === "list" ? (
        <ListView workouts={workouts} updatePage={updatePage} />
      ) : (
        <CalendarView workouts={workouts} />
      )}
    </>
  );
};

export default WorkoutLog;
