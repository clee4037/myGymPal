import React, { useRef, useState, useEffect } from "react";

const Exercise = () => {
  const [sets, setSets] = useState(null);

  const newSet = (
    <tr key={sets ? sets.length + 1 : 1}>
      <th scope="row">{sets ? sets.length + 1 : 1}</th>
      <td>
        <label
          htmlFor="weight-field"
          className="exercies-weight"
          placeholder="Add Weight"
        >
          <input />
        </label>
      </td>
      <td>
        <label
          htmlFor="rep-field"
          className="exercise-rep"
          placeholder="Add Reps"
        >
          <input />
        </label>
      </td>
      <td>
        <label
          htmlFor="notes-field"
          className="exercies-notes"
          placeholder="Add Notes"
        >
          <input />
        </label>
      </td>
    </tr>
  );

  const addSet = () => {
    sets ? setSets([...sets, newSet]) : setSets([newSet]);
  };

  return (
    <>
      <div className="exercise-container">
        <label htmlFor="name-field" className="exercise-name">
          <input
            placeholder="Exercies"
            // value={TO-ADD}
            // onChange={(e) => set...(e.target.value)}
          />
        </label>
        <table className="exercise-table">
          <thead>
            <tr>
              <th scope="col">Set</th>
              <th scope="col">Weight</th>
              <th scope="col">Reps</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>{sets && sets}</tbody>
        </table>
        <button onClick={() => addSet()}>Add Set</button>
      </div>
    </>
  );
};

export default Exercise;
