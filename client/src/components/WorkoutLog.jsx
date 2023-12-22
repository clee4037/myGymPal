import React, { useState, useEffect } from "react";
import axios from "axios";
import WorkoutLogItem from "./WorkoutLogItem";
import { IoAddCircleOutline } from "react-icons/io5";
import "../stylesheets/workout_log.css";

const WorkoutLog = ({ updatePage }) => {
  const [workouts, setWorkouts] = useState([]);

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
      <div className="workout-header flex flex-row pl-5 items-center">
        <h2 className="workout-title text-left text-2xl">Workout Log </h2>
        <IoAddCircleOutline
          className="text-xl ml-2 cursor-pointer text-torq"
          onClick={() => updatePage("workout")}
        />
      </div>
      <div className="workout-log">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutLogItem workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default WorkoutLog;
