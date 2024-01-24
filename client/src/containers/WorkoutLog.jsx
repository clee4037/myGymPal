import React, { useState, useEffect } from "react";
import ListView from "../components/workout-log/ListView";
import CalendarView from "../components/workout-log/CalendarView";
import WorkoutLogLeft from "../components/workout-log/WorkoutLogLeft";
import WorkoutLogRight from "../components/workout-log/WorkoutLogRight";
import { getWorkoutData } from "../utils/getWorkoutData";
import "../stylesheets/workout_log.css";

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
