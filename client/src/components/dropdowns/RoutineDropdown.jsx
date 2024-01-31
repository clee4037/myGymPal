import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoutines } from "../../utils/slice/routineSlice";
import { autofillRoutine } from "../../utils/slice/newWorkoutSlice";

const RoutineDropdown = () => {
  const dispatch = useDispatch();
  const { routines } = useSelector((state) => state.routine.getRoutinesThunk);

  const chooseRoutine = (e) => {
    const selectedRoutine = routines.find(
      (routine) => routine._id === e.target.value
    );
    dispatch(autofillRoutine(selectedRoutine));
  };

  useEffect(() => {
    dispatch(fetchRoutines());
  }, [dispatch]);

  return (
    <select
      className="workout-routine-dropdown select select-sm w-full max-w-xs mr-4"
      onChange={chooseRoutine}
    >
      <option value="Select an option">Select an option</option>
      {routines &&
        routines.map((routine) => (
          <option value={routine._id} key={routine._id}>
            {routine.name}
          </option>
        ))}
    </select>
  );
};

export default RoutineDropdown;
