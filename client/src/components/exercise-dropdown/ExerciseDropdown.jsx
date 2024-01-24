import React, { useState, useEffect } from "react";
import { getExerciseList } from "../../utils/getExerciseList";
import ExerciseDropdownOptions from "./ExerciseDropdownOptions";

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
    allExercises && (
      <select className="exercise-dropdown" onChange={selectExercise}>
        <ExerciseDropdownOptions allExercises={allExercises} />
      </select>
    )
  );
};

export default ExerciseDropdown;
