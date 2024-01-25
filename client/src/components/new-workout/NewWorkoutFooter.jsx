import React from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../utils/slice/newWorkoutSlice";

const NewWorkoutFooter = ({ sendWorkoutData }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addExercise())}>Add Exercise |</button>{" "}
      <button onClick={sendWorkoutData}>Finish Workout</button>
    </>
  );
};

export default NewWorkoutFooter;
