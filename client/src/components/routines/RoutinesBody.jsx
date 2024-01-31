import React, { useEffect } from "react";
import RoutinesCard from "./RoutinesCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoutines } from "../../utils/slice/routineSlice";

const RoutinesBody = () => {
  const dispatch = useDispatch();
  const { routines } = useSelector((state) => state.routine.getRoutinesThunk);

  useEffect(() => {
    dispatch(fetchRoutines());
  }, [dispatch]);

  return (
    <div className="workout-log">
      {routines.map((routine) => (
        <RoutinesCard data={routine} key={routine._id} />
      ))}
    </div>
  );
};

export default RoutinesBody;
