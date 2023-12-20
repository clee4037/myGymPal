import React, { useState, useEffect } from "react";
import data from "./exerciseData";
const Exercise = () => {
  const [sets, setSets] = useState(null);

  const newSet = (
    <tr key={sets ? sets.length + 1 : 1}>
      <th scope="row">{sets ? sets.length + 1 : 1}</th>
      <td>
        <label
          placeholder="Add Weight"
          htmlFor="weight-field"
          className="exercies-weight"
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
  useEffect(() => addSet(), [data]);
  const addSet = () => {
    sets ? setSets([...sets, newSet]) : setSets([newSet]);
  };

  /*
<select id="myDropdown">
  <optgroup label="Section 1">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </optgroup>
  <optgroup label="Section 2">
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
  </optgroup>
</select>
*/

  const exerciseList = data.map((exerciseGroup) => (
    <optgroup label={exerciseGroup.type}>
      {exerciseGroup.exercises.map((exercise) => (
        <option value={exercise}>{exercise}</option>
      ))}
    </optgroup>
  ));

  return (
    <>
      <div className="exercise-container">
        {/* <label htmlFor="name-field" className="exercise-name">
          <input
            placeholder="Exercies"
            // value={TO-ADD}
            // onChange={(e) => set...(e.target.value)}
          />
        </label> */}
        <select className="exercise-dropdown">{exerciseList}</select>
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
          <div className="exercise-table-button-row">
            <button onClick={() => addSet()}>Add Set</button>
            <button>Historical</button>
            <button>Graph</button>
          </div>
        </table>
      </div>
    </>
  );
};

export default Exercise;
