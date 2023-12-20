import React, { useState, useEffect } from "react";
import data from "./exerciseData";
const Exercise = ({ name, setCount }) => {
  const [sets, setSets] = useState(null);

  const newSet = (count) => {
    let setCount;
    if (count) {
      setCount = count + 1;
    } else if (sets) {
      console.log(sets.length);
      setCount = sets.length + 1;
    } else {
      setCount = 1;
    }
    return (
      <tr key={setCount}>
        <th scope="row">{setCount}</th>
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
  };

  useEffect(() => (setCount ? addSet(setCount) : addSet(1)), [data, setCount]);

  const addSet = (count) => {
    const addedSets = [];
    if (count) {
      for (let i = 0; i < count; i++) {
        addedSets.push(newSet(i));
      }
    } else {
      addedSets.push(newSet());
    }
    sets ? setSets([...sets, addedSets]) : setSets(addedSets);
  };

  /* EXERCISE LIST */
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
        <select className="exercise-dropdown" value={name}>
          {exerciseList}
        </select>
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
            <button className="exercise-table-add-btn" onClick={() => addSet()}>
              Add Set
            </button>
            <button className="exercise-table-his-btn">Historical</button>
            <button className="exercise-table-graph-btn">Graph</button>
          </div>
        </table>
      </div>
    </>
  );
};

export default Exercise;
