import React, { useRef, useState, useEffect } from "react";
import Exercise from "./Exercise";
import "../stylesheets/exercise.css";

const Workout = () => {
  const [exercises, setExercises] = useState(null);
  const addExercise = () => {
    exercises
      ? setExercises([...exercises, <Exercise />])
      : setExercises([<Exercise />]);
  };
  return (
    <>
      <h3>Workout</h3>
      <div className="workout-header">
        <label htmlFor="name-field" className="workout-name">
          <input
            placeholder="Name"
            // value={TO-ADD}
            // onChange={(e) => set...(e.target.value)}
          />
        </label>
        <label htmlFor="date-field" className="workout-date">
          <input value={Date().toString()} />
        </label>
        <label htmlFor="notes-field" className="workout-notes">
          <input
            placeholder="Notes"
            // value={TO-ADD}
            // onChange={(e) => set...(e.target.value)}
          />
        </label>
        <button onClick={addExercise}>Add Exercise</button>

        <div>{exercises && exercises}</div>
      </div>
    </>
  );
};

export default Workout;
