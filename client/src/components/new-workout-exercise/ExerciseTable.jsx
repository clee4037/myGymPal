import React from "react";
import ExerciseTableCols from "./ExerciseTableCols";
import { useSelector } from "react-redux";

const ExerciseTable = ({ name, exerciseIndex }) => {
  const { data } = useSelector(
    (state) => state.newWorkout.workoutData.exercises[exerciseIndex]
  );
  return (
    <table className="exercise-table w-[95%]">
      <thead>
        <tr>
          <th scope="col">Set</th>
          <th scope="col">Weight</th>
          <th scope="col">Reps</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ weight, reps, notes }, set) => (
          <tr key={set}>
            <th scope="row">{set + 1}</th>
            <ExerciseTableCols
              col={"weight"}
              set={set}
              workoutTitle={name}
              exerciseData={weight}
              exerciseIndex={exerciseIndex}
            />
            <ExerciseTableCols
              col={"reps"}
              set={set}
              workoutTitle={name}
              exerciseData={reps}
              exerciseIndex={exerciseIndex}
            />
            <ExerciseTableCols
              col={"notes"}
              set={set}
              workoutTitle={name}
              exerciseData={notes}
              exerciseIndex={exerciseIndex}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExerciseTable;
