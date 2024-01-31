import React from "react";
import ListViewItem from "./ListViewItem";
import "../../stylesheets/workout_log.css";

const ListView = ({ workouts }) => {
  return (
    <div className="workout-log">
      {workouts &&
        workouts.map((workout) => (
          <ListViewItem workout={workout} key={workout._id} />
        ))}
    </div>
  );
};

export default ListView;
