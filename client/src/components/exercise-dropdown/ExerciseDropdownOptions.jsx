import React from "react";

const ExerciseDropdownOptions = ({ allExercises }) => {
  return (
    <>
      <option value="Select an option">Select an option</option>
      {allExercises.map((exerciseGroup) => (
        <optgroup label={exerciseGroup.type} key={exerciseGroup._id}>
          {exerciseGroup.exercises.map((exercise) => (
            <option value={exercise.name} key={exercise._id}>
              {exercise.name}
            </option>
          ))}
        </optgroup>
      ))}
    </>
  );
};

export default ExerciseDropdownOptions;
