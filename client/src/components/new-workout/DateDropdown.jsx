import React from "react";

const DateDropdown = ({ workoutData }) => {
  return (
    <label htmlFor="date-field" className="workout-date input w-full max-w-xs">
      <input
        type="date"
        value={workoutData.date || new Date().toISOString().split("T")[0]}
        onChange={(e) => (workoutData.date = e.target.value)}
      />
    </label>
  );
};

export default DateDropdown;
