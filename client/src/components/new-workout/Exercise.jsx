import React, { useState, useEffect } from "react";
import History from "./History";
import ExerciseDropdown from "../exercise-dropdown/ExerciseDropdown";
import Set from "./Set";
import ExerciseFooter from "./ExerciseFooter";
import ExerciseTable from "./ExerciseTable";
import { getWorkoutData } from "../../utils/getWorkoutData";

const Exercise = ({ name, setCount, addWorkoutData }) => {
  const [sets, setSets] = useState(null);
  const [history, setHistory] = useState(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseName, setExerciseName] = useState(null);

  const selectExercise = (exercise) => {
    setExerciseName(exercise);
  };

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
                exerciseData[setCount - 1] &&
                exerciseData[setCount - 1].weight &&
                exerciseData[setCount - 1].weight
              }
              onChange={(e) => {
                if (!exerciseData[setCount - 1]) {
                  exerciseData[setCount - 1] = {};
                }
                const updatedState = exerciseData;
                updatedState[setCount - 1].weight = Number(e.target.value);
                addWorkoutData(name, updatedState);
                setExerciseData(updatedState);
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
                exerciseData[setCount - 1] &&
                exerciseData[setCount - 1].reps &&
                exerciseData[setCount - 1].reps
              }
              onChange={(e) => {
                if (!exerciseData[setCount - 1]) {
                  exerciseData[setCount - 1] = {};
                }
                const updatedState = exerciseData;
                updatedState[setCount - 1].reps = Number(e.target.value);
                addWorkoutData(name, updatedState);
                setExerciseData(updatedState);
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
                exerciseData[setCount - 1] &&
                exerciseData[setCount - 1].notes &&
                exerciseData[setCount - 1].notes
              }
              onChange={(e) => {
                if (!exerciseData[setCount - 1]) {
                  exerciseData[setCount - 1] = {};
                }
                const updatedState = exerciseData;
                updatedState[setCount - 1].notes = e.target.value;
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
  const getHistory = async () => {
    try {
      const response = await getWorkoutData();
      const historyData = {};
      response.forEach((workout) => {
        workout.exercises.forEach(({ name, data }) => {
          const { date } = workout;
          historyData[name] = [...(historyData[name] || []), { date, data }];
        });
      });
      setHistory(historyData);
    } catch (err) {
      console.error(err);
    }
  };

  /* VIEW HISTORY */
  const viewHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  useEffect(() => {
    setCount ? addSet(setCount) : addSet(1);
    setExerciseName(name);
    getHistory();
  }, [setCount]);

  return (
    <div className="items-center card shadow-xl bg-white mb-5">
      <h3 className="card w-full bg-white text-xl text-font-bold border-2 border-gray-300 text-torq mb-1">
        {exerciseName}
      </h3>
      {/* NEED TO FIX: ADDING NEW EXERCISE TO ROUTINE DOESNT WORK
        - TITLE WONT APPEAR IN CORREC FORMAT
        - HISTORY ISNT DISPLAYED
       */}

      <ExerciseDropdown
        exerciseName={exerciseName}
        selectExercise={selectExercise}
      />
      <ExerciseTable sets={sets} />
      <div className="exercise-table-button-row p-3">
        <ExerciseFooter addSet={addSet} viewHistory={viewHistory} />
      </div>
      {isHistoryVisible && <History history={history[name]} />}
    </div>
  );
};

export default Exercise;
