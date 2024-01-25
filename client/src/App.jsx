import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar.jsx";

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
