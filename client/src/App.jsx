import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./components/navbar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar className="mb-10" />
      <Outlet />
    </div>
  );
}

export default App;
