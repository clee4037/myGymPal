import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import WorkoutLog from "./WorkoutLog";
import exercise from "./exerciseData";
// import routines from "./routineData";
import RoutineItem from "./RoutineItem";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const getRoutines = async () => {
    try {
      const response = await axios.get("http://localhost:3000/routine");
      console.log(response.data);
      setRoutines(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRoutines();
  }, []);

  const addRoutine = () => {
    console.log("Not Functional");
  };
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
