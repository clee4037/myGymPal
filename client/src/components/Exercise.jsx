import React, { useState, useEffect } from "react";
import History from "./History";
import data from "./exerciseData";
import historyData from "./sampleData";
const Exercise = ({ name, setCount, addWorkoutData }) => {
  const [sets, setSets] = useState(null);
  const [history, setHistory] = useState(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [exerciseData, setExerciseData] = useState({});
  const newSet = (count) => {
    let setCount;
    if (count) {
      setCount = count + 1;
    } else if (sets) {
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
            <input
              type="number"
              value={
                exerciseData[setCount] &&
                exerciseData[setCount].weight &&
                exerciseData[setCount].weight
              }
              onChange={(e) => {
                if (!exerciseData[setCount]) {
                  exerciseData[setCount] = {};
                }
                // updatedState[setCount].weight = Number(e.target.value);
                const updatedState = exerciseData;
                updatedState[setCount].weight = Number(e.target.value);
                addWorkoutData(name, updatedState);
                setExerciseData(updatedState);
              }}
            />
          </label>
        </td>
        <td>
          <label
            htmlFor="rep-field"
            className="exercise-rep"
            placeholder="Add Reps"
          >
            <input
              type="number"
              value={
                exerciseData[setCount] &&
                exerciseData[setCount].reps &&
                exerciseData[setCount].reps
              }
              onChange={(e) => {
                if (!exerciseData[setCount]) {
                  exerciseData[setCount] = {};
                }
                const updatedState = exerciseData;
                updatedState[setCount].reps = Number(e.target.value);
                setExerciseData(updatedState);
                // addWorkoutData(name, updatedState);
              }}
            />
          </label>
        </td>
        <td>
          <label
            htmlFor="notes-field"
            className="exercies-notes"
            placeholder="Add Notes"
          >
            <input
              type="text"
              value={
                exerciseData[setCount] &&
                exerciseData[setCount].notes &&
                exerciseData[setCount].notes
              }
              onChange={(e) => {
                if (!exerciseData[setCount]) {
                  exerciseData[setCount] = {};
                }
                const updatedState = exerciseData;
                updatedState[setCount].notes = e.target.value;
                setExerciseData(updatedState);
                // addWorkoutData(name, updatedState);
              }}
            />
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

  /* REFORMAT DATA -- ORDER BY EXERCISE | WILL MOVE TO PARENT SO TRANSFORMATION ONLY DONE ONCE */
  const reformattedData = {};
  historyData.forEach((workout) => {
    workout.exercises.forEach((exercise) => {
      if (!reformattedData[exercise.name]) {
        reformattedData[exercise.name] = [
          { date: workout.date, data: exercise.data },
        ];
      } else {
        reformattedData[exercise.name].push({
          date: workout.date,
          data: exercise.data,
        });
      }
    });
  });

  /* VIEW HISTORY */
  const viewHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  const historyList =
    history && history.map((workout) => <History data={history} />);

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
        <select
          className="exercise-dropdown"
          value={name}
          onChange={(e) => (name = e.target.value)}
        >
          <option value="Select an option">Select an option</option>
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
            <button
              className="exercise-table-his-btn"
              onClick={() => viewHistory()}
            >
              History
            </button>
            <button className="exercise-table-graph-btn">Graph</button>
          </div>
        </table>
        {isHistoryVisible && <History history={reformattedData[name]} />}
        {isHistoryVisible && !reformattedData[name] && (
          <p>No history for this exercise</p>
        )}
      </div>
    </>
  );
};

export default Exercise;
