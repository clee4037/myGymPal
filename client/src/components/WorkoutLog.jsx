import React, { useRef, useState, useEffect } from "react";
import data from "./sampleData";
import WorkoutLogItem from "./WorkoutLogItem";
import "../stylesheets/workout_log.css";

const WorkoutLog = () => {
  return (
    <div className="workout-container">
      {data.map((workout) => (
        <WorkoutLogItem workout={workout} key={workout.workout_id} />
      ))}
    </div>
  );
};

export default WorkoutLog;
