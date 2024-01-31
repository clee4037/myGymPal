import React, { useState, useEffect } from "react";
import History from "./History";
import ExerciseHeader from "./ExerciseHeader";
import ExerciseFooter from "./ExerciseFooter";
import ExerciseTable from "./ExerciseTable";
import { fetchWorkouts } from "../../utils/slice/logSlice";
import { useDispatch, useSelector } from "react-redux";

const Exercise = ({ name, setCount, exerciseIndex }) => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const { history } = useSelector((state) => state.log.getWorkoutThunk);
  const dispatch = useDispatch();

  /* VIEW HISTORY */
  const viewHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  useEffect(() => {
    if (history === {}) {
      dispatch(fetchWorkouts());
    }
  }, [dispatch, history]);

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
