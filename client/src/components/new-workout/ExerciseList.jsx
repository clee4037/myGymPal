import Exercise from "./Exercise";

const ExerciseList = ({ exercises }) => {
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

export default ExerciseList;
