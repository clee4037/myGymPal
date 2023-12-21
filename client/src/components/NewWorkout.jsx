import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import data from "./routineData";
import "../stylesheets/exercise.css";

const NewWorkout = () => {
  const [exercises, setExercises] = useState(null);
  const [routine, setRoutine] = useState(null);
  const [workoutData, setWorkoutData] = useState({});

  const sendWorkoutData = async () => {
    try {
      await axios.post("/workout", workoutData);
      console.log("Workout Logged");
    } catch (err) {
      console.error(err);
    }
    return null;
  };

  const addWorkoutData = (name, data) => {
    const updatedState = workoutData;
    updatedState[name] = data;
    setWorkoutData(updatedState);
  };

  const chooseRoutine = (e) => {
    const selectedRoutine = data.find(
      (routine) => routine.name === e.target.value
    );
    setRoutine(selectedRoutine);
    workoutData.routine = selectedRoutine.name;
    const exercises = selectedRoutine.data.map(({ exercise, sets }) => (
      <Exercise
        name={exercise}
        setCount={sets}
        addWorkoutData={addWorkoutData}
      />
    ));
    setExercises(exercises);
  };

  const addExercise = () => {
    exercises
      ? setExercises([
          ...exercises,
          <Exercise addWorkoutData={addWorkoutData} />,
        ])
      : setExercises([<Exercise addWorkoutData={addWorkoutData} />]);
  };

  return (
    <>
      <h3>Workout</h3>
      <div className="workout-header">
        <select className="workout-routine-dropdown" onChange={chooseRoutine}>
          <option value="">Select an option</option>
          {/* <option value="New Workout">New Workout</option> */}
          {data.map((routine) => (
            <option value={routine.name}>{routine.name}</option>
          ))}
        </select>
        <label htmlFor="date-field" className="workout-date">
          <input
            type="date"
            onChange={(e) => (workoutData.date = e.target.value)}
          />
        </label>
      </div>
      <div className="workout-body">
        <div>{exercises && exercises}</div>
        {exercises && <button onClick={addExercise}>Add Exercise</button>}
        {exercises && <button onClick={sendWorkoutData}>Finish Workout</button>}
      </div>
    </>
  );
};

export default NewWorkout;
