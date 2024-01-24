import React from "react";

const ExerciseTableCols = ({
  col,
  set,
  workoutTitle,
  exerciseData,
  updateState,
}) => {
  const labelData = {
    weight: {
      type: "number",
      placeholder: "Add Weight",
      htmlFor: "weight-field",
      className: "exercies-weight",
    },
    reps: {
      type: "number",
      placeholder: "Add Reps",
      htmlFor: "rep-field",
      className: "exercise-rep",
    },
    notes: {
      type: "text",
      placeholder: "Add Notes",
      htmlFor: "notes-field",
      className: "exercies-notes",
    },
  };

  return (
    <td className="border border-gray">
      <label
        placeholder={labelData[col].placeholder}
        htmlFor={labelData[col].htmlFor}
        className={labelData[col].className}
      >
        <input
          type={labelData[col].type}
          className="w-full"
          value={exerciseData?.[set - 1]?.[col]}
          onChange={(e) =>
            updateState(workoutTitle, exerciseData, set, col, e.target.value)
          }
        />
      </label>
    </td>
  );
};

export default ExerciseTableCols;
