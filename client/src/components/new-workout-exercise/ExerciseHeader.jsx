import React from "react";
import ExerciseTitle from "./ExerciseTitle";
import ExerciseDropdown from "../dropdowns/ExerciseDropdown";

const ExerciseHeader = ({ exerciseName, exerciseIndex }) => {
  return exerciseName ? (
    <ExerciseTitle exerciseIndex={exerciseIndex} />
  ) : (
    <ExerciseDropdown
      exerciseName={exerciseName}
      exerciseIndex={exerciseIndex}
    />
  );
};

export default ExerciseHeader;
