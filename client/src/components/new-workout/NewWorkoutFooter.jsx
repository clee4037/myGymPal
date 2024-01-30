import React from "react";
import { postWorkout } from "../../utils/postWorkout";
import { useDispatch } from "react-redux";
import { addExercise } from "../../utils/slice/newWorkoutSlice";
import { useNavigate } from "react-router-dom";

const NewWorkoutFooter = ({ workoutData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    workoutData.exercises && (
      <>
        <button onClick={() => dispatch(addExercise())}>Add Exercise |</button>{" "}
        <button onClick={sendWorkoutData}>Finish Workout</button>
      </>
    )
  );
};

export default NewWorkoutFooter;
