import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListView from "./ListView";
import CalendarView from "./CalendarView";
import { fetchWorkouts } from "../../utils/slice/logSlice";

const WorkoutLogBody = () => {
  const { getWorkoutThunk, view } = useSelector((state) => state.log);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  return view === "list" ? (
    <ListView workouts={getWorkoutThunk.workouts} />
  ) : (
    <CalendarView workouts={getWorkoutThunk.workouts} />
  );
};

export default WorkoutLogBody;
