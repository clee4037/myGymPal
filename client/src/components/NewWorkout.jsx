import React, { useState } from "react";
import Exercise from "./Exercise";
import data from "./routineData";
import "../stylesheets/exercise.css";

const NewWorkout = () => {
  const [exercises, setExercises] = useState(null);
  const [routine, setRoutine] = useState(null);
  const [workoutData, setWorkoutData] = useState(null);
  const chooseRoutine = (e) => {
    const selectedRoutine = data.find(
      (routine) => routine.name === e.target.value
    );
    setRoutine(selectedRoutine);

    const exercises = selectedRoutine.data.map(({ exercise, sets }) => (
      <Exercise name={exercise} setCount={sets} />
    ));
    setExercises(exercises);
  };
  const addExercise = () => {
    exercises
      ? setExercises([...exercises, <Exercise />])
      : setExercises([<Exercise />]);
  };
  return (
    <>
      <h3>Workout</h3>
      <div className="workout-header">
        <select className="workout-routine-dropdown" onChange={chooseRoutine}>
          <option value="">Select an option</option>
          <option value="New Workout">New Workout</option>
          {data.map((routine) => (
            <option value={routine.name}>{routine.name}</option>
          ))}
        </select>
        <label htmlFor="date-field" className="workout-date">
          <input type="date" />
        </label>
        <label htmlFor="notes-field" className="workout-notes">
          <input
            placeholder="Notes"
            // value={TO-ADD}
            // onChange={(e) => set...(e.target.value)}
          />
        </label>
      </div>
      <div className="workout-body">
        <div>{exercises && exercises}</div>
        <button onClick={addExercise}>Add Exercise</button>
        <button>Finish Workout</button>
      </div>
    </>
  );
};

export default NewWorkout;
