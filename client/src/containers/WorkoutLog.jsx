import React from "react";
import WorkoutLogBody from "../components/workout-log/WorkoutLogBody";

import WorkoutLogLeft from "../components/workout-log/WorkoutLogLeft";
import WorkoutLogRight from "../components/workout-log/WorkoutLogRight";
import "../stylesheets/workout_log.css";

const WorkoutLog = () => {
  return (
    <>
      <div className="flex flex-row justify-between pl-5 pr-5 items-center">
        <WorkoutLogLeft />
        <WorkoutLogRight />
      </div>
      <WorkoutLogBody />
    </>
  );
};

export default WorkoutLog;
