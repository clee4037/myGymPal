import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListView from "../components/workout-log/ListView";
import CalendarView from "../components/workout-log/CalendarView";
import WorkoutLogLeft from "../components/workout-log/WorkoutLogLeft";
import WorkoutLogRight from "../components/workout-log/WorkoutLogRight";
import "../stylesheets/workout_log.css";

import { fetchWorkouts } from "../utils/slice/logSlice";

const WorkoutLog = () => {
  const { getWorkoutThunk, view } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between pl-5 pr-5 items-center">
        <WorkoutLogLeft />
        <WorkoutLogRight />
      </div>
      {view === "list" ? (
        <ListView workouts={getWorkoutThunk.workouts} />
      ) : (
        <CalendarView workouts={getWorkoutThunk.workouts} />
      )}
    </>
  );
};

export default WorkoutLog;
