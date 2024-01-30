import React, { useState, useEffect } from "react";
import History from "./History";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseFooter from "./ExerciseFooter";
import ExerciseTable from "./ExerciseTable";
import { getWorkoutData } from "../../utils/getWorkoutData";

const Exercise = ({ name, setCount, exerciseIndex }) => {
  const [history, setHistory] = useState(null);
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

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
    getHistory();
  }, [setCount]);

  return (
    <div className="items-center card shadow-xl bg-white mb-5">
      <ExerciseHeader exerciseName={name} exerciseIndex={exerciseIndex} />
      <ExerciseTable exerciseIndex={exerciseIndex} name={name} />
      <ExerciseFooter viewHistory={viewHistory} exerciseIndex={exerciseIndex} />
      {isHistoryVisible && <History history={history[name]} />}
    </div>
  );
};

export default Exercise;
