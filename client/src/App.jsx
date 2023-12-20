import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.jsx";
import Workout from "./components/Workout.jsx";
import Home from "./components/Home.jsx";
import History from "./components/History.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Workout />
      <Home />
    </div>
  );
}

export default App;
