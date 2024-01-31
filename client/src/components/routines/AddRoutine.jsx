import React, { useState } from "react";
import ExerciseDropdown from "../dropdowns/ExerciseDropdown";

const AddRoutine = ({ showRoutineForm }) => {
  /* WIP: REDUX IT ONCE BUILT OUT*/
  const [exerciseName, setExerciseName] = useState("");

  const selectExercise = (exercise) => {
    setExerciseName(exercise);
  };

  return (
    showRoutineForm && (
      <>
        <ExerciseDropdown
          exerciseName={exerciseName}
          selectExercise={selectExercise}
        />
        <input type="number" />
        <button onClick={() => console.log("clicked")}>Add</button>
      </>
    )
  );
};

export default AddRoutine;
