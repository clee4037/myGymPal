import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";
// import WorkoutLog from "./containers/WorkoutLog.jsx";
// import NewWorkout from "./containers/NewWorkout.jsx";
// import "./App.css";
// import Routines from "./components/routines/Routines.jsx";

function App() {
  const [page, setPage] = useState("log");
  const updatePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <NavBar className="mb-10" currentPage={page} updatePage={updatePage} />
      <Outlet />
    </div>
  );
}

export default App;
