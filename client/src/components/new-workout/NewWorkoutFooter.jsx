import React from "react";
import { addExercise, sendWorkout } from "../../utils/slice/newWorkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewWorkoutFooter = ({ workoutData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sendWorkoutThunk } = useSelector((state) => state.newWorkout);

  const handleWorkoutPost = async () => {
    await dispatch(sendWorkout());
    if (sendWorkoutThunk.isLoading) {
      console.log("Loading...");
    } else if (sendWorkoutThunk.error) {
      console.error(sendWorkoutThunk.error);
    } else {
      navigate("/");
    }
  };

  return (
    workoutData.exercises && (
      <>
        <button onClick={() => dispatch(addExercise())}>Add Exercise |</button>{" "}
        <button onClick={handleWorkoutPost}>Finish Workout</button>
      </>
    )
  );
};

export default NewWorkoutFooter;
