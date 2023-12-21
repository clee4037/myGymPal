import React from "react";

const WorkoutLogItem = ({ workout }) => {
  const convertDate = () => {
    const date = new Date(workout.date);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  return (
    <div className="workout-item-container">
      <p className="workout-item-date">{convertDate()}</p>
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
