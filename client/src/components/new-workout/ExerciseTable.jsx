import React from "react";

const ExerciseTable = ({ sets }) => {
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
      <tbody>{sets}</tbody>
    </table>
  );
};

export default ExerciseTable;
