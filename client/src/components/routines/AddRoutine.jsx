import React, { useState, useEffect } from "react";
import { getExerciseList } from "../../utils/getExerciseList";
import ExerciseList from "./ExerciseList";

const AddRoutine = ({ updatePage }) => {
  // const [newRoutine, setNewRoutine] = useState({});
  const [exerciseName, setExerciseName] = useState("");
  const [allExercises, setAllExercises] = useState(null);

  const fetchExerciseList = async () => {
    const data = await getExerciseList();
    setAllExercises(data);
  };

  useEffect(() => {
    fetchExerciseList();
  }, []);

  return (
    <>
      {!exerciseName && (
        <select
          className="exercise-dropdown"
          value={exerciseName}
          onChange={(e) => {
            setExerciseName(e.target.text);
          }}
        >
          <option value="Select an option">Select an option</option>
          <ExerciseList allExercises={allExercises} />
        </select>
      )}
      <input type="number" />
      <button onClick={() => console.log("clicked")}>Add</button>
    </>
  );
};

export default AddRoutine;
