import React from "react";
import RoutineDropdownOptions from "./RoutineDropdownOptions";

const RoutineDropdown = ({ allRoutines, chooseRoutine }) => {
  return (
    allRoutines && (
      <select
        className="workout-routine-dropdown select select-sm w-full max-w-xs mr-4"
        onChange={chooseRoutine}
      >
        <RoutineDropdownOptions allRoutines={allRoutines} />
      </select>
    )
  );
};

export default RoutineDropdown;
