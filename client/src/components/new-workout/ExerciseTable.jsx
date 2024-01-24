import React from "react";
import ExerciseTableCols from "./ExerciseTableCols";

const ExerciseTable = ({
  setData,
  exerciseData,
  name,
  addWorkoutData,
  updateExerciseData,
}) => {
  const updateState = (workoutName, currentState, set, column, value) => {
    if (!currentState[set - 1]) {
      currentState[set - 1] = {};
    }
    if (column === "notes") {
      currentState[set - 1].notes = value;
    } else {
      currentState[set - 1][column] = Number(value);
    }
    addWorkoutData(name, currentState);
    updateExerciseData(currentState);
  };
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
              updateState={updateState}
            />
            <ExerciseTableCols
              col={"reps"}
              set={set}
              workoutTitle={name}
              exerciseData={exerciseData}
              updateState={updateState}
            />
            <ExerciseTableCols
              col={"notes"}
              set={set}
              workoutTitle={name}
              exerciseData={exerciseData}
              updateState={updateState}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExerciseTable;
