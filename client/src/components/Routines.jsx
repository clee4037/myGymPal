import React, { useState, useEffect } from "react";
import axios from "axios";
import RoutineItem from "./RoutineItem";
import { IoAddCircleOutline } from "react-icons/io5";

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
    <div>
      <div className="flex flex-row pl-5 items-center">
        <h2 className="text-left text-2xl">Routines</h2>
        <IoAddCircleOutline
          className="text-xl ml-2 cursor-pointer text-torq"
          onClick={() => addRoutine()}
        />
      </div>
      <div className="workout-log">
        {routines.map((routine) => (
          <RoutineItem data={routine} key={routine._id} />
        ))}
      </div>
    </div>
  );
};

export default Routines;
