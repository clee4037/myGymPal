import React, { useState, useEffect } from "react";
import { getExerciseList } from "../../utils/getExerciseList";
import ExerciseDropdownItem from "./ExerciseDropdownItem";

const ExerciseDropdown = ({ exerciseName, selectExercise }) => {
  const [allExercises, setAllExercises] = useState(null);

  const fetchExerciseList = async () => {
    const data = await getExerciseList();
    setAllExercises(data);
  };

  useEffect(() => {
    fetchExerciseList();
  }, []);

  return (
    <select
      className="exercise-dropdown"
      value={exerciseName}
      onChange={(e) => {
        selectExercise(e.target.text);
      }}
    >
      <option value="Select an option">Select an option</option>
      <ExerciseDropdownItem allExercises={allExercises} />
    </select>
  );
};

export default ExerciseDropdown;
