import { Outlet } from "react-router-dom";
import * as React from "react";
import NavBar from "./components/navbar/NavBar.tsx";

function App() {
  return (
    <div className="App">
      <NavBar className="mb-10" />
      <Outlet />
    </div>
  );
}

export default App;
