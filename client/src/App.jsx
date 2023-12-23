import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import NewWorkout from "./components/NewWorkout.jsx";
import WorkoutLog from "./components/WorkoutLog.jsx";
import "./App.css";
import Routines from "./components/Routines.jsx";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function App() {
  const [page, setPage] = useState("log");
  const updatePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="App">
      <NavBar className="mb-10" currentPage={page} updatePage={updatePage} />
      <div>
        <Calendar
          localizer={localizer}
          // events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
      {page === "routine" && <Routines />}
      {page === "workout" && <NewWorkout updatePage={updatePage} />}
      {page === "log" && <WorkoutLog updatePage={updatePage} />}
    </div>
  );
}

export default App;
