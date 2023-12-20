import React, { useRef, useState, useEffect } from "react";

const RoutineItem = ({ data }) => {
  return (
    <>
      <h3>{data.name}</h3>
      <div>
        {data.data.map((exercise) => (
          <div>
            {exercise.sets}x {exercise.exercise}
          </div>
        ))}
      </div>
    </>
  );
};

export default RoutineItem;
