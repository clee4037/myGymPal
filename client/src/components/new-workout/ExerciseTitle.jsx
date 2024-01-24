import React from "react";

const ExerciseTitle = ({ exerciseName }) => {
  return (
    <h3 className="card w-full bg-white text-xl text-font-bold border-2 border-gray-300 text-torq mb-1">
      {exerciseName}
    </h3>
  );
};

export default ExerciseTitle;
