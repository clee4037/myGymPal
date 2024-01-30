import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRoutines } from "../../utils/getRoutines";
import { setRoutines } from "../../utils/slice/routineSlice";

const RoutineDropdown = ({ chooseRoutine }) => {
  const dispatch = useDispatch();
  const { routines } = useSelector((state) => state.routine);

  const fetchRoutines = async () => {
    const data = await getRoutines();
    dispatch(setRoutines(data));
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  return (
    routines && (
      <select
        className="workout-routine-dropdown select select-sm w-full max-w-xs mr-4"
        onChange={chooseRoutine}
      >
        <option value="Select an option">Select an option</option>
        {routines &&
          routines.map((routine) => (
            <option value={routine.name} key={routine._id}>
              {routine.name}
            </option>
          ))}
      </select>
    )
  );
};

export default RoutineDropdown;
