import React, { useRef, useState, useEffect } from "react";

const WorkoutLogItem = ({ workout }) => {
  return (
    <div className="workout-item-container">
      <p className="workout-item-date">{workout.date}</p>
      <div>
        <h3 className="workout-item-routine">{workout.routine}</h3>
        {workout.exercises.map((exercise) => (
          <div className="exercise-item" key={exercise.name}>
            <div className="exercise-sets">{exercise.data.length}x</div>
            <div className="exercise-name">{exercise.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutLogItem;
