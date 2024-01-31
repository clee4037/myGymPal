import React from "react";
import "../../stylesheets/workout_log.css";

const ListViewItemBody = ({ workout }) => {
  /* DELETE LATER OR FUZZY MATCH */
  const emoji = {
    1: "🥇",
    "Nat's Chad Chest Day": "💪🏼",
    "Uncle J's Back Day": "🔙",
    "Kevin's Leg Day": "🦵🏼",
  };
  return (
    <div className="justify-start pt-2 pl-4">
      <h3 className="justify-start font-bold text-torq">
        {workout.routine} {emoji[workout.routine] || emoji[1]}
      </h3>
      <div className="justify-start pt-1 pl-4">
        {workout.exercises.map((exercise) => (
          <div className="exercise-item" key={exercise._id}>
            <div className="exercise-sets italic">
              {exercise.data.length}x {exercise.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListViewItemBody;
