import React from "react";
import "../../stylesheets/workout_log.css";
import { aggregateData } from "../../utils/aggregateData";
import { convertDateMMDDYYY } from "../../utils/convertDateMMDDYYY";

const ListViewItem = ({ workout }) => {
  const stats = aggregateData(workout);

  /* DELETE LATER OR FUZZY MATCH */
  const emoji = {
    1: "🥇",
    "Nat's Chad Chest Day": "💪🏼",
    "Uncle J's Back Day": "🔙",
    "Kevin's Leg Day": "🦵🏼",
  };

  return (
    <div className="workout-item-container card card-side shadow-xl bg-white">
      <div className="stats stats-vertical shadow text-sm bg-white border-2 border-gray-300 w-1/3">
        <div className="stat text-center p-0">
          <div className="stat-value text-sm text-t3">
            {convertDateMMDDYYY(workout.date)}
          </div>
        </div>
        <div className="stat p-0">
          <div className="stat-title text-torq">Total Sets</div>
          <div className="stat-value text-sm text-t3">{stats.totalSets}</div>
        </div>
        <div className="stat p-0">
          <div className="stat-title text-torq">Max Weight</div>
          <div className="stat-value text-sm text-t3">
            {stats.maxWeight.toLocaleString()}lbs
          </div>
        </div>
        <div className="stat p-0">
          <div className="stat-title text-torq">Total Volume</div>
          <div className="stat-value text-sm text-t3">
            {stats.totalVolume.toLocaleString()}lbs
          </div>
        </div>
      </div>
      <div className="justify-start pt-2 pl-4">
        <h3 className="justify-start font-bold text-torq">
          {workout.routine} {emoji[workout.routine] || emoji[1]}
        </h3>
        <div className="justify-start pt-1 pl-4">
          {workout.exercises.map((exercise) => (
            <div className="exercise-item" key={exercise.name}>
              <div className="exercise-sets italic">
                {exercise.data.length}x {exercise.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListViewItem;
