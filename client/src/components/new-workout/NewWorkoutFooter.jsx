import React from "react";

const NewWorkoutFooter = ({ addExercise, sendWorkoutData }) => {
  return (
    <>
      <button onClick={addExercise}>Add Exercise |</button>{" "}
      <button onClick={sendWorkoutData}>Finish Workout</button>
    </>
  );
};

export default NewWorkoutFooter;
