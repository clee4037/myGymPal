import React from "react";
import { useDispatch } from "react-redux";
import { addSet } from "../../utils/slice/newWorkoutSlice";

const ExerciseFooter = ({ viewHistory, exerciseIndex }) => {
  const dispatch = useDispatch();
  return (
    <div className="exercise-table-button-row p-3">
      <button
        className="exercise-table-add-btn pr-1"
        onClick={() => dispatch(addSet(exerciseIndex))}
      >
        Add Set |
      </button>
      <button
        className="exercise-table-his-btn pr-1"
        onClick={() => viewHistory()}
      >
        History |
      </button>
      <button className="exercise-table-graph-btn">Graph</button>
    </div>
  );
};

export default ExerciseFooter;
