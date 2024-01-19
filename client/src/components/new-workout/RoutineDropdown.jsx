import React from "react";

const NewWorkout = ({ allRoutines, chooseRoutine }) => {
  return (
    <select
      className="workout-routine-dropdown select select-sm w-full max-w-xs mr-4"
      onChange={chooseRoutine}
    >
      <option value="">Select an option</option>
      {allRoutines &&
        allRoutines.map((routine) => (
          <option value={routine.name} key={routine._id}>
            {routine.name}
          </option>
        ))}
    </select>
  );
};

export default NewWorkout;
