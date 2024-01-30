import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListView from "../components/workout-log/ListView";
import CalendarView from "../components/workout-log/CalendarView";
import WorkoutLogLeft from "../components/workout-log/WorkoutLogLeft";
import WorkoutLogRight from "../components/workout-log/WorkoutLogRight";
import { getWorkoutData } from "../utils/getWorkoutData";
import "../stylesheets/workout_log.css";

import { setWorkout } from "../utils/slice/logSlice";

const WorkoutLog = () => {
  const { workouts, view } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  const fetchWorkoutData = async () => {
    const response = await getWorkoutData();
    dispatch(setWorkout(response));
  };

  useEffect(() => {
    fetchWorkoutData();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between pl-5 pr-5 items-center">
        <WorkoutLogLeft />
        <WorkoutLogRight />
      </div>
      {view === "list" ? (
        <ListView workouts={workouts} />
      ) : (
        <CalendarView workouts={workouts} />
      )}
    </>
  );
};

export default WorkoutLog;
