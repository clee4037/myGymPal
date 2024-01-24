import React, { useState, useEffect } from "react";
import History from "./History";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseFooter from "./ExerciseFooter";
import ExerciseTable from "./ExerciseTable";
import { getWorkoutData } from "../../utils/getWorkoutData";

const Exercise = ({ name, setCount, addWorkoutData }) => {
  const [setData, setSetData] = useState([]);
  const [history, setHistory] = useState(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseName, setExerciseName] = useState(null);
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

  const updateExerciseData = (updatedState) => {
    setExerciseData(updatedState);
  };

  const addSet = (count = 1) => {
    const addedSets = [];
    for (let i = 0; i < count; i++) {
      addedSets.push({
        set: setData.length + i + 1,
        weight: null,
        reps: null,
        notes: null,
      });
    }
    setSetData([...setData, ...addedSets]);
  };

  useEffect(() => {
    addSet(setCount || 1);
    setExerciseName(name);
    getHistory();
  }, [setCount]);

  const selectExercise = (e) => {
    setExerciseName(e.target.value);
  };

  return (
    <div className="items-center card shadow-xl bg-white mb-5">
      <ExerciseHeader
        exerciseName={exerciseName}
        selectExercise={selectExercise}
      />
      <ExerciseTable
        setData={setData}
        exerciseData={exerciseData}
        name={name}
        addWorkoutData={addWorkoutData}
        updateExerciseData={updateExerciseData}
      />
      <ExerciseFooter addSet={addSet} viewHistory={viewHistory} />
      {isHistoryVisible && <History history={history[name]} />}
    </div>
  );
};

export default Exercise;
