import React, { useEffect } from "react";
import { getExerciseList } from "../../utils/getExerciseList";
import { useSelector, useDispatch } from "react-redux";
import { setExercises } from "../../utils/slice/routineSlice";

const ExerciseDropdown = ({ exerciseName, selectExercise }) => {
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state.routine);

  const fetchExerciseList = async () => {
    const data = await getExerciseList();
    dispatch(setExercises(data));
  };

  useEffect(() => {
    fetchExerciseList();
  }, []);

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
