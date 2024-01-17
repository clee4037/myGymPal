import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercise from "./Exercise";
import "../../stylesheets/exercise.css";

const NewWorkout = ({ updatePage }) => {
  const [exercises, setExercises] = useState(null);
  const [routine, setRoutine] = useState(null);
  const [workoutData, setWorkoutData] = useState({});
  const [allRoutines, setAllRoutines] = useState(null);
  const today = new Date().toISOString().split("T")[0];

  // const validator = () => {
  //   const body = { ...workoutData, exercises: [] };
  //   if (workoutData.date) {
  //     alert("Please select a date");
  //     return false;
  //   }
  //   const keys = Object.keys(workoutData);

  // for (let i = 0; i < keys.length; i++) {
  //   if (keys[i] !== "routine" || keys[i] !== "date") {
  //     console.log(keys[i]);

  //     const exerciseData = body[keys[i]];
  //     console.log("ex", exerciseData);
  //     const transformedData = [];
  //     const setNumber = Object.keys(exerciseData);
  //     console.log("set count", setNumber);
  //     for (let j = 1; j < setNumber.length; j++) {
  //       const setData = exerciseData[setNumber[j]];
  //       if (!setData.weight || !setData.reps) {
  //         alert("Missing weight or reps");
  //         return false;
  //       }
  //       transformedData.push({ reps: setData.reps, weight: setData.weight });
  //     }
  //     body.exercises.push({ name: keys[i], ...transformedData });
  //     delete body[keys[i]];
  //     console.log(body);
  //   }
  // }

  //   return true;
  // };

  /* POST / COMPLETE WORKOUT */
  const sendWorkoutData = async () => {
    try {
      const body = workoutData;
      let exKeys = Object.keys(body.exercises);
      const newExercises = [];
      for (let i = 0; i < exKeys.length; i++) {
        newExercises.push(body.exercises[exKeys[i]]);
        console.log(newExercises);
      }
      body.exercises = newExercises;
      console.log(body);
      await axios.post("http://localhost:3000/workout", body);
      updatePage("log");
    } catch (err) {
      console.error(err);
    }
  };

  /* EXERCISE DATA FROM EXERCISE CHILD COMP*/
  const addWorkoutData = (name, data) => {
    const updatedState = workoutData;
    if (!updatedState.exercises) {
      updatedState.exercises = {};
    }
    if (!updatedState.exercises[name]) {
      updatedState.exercises[name] = { name, data };
    }

    setWorkoutData(updatedState);
  };

  /* GET ALL ROUTINES FOR DROPDOWN */
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

  /* ADD Exercise */
  const addExercise = () => {
    console.log("Click");
    exercises
      ? setExercises([
          ...exercises,
          <Exercise addWorkoutData={addWorkoutData} />,
        ])
      : setExercises([<Exercise addWorkoutData={addWorkoutData} />]);
  };

  return (
    <div className="pl-5 pr-5">
      <h2 className="text-left text-2xl ">New Workout</h2>
      <div className="workout-header pb-5">
        <select
          className="workout-routine-dropdown select select-sm w-full max-w-xs mr-4"
          onChange={chooseRoutine}
        >
          <option value="">Select an option</option>
          {allRoutines &&
            allRoutines.map((routine) => (
              <option value={routine.name} key={routine._id}>
                {routine.name}
              </option>
            ))}
        </select>
        <label
          htmlFor="date-field"
          className="workout-date input w-full max-w-xs"
        >
          <input
            type="date"
            value={workoutData.date || today}
            onChange={(e) => (workoutData.date = e.target.value)}
          />
        </label>
      </div>
      <div className="workout-body">
        {exercises && exercises}
        {exercises && <button onClick={addExercise}>Add Exercise |</button>}
        &nbsp;
        {exercises && <button onClick={sendWorkoutData}>Finish Workout</button>}
      </div>
    </div>
  );
};

export default NewWorkout;
