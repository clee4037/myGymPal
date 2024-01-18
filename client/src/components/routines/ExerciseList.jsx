import React from "react";

const ExerciseList = ({ allExercises }) => {
  return (
    allExercises &&
    allExercises.map((exerciseGroup) => (
      <optgroup label={exerciseGroup.type} key={exerciseGroup._id}>
        {exerciseGroup.exercises.map((exercise) => (
          <option value={exercise} key={exercise._id}>
            {exercise.name}
          </option>
        ))}
      </optgroup>
    ))
  );
};

export default ExerciseList;
