import React from "react";

const RoutineDropdownOptions = ({ allRoutines }) => {
  return (
    <>
      <option value="Select an option">Select an option</option>
      {allRoutines.map((routine) => (
        <option value={routine.name} key={routine._id}>
          {routine.name}
        </option>
      ))}
    </>
  );
};

export default RoutineDropdownOptions;
