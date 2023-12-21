import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
// import data from "./sampleData";
import WorkoutLogItem from "./WorkoutLogItem";
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
      <div className="workout-header">
        <h3>Workout Log</h3>
        <button onClick={() => updatePage("workout")}>New Workout</button>
      </div>
      <div className="workout-log">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutLogItem workout={workout} key={workout.workout_id} />
          ))}
      </div>
    </div>
  );
};

export default WorkoutLog;
