import React from "react";
import ExerciseTitle from "./ExerciseTitle";
import ExerciseDropdown from "../exercise-dropdown/ExerciseDropdown";

const ExerciseHeader = ({ exerciseName, selectExercise }) => {
  /* NEED TO FIX: ADDING NEW EXERCISE TO ROUTINE DOESNT WORK
      - HISTORY ISNT DISPLAYED */

  return exerciseName ? (
    <ExerciseTitle exerciseName={exerciseName} />
  ) : (
    <ExerciseDropdown
      exerciseName={exerciseName}
      selectExercise={selectExercise}
    />
  );
};

export default ExerciseHeader;
