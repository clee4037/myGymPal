import React, { useState } from "react";
import ExerciseDropdown from "../exercise-dropdown/ExerciseDropdown";

const AddRoutine = ({ updatePage }) => {
  const [exerciseName, setExerciseName] = useState("");

  const selectExercise = (exercise) => {
    setExerciseName(exercise);
  };

  return (
    <>
      <ExerciseDropdown
        exerciseName={exerciseName}
        selectExercise={selectExercise}
      />
      <input type="number" />
      <button onClick={() => console.log("clicked")}>Add</button>
    </>
  );
};

export default AddRoutine;
