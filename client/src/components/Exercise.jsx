import React, { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";
import historyData from "./sampleData";
const Exercise = ({ name, setCount, addWorkoutData }) => {
  const [exerciseName, setExerciseName] = useState(null);
  const [sets, setSets] = useState(null);
  const [history, setHistory] = useState(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [exerciseData, setExerciseData] = useState([]);

  const [allExercises, setAllExercises] = useState(null);

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
                exerciseData[setCount - 1] &&
                exerciseData[setCount - 1].weight &&
                exerciseData[setCount - 1].weight
              }
              onChange={(e) => {
                if (!exerciseData[setCount - 1]) {
                  exerciseData[setCount - 1] = {};
                }
                // updatedState[setCount].weight = Number(e.target.value);
                const updatedState = exerciseData;
                updatedState[setCount - 1].weight = Number(e.target.value);
                console.log("updatedState", updatedState);
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
                exerciseData[setCount - 1] &&
                exerciseData[setCount - 1].reps &&
                exerciseData[setCount - 1].reps
              }
              onChange={(e) => {
                if (!exerciseData[setCount - 1]) {
                  exerciseData[setCount - 1] = {};
                }
                // updatedState[setCount].weight = Number(e.target.value);
                const updatedState = exerciseData;
                updatedState[setCount - 1].reps = Number(e.target.value);
                console.log("updatedState", updatedState);
                addWorkoutData(name, updatedState);
                setExerciseData(updatedState);
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
                exerciseData[setCount - 1] &&
                exerciseData[setCount - 1].notes &&
                exerciseData[setCount - 1].notes
              }
              onChange={(e) => {
                if (!exerciseData[setCount - 1]) {
                  exerciseData[setCount - 1] = {};
                }
                // updatedState[setCount].weight = Number(e.target.value);
                const updatedState = exerciseData;
                updatedState[setCount - 1].notes = e.target.value;
                console.log("updatedState", updatedState);
                addWorkoutData(name, updatedState);
                setExerciseData(updatedState);
              }}
            />
          </label>
        </td>
      </tr>
    );
  };

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

  /* GET HISTORY */
  const reformattedData = {};
  let historyList;
  const getHistory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/workout");
      // console.log("response.data", response.data);
      response.data.forEach((workout) => {
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
      console.log("reformattedData", reformattedData);

      setHistory(reformattedData);
    } catch (err) {
      console.error(err);
    }
  };

  /* VIEW HISTORY */
  const viewHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  /* EXERCISE LIST */
  const getExerciseList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/exercise");
      setAllExercises(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  const exerciseList =
    allExercises &&
    allExercises.map((exerciseGroup) => (
      <optgroup label={exerciseGroup.type} key={exerciseGroup._id}>
        {exerciseGroup.exercises.map((exercise) => (
          <option value={exercise} key={exercise._id}>
            {exercise.name}
          </option>
        ))}
      </optgroup>
    ));

  useEffect(() => {
    setCount ? addSet(setCount) : addSet(1);
    getExerciseList();
    setExerciseName(name);
    getHistory();
  }, [setCount]);

  return (
    <>
      <div className="exercise-container">
        <h3>{exerciseName}</h3>
        {/* NOT DEFAULTING TO EXERCISE NAME :( */}
        {!exerciseName && (
          <select
            className="exercise-dropdown"
            value={exerciseName}
            onChange={(e) => {
              setExerciseName(e.target.text);
            }}
          >
            <option value="Select an option">Select an option</option>
            {exerciseList}
          </select>
        )}

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

        {isHistoryVisible && history && <History history={history[name]} />}
        {isHistoryVisible && !history[name] && (
          <p>No history for this exercise</p>
        )}
      </div>
    </>
  );
};

export default Exercise;
