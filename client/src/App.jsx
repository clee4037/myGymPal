import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import NewWorkout from "./components/NewWorkout.jsx";
import WorkoutLog from "./components/WorkoutLog.jsx";
import "./App.css";
// import History from "./components/History.jsx";
import Routines from "./components/Routines.jsx";

function App() {
  const [page, setPage] = useState("log");
  const updatePage = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="App">
      <NavBar currentPage={page} updatePage={updatePage} />
      {page === "routine" && <Routines />}
      {page === "workout" && <NewWorkout updatePage={updatePage} />}
      {page === "log" && <WorkoutLog updatePage={updatePage} />}
    </div>
  );
}

export default App;
