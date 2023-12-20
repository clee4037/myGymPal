import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import Workout from "./components/Workout.jsx";
import Home from "./components/Home.jsx";
// import History from "./components/History.jsx";
import Routines from "./components/Routines.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routines />
      <Workout />
      <Home />
    </div>
  );
}

export default App;
