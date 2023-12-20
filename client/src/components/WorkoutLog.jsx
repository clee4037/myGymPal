import React, { useRef, useState, useEffect } from "react";
import data from "./sampleData";
import WorkoutLogItem from "./WorkoutLogItem";
import "../stylesheets/workout_log.css";

const WorkoutLog = ({ updatePage }) => {
  return (
    <div className="workout-container">
      <div className="workout-header">
        <h3>Workout Log</h3>
        <button onClick={() => updatePage("workout")}>New Workout</button>
      </div>
      <div className="workout-log">
        {data.map((workout) => (
          <WorkoutLogItem workout={workout} key={workout.workout_id} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutLog;
