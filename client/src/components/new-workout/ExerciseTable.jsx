import React from "react";
import ExerciseTableCols from "./ExerciseTableCols";

const ExerciseTable = ({ setData, exerciseData, name, exerciseIndex }) => {
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
        {setData.map(({ set, weight, reps, notes }) => (
          <tr key={set}>
            <th scope="row">{set}</th>
            <ExerciseTableCols
              col={"weight"}
              set={set}
              workoutTitle={name}
              exerciseData={exerciseData}
              exerciseIndex={exerciseIndex}
            />
            <ExerciseTableCols
              col={"reps"}
              set={set}
              workoutTitle={name}
              exerciseData={exerciseData}
              exerciseIndex={exerciseIndex}
            />
            <ExerciseTableCols
              col={"notes"}
              set={set}
              workoutTitle={name}
              exerciseData={exerciseData}
              exerciseIndex={exerciseIndex}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExerciseTable;
