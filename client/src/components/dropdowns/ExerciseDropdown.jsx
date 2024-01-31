import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchExercises } from "../../utils/slice/routineSlice";
import { updateExercise } from "../../utils/slice/newWorkoutSlice";

const ExerciseDropdown = ({ exerciseName, exerciseIndex }) => {
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state.routine.getExercisesThunk);

  const selectExercise = (e) => {
    updateExercise({ exerciseIndex, name: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <select className="exercise-dropdown" onChange={selectExercise}>
      <option value="Select an option">Select an option</option>
      {exercises &&
        exercises.map((exerciseGroup) => (
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
