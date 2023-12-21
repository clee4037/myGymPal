import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import "../stylesheets/exercise.css";

const NewWorkout = () => {
  const [exercises, setExercises] = useState(null);
  const [routine, setRoutine] = useState(null);
  const [workoutData, setWorkoutData] = useState({});
  const [allRoutines, setAllRoutines] = useState(null);
  console.log(workoutData);
  /* POST / COMPLETE WORKOUT */
  const sendWorkoutData = async () => {
    // try {
    //   const response = await axios.get("http://localhost:3000/workout");
    //   console.log(response.data);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  const addWorkoutData = (name, data) => {
    const updatedState = workoutData;
    updatedState[name] = data;
    setWorkoutData(updatedState);
  };

  /* GET ROUTINES */
  const getRoutines = async () => {
    try {
      const response = await axios.get("http://localhost:3000/routine");
      setAllRoutines(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRoutines();
  }, []);

  /* CHOOSE ROUTINE AND RENDER */
  const chooseRoutine = (e) => {
    const selectedRoutine =
      allRoutines &&
      allRoutines.find((routine) => routine.name === e.target.value);
    setRoutine(selectedRoutine);
    workoutData.routine = selectedRoutine.name;
    const exercises = selectedRoutine.data.map(({ exercise, sets }) => (
      <Exercise
        name={exercise}
        setCount={sets}
        addWorkoutData={addWorkoutData}
        key={exercise + sets}
      />
    ));
    setExercises(exercises);
  };

  const addExercise = () => {
    console.log("Click");
    exercises
      ? setExercises([
          ...exercises,
          <Exercise addWorkoutData={addWorkoutData} />,
        ])
      : setExercises([<Exercise addWorkoutData={addWorkoutData} />]);
  };
  console.log(exercises);
  return (
    <>
      <h3>Workout</h3>
      <div className="workout-header">
        <select className="workout-routine-dropdown" onChange={chooseRoutine}>
          <option value="">Select an option</option>
          {/* <option value="New Workout">New Workout</option> */}
          {allRoutines &&
            allRoutines.map((routine) => (
              <option value={routine.name} key={routine._id}>
                {routine.name}
              </option>
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
