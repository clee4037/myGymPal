import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const WorkoutLog = ({ workouts }) => {
  /* REFACTOR LATER - DECIDE WHETHER OR NOT TO ADD START END TIME */
  /* HARD CODING WORKOUT DURATION TO 1 HOUR */
  const localizer = momentLocalizer(moment);
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
