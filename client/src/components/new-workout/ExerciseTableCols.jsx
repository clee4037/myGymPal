import React from "react";
import { updateWorkoutData } from "../../utils/slice/newWorkoutSlice";
import { useDispatch } from "react-redux";

const ExerciseTableCols = ({
  col,
  set,
  workoutTitle,
  exerciseData,
  exerciseIndex,
}) => {
  const dispatch = useDispatch();
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
            dispatch(
              updateWorkoutData({
                exerciseIndex,
                setIndex: set - 1,
                col,
                newData: e.target.value,
              })
            )
          }
        />
      </label>
    </td>
  );
};

export default ExerciseTableCols;
