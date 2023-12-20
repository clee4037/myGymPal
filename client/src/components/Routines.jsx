import React, { useRef, useState, useEffect } from "react";
import WorkoutLog from "./WorkoutLog";
import exercise from "./exerciseData";
import routines from "./routineData";
import RoutineItem from "./RoutineItem";

const Routines = () => {
  const addRoutine = () => {};
  return (
    <>
      <h3>Routines</h3>
      <button onClick={() => addRoutine()}>Add Routine</button>
      {routines.map((routine) => (
        <RoutineItem data={routine} />
      ))}
    </>
  );
};

export default Routines;
