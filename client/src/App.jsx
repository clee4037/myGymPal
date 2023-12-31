import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import NewWorkout from "./components/NewWorkout.jsx";
import WorkoutLog from "./components/WorkoutLog.jsx";
import "./App.css";
import Routines from "./components/Routines.jsx";

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
