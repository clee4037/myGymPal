import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWorkouts } from "../../utils/slice/logSlice";
import ListView from "../log-list-view/ListView";
import CalendarView from "../log-calendar-view/CalendarView";

const LogBody = () => {
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

export default LogBody;
