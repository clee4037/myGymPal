import React from "react";
import "../stylesheets/workout_log.css";

const RoutineItem = ({ data }) => {
  return (
    <div className="workout-item-container card shadow-xl bg-white">
      <h3 className="card bg-white text-xl text-font-bold border-2 border-gray-300 text-torq">
        {data.name}
      </h3>
      <div className="pb-2">
        {data.data.map((exercise) => (
          <div className="italic" key={data._id + exercise.exercise}>
            {exercise.sets}x {exercise.exercise}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutineItem;
