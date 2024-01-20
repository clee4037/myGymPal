import React from "react";

const ExerciseTable = ({
  sets,
  setData,
  exerciseData,
  name,
  addWorkoutData,
  updateExerciseData,
}) => {
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
        {setData.map(({ set, weight, reps, notes }) => {
          return (
            <tr key={set}>
              <th scope="row">{set}</th>
              <td className="border border-gray">
                <label
                  placeholder="Add Weight"
                  htmlFor="weight-field"
                  className="exercies-weight "
                >
                  <input
                    type="number"
                    className="w-full"
                    value={
                      exerciseData[set - 1] &&
                      exerciseData[set - 1].weight &&
                      exerciseData[set - 1].weight
                    }
                    onChange={(e) => {
                      if (!exerciseData[set - 1]) {
                        exerciseData[set - 1] = {};
                      }
                      const updatedState = exerciseData;
                      updatedState[set - 1].weight = Number(e.target.value);
                      addWorkoutData(name, updatedState);
                      updateExerciseData(updatedState);
                    }}
                  />
                </label>
              </td>
              <td className="border border-gray">
                <label
                  htmlFor="rep-field"
                  className="exercise-rep"
                  placeholder="Add Reps"
                >
                  <input
                    type="number"
                    // className="w-full bg-bg"
                    className="w-full"
                    value={
                      exerciseData[set - 1] &&
                      exerciseData[set - 1].reps &&
                      exerciseData[set - 1].reps
                    }
                    onChange={(e) => {
                      if (!exerciseData[set - 1]) {
                        exerciseData[set - 1] = {};
                      }
                      const updatedState = exerciseData;
                      updatedState[set - 1].reps = Number(e.target.value);
                      addWorkoutData(name, updatedState);
                      updateExerciseData(updatedState);
                    }}
                  />
                </label>
              </td>
              <td className="border border-gray">
                <label
                  htmlFor="notes-field"
                  className="exercies-notes"
                  placeholder="Add Notes"
                >
                  <input
                    // className="w-full bg-bg"
                    className="w-full"
                    type="text"
                    value={
                      exerciseData[set - 1] &&
                      exerciseData[set - 1].notes &&
                      exerciseData[set - 1].notes
                    }
                    onChange={(e) => {
                      if (!exerciseData[set - 1]) {
                        exerciseData[set - 1] = {};
                      }
                      const updatedState = exerciseData;
                      updatedState[set - 1].notes = e.target.value;
                      addWorkoutData(name, updatedState);
                      updateExerciseData(updatedState);
                    }}
                  />
                </label>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExerciseTable;
