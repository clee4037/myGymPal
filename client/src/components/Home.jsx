import React, { useRef, useState, useEffect } from "react";
import WorkoutLog from "./WorkoutLog";

const Home = () => {
  return (
    <>
      <h3>Workout Log</h3>
      <button>New Workout</button>
      <WorkoutLog />
    </>
  );
};

export default Home;
