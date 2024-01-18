import React from "react";
import "../../stylesheets/workout_log.css";
import ListViewItemStats from "./ListViewItemStats";
import ListViewItemBody from "./ListViewItemBody";
import { aggregateData } from "../../utils/aggregateData";
import { convertDateMMDDYYY } from "../../utils/convertDateMMDDYYY";

const ListViewItem = ({ workout }) => {
  const stats = aggregateData(workout);

  return (
    <div className="workout-item-container card card-side shadow-xl bg-white">
      <ListViewItemStats
        date={convertDateMMDDYYY(workout.date)}
        totalSets={stats.totalSets}
        maxWeight={stats.maxWeight.toLocaleString()}
        totalVolume={stats.totalVolume.toLocaleString()}
      />
      <ListViewItemBody workout={workout} />
    </div>
  );
};

export default ListViewItem;
