import React from "react";
import ListViewItem from "./ListViewItem";
import { IoAddCircleOutline } from "react-icons/io5";
import "../stylesheets/workout_log.css";

const WorkoutLog = ({ workouts, updatePage }) => {
  return (
    workouts && (
      <>
        <div className="workout-log">
          {workouts &&
            workouts.map((workout) => (
              <ListViewItem workout={workout} key={workout._id} />
            ))}
        </div>
      </>
    )
  );
};

export default WorkoutLog;
