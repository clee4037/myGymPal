import Exercise from "../new-workout-exercise/Exercise";

const NewWorkoutBody = ({ exercises }) => {
  return (
    exercises &&
    exercises.map(({ name, data }, exerciseIndex) => (
      <Exercise
        name={name}
        exerciseIndex={exerciseIndex}
        setCount={data.length}
        key={name + data.length}
      />
    ))
  );
};

export default NewWorkoutBody;
