import React from "react";

const DateDropdown = ({ workoutData }) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <label htmlFor="date-field" className="workout-date input w-full max-w-xs">
      <input
        type="date"
        value={workoutData.date || today}
        onChange={(e) => (workoutData.date = e.target.value)}
      />
    </label>
  );
};

export default DateDropdown;
