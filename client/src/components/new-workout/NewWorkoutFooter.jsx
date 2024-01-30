import React from "react";
import { postWorkout } from "../../utils/postWorkout";
import { useSelector, useDispatch } from "react-redux";
import { addExercise } from "../../utils/slice/newWorkoutSlice";
import { useNavigate } from "react-router-dom";

const NewWorkoutFooter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { workoutData } = useSelector((state) => state.newWorkout);
  const sendWorkoutData = async () => {
    try {
      // CURRENTLY ALLOW NULL VALUES
      await postWorkout(workoutData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={() => dispatch(addExercise())}>Add Exercise |</button>{" "}
      <button onClick={sendWorkoutData}>Finish Workout</button>
    </>
  );
};

export default NewWorkoutFooter;
