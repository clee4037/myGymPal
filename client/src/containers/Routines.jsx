import React, { useState, useEffect } from "react";
import { getRoutines } from "../utils/getRoutines";
import RoutineItem from "../components/routines/RoutineItem";
import RoutinesHeader from "../components/routines/RoutinesHeader";
import AddRoutine from "../components/routines/AddRoutine";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  const [showRoutineForm, setShowRoutineForm] = useState(false);

  const fetchRoutines = async () => {
    const data = await getRoutines();
    setRoutines(data);
  };

  /* WIP: ADD ROUTINE FEATURE */
  const createRoutine = () => {
    setShowRoutineForm(true);
    console.log("Not Functional");
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    <>
      <RoutinesHeader createRoutine={createRoutine} />
      {showRoutineForm && <AddRoutine />}
      <div className="workout-log">
        {routines.map((routine) => (
          <RoutineItem data={routine} key={routine._id} />
        ))}
      </div>
    </>
  );
};

export default Routines;
