import React from "react";

const ExerciseFooter = ({ addSet, viewHistory }) => {
  return (
    <div className="exercise-table-button-row p-3">
      <button className="exercise-table-add-btn pr-1" onClick={() => addSet()}>
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
