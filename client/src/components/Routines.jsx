import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import RoutineItem from "./RoutineItem";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const getRoutines = async () => {
    try {
      const response = await axios.get("http://localhost:3000/routine");
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
        <RoutineItem data={routine} key={routine._id} />
      ))}
    </>
  );
};

export default Routines;
