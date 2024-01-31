import React from "react";
import WorkoutLogLeft from "./WorkoutLogLeft";
import WorkoutLogRight from "./WorkoutLogRight";

const WorkoutLogHeader = () => {
  return (
    <div className="flex flex-row justify-between pl-5 pr-5 items-center">
      <WorkoutLogLeft />
      <WorkoutLogRight />
    </div>
  );
};

export default WorkoutLogHeader;
