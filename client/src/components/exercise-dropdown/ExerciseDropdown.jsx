import React, { useEffect } from "react";
import { getExercises } from "../../utils/getExercises";
import { useSelector, useDispatch } from "react-redux";
import { setExercises } from "../../utils/slice/routineSlice";
import { updateExercise } from "../../utils/slice/newWorkoutSlice";

const ExerciseDropdown = ({ exerciseName, exerciseIndex }) => {
  const dispatch = useDispatch();
  const exerciseList = useSelector((state) => state.routine.exercises);

  const selectExercise = (e) => {
    updateExercise({ exerciseIndex, name: e.target.value });
  };

  const fetchExercises = async () => {
    const data = await getExercises();
    dispatch(setExercises(data));
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <select className="exercise-dropdown" onChange={selectExercise}>
      <option value="Select an option">Select an option</option>
      {exerciseList &&
        exerciseList.map((exerciseGroup) => (
          <optgroup label={exerciseGroup.type} key={exerciseGroup._id}>
            {exerciseGroup.exercises.map((exercise) => (
              <option value={exercise.name} key={exercise._id}>
                {exercise.name}
              </option>
            ))}
          </optgroup>
        ))}
    </select>
  );
};

export default ExerciseDropdown;
