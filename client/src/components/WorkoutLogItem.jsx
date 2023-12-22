import React, { useEffect } from "react";

const WorkoutLogItem = ({ workout }) => {
  const convertDate = () => {
    const date = new Date(workout.date);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  let totalVolume = 0;
  let totalSets = 0;
  let maxWeight = 0;

  const aggregateData = () => {
    workout.exercises.forEach((exercise) => {
      exercise.data.forEach((set) => {
        totalVolume += set.weight * set.reps;
        totalSets++;
        maxWeight = Math.max(maxWeight, set.weight);
      });
    });
  };
  aggregateData();

  return (
    <div className="workout-item-container card card-side shadow-xl bg-white">
      <div className="stats stats-vertical shadow text-sm bg-white border-2 border-gray-300 w-1/3">
        <div className="stat text-center p-0">
          <div className="stat-value text-sm text-t3">{convertDate()}</div>
        </div>
        <div className="stat p-0">
          <div className="stat-title text-torq">Total Sets</div>
          <div className="stat-value text-sm text-t3">{totalSets}</div>
        </div>
        <div className="stat p-0">
          <div className="stat-title text-torq">Max Weight</div>
          <div className="stat-value text-sm text-t3">
            {maxWeight.toLocaleString()}lbs
          </div>
        </div>
        <div className="stat p-0">
          <div className="stat-title text-torq">Total Volume</div>
          <div className="stat-value text-sm text-t3">
            {totalVolume.toLocaleString()}lbs
          </div>
        </div>
      </div>
      <div className="justify-start pl-4">
        <h3 className="justify-start font-bold">{workout.routine}</h3>
        <div className="justify-start pl-4">
          {workout.exercises.map((exercise) => (
            <div className="exercise-item" key={exercise.name}>
              <div className="exercise-sets">
                {exercise.data.length}x {exercise.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutLogItem;
