import React from "react";
import "../../stylesheets/workout_log.css";

const ListViewItemStats = ({ date, totalSets, maxWeight, totalVolume }) => {
  return (
    <div className="stats stats-vertical shadow text-sm bg-white border-2 border-gray-300 w-1/3">
      <div className="stat text-center p-0">
        <div className="stat-value text-sm text-t3">{date}</div>
      </div>
      <div className="stat p-0">
        <div className="stat-title text-torq">Total Sets</div>
        <div className="stat-value text-sm text-t3">{totalSets}</div>
      </div>
      <div className="stat p-0">
        <div className="stat-title text-torq">Max Weight</div>
        <div className="stat-value text-sm text-t3">{maxWeight}lbs</div>
      </div>
      <div className="stat p-0">
        <div className="stat-title text-torq">Total Volume</div>
        <div className="stat-value text-sm text-t3">{totalVolume}lbs</div>
      </div>
    </div>
  );
};

export default ListViewItemStats;
