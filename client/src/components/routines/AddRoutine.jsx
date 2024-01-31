import React, { useState } from "react";
import ExerciseDropdown from "../dropdowns/ExerciseDropdown";

const AddRoutine = ({ updatePage }) => {
  /* REDUX IT */
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
