import React, { useState, useEffect } from "react";
import RoutineItem from "../components/routines/RoutineItem";
import RoutinesHeader from "../components/routines/RoutinesHeader";
import AddRoutine from "../components/routines/AddRoutine";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoutines } from "../utils/slice/routineSlice";

const Routines = () => {
  const dispatch = useDispatch();
  const { routines } = useSelector((state) => state.routine.getRoutinesThunk);
  const [showRoutineForm, setShowRoutineForm] = useState(false);

  /* WIP: ADD ROUTINE FEATURE */
  const createRoutine = () => {
    setShowRoutineForm(true);
    console.log("Not Functional");
  };

  useEffect(() => {
    dispatch(fetchRoutines());
  }, [dispatch]);

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
