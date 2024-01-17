import React, { useState, useEffect } from "react";
import axios from "axios";

const AddRoutine = ({ updatePage }) => {
  const [newRoutine, setNewRoutine] = useState({});
  const [exerciseName, setExerciseName] = useState("");
  const [allExercises, setAllExercises] = useState(null);
  /* EXERCISE LIST */
  const getExerciseList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/exercise");
      setAllExercises(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const exerciseList =
    allExercises &&
    allExercises.map((exerciseGroup) => (
      <optgroup label={exerciseGroup.type} key={exerciseGroup._id}>
        {exerciseGroup.exercises.map((exercise) => (
          <option value={exercise} key={exercise._id}>
            {exercise.name}
          </option>
        ))}
      </optgroup>
    ));
  // const addExercise = () => {
  //   return (
  //     <div>
  //       <select
  //         className="exercise-dropdown"
  //         value={exerciseName}
  //         onChange={(e) => {
  //           setExerciseName(e.target.text);
  //         }}
  //       >
  //         <option value="Select an option">Select an option</option>
  //         {exerciseList}
  //       </select>
  //       <input type="text" />
  //     </div>
  //   );
  // };

  useEffect(() => {
    getExerciseList();
  }, []);

  return (
    <div>
      {!exerciseName && (
        <select
          className="exercise-dropdown"
          value={exerciseName}
          onChange={(e) => {
            setExerciseName(e.target.text);
          }}
        >
          <option value="Select an option">Select an option</option>
          {exerciseList}
        </select>
      )}
      <input type="number" />
      <button onClick={() => console.log("clicked")}>Add</button>
    </div>
  );
};

export default AddRoutine;
