import React from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const WorkoutLog = ({ workouts }) => {
  /* HARD CODING WORKOUT DURATION TO 1 HOUR */
  const myEventsList = workouts.map((workout) => {
    const start = new Date(workout.date);
    const end = start.setHours(start.getHours() + 1);
    return {
      title: workout.routine,
      start,
      end,
    };
  });

  return (
    <div className="pl-8 pr-8">
      <Calendar
        localizer={localizer}
        events={myEventsList && myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800 }}
      />
    </div>
  );
};

export default WorkoutLog;
