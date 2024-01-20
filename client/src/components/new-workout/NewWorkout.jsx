import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import RoutineDropdown from "./RoutineDropdown";
import DateDropdown from "./DateDropdown";
import NewWorkoutFooter from "./NewWorkoutFooter";
import { postWorkout } from "../../utils/postWorkout";
import { getRoutines } from "../../utils/getRoutines";
import "../../stylesheets/exercise.css";

const NewWorkout = ({ updatePage }) => {
  const [exercises, setExercises] = useState([]);
  const [workoutData, setWorkoutData] = useState({});
  const [allRoutines, setAllRoutines] = useState(null);

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
      body.exercises = Object.keys(body.exercises).map(
        (key) => body.exercises[key]
      );
      await postWorkout(body);
      updatePage("log");
    } catch (err) {
      console.error(err);
    }
  };

  /* EXERCISE DATA FROM EXERCISE CHILD COMP */
  const addWorkoutData = (name, data) => {
    const updatedState = workoutData;
    updatedState.exercises = updatedState.exercises || {};
    if (!updatedState.exercises[name]) {
      updatedState.exercises[name] = { name, data };
    }
    setWorkoutData(updatedState);
  };

  /* GET ALL ROUTINES FOR DROPDOWN */
  const fetchRoutines = async () => {
    try {
      const data = await getRoutines();
      setAllRoutines(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  /* CHOOSE ROUTINE AND RENDER */
  const chooseRoutine = (e) => {
    const selectedRoutine =
      allRoutines &&
      allRoutines.find((routine) => routine.name === e.target.value);
    // workoutData.routine = selectedRoutine.name;
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
    setExercises([...exercises, <Exercise addWorkoutData={addWorkoutData} />]);
  };

  return (
    <div className="pl-5 pr-5">
      <h2 className="text-left text-2xl ">New Workout</h2>
      <div className="workout-header pb-5">
        <RoutineDropdown
          allRoutines={allRoutines}
          chooseRoutine={chooseRoutine}
        />
        <DateDropdown workoutData={workoutData} />
      </div>
      {exercises && (
        <>
          {exercises}
          <NewWorkoutFooter
            addExercise={addExercise}
            sendWorkoutData={sendWorkoutData}
          />
        </>
      )}
    </div>
  );
};

export default NewWorkout;
