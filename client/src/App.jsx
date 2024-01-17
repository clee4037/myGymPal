import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";
import NewWorkout from "./components/new-workout/NewWorkout.jsx";
import WorkoutLog from "./components/workout-log/WorkoutLog.jsx";
import "./App.css";
import Routines from "./components/routines/Routines.jsx";

function App() {
  const [page, setPage] = useState("log");
  const updatePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="App">
      <NavBar className="mb-10" currentPage={page} updatePage={updatePage} />
      {page === "log" && <WorkoutLog updatePage={updatePage} />}
      {page === "routine" && <Routines />}
      {page === "workout" && <NewWorkout updatePage={updatePage} />}
    </div>
  );
}

export default App;
