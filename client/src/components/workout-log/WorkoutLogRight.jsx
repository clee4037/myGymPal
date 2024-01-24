import React from "react";
import "../../stylesheets/workout_log.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setView } from "../../utils/slice/logSlice";

const WorkoutLogRight = () => {
  const { view } = useSelector((state) => state.log);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={view === "list" ? "text-torq" : ""}
        onClick={() => {
          dispatch(setView("list"));
          navigate("/");
        }}
      >
        List{" "}
      </button>
      {" | "}
      <button
        className={view === "calendar" ? "text-torq" : ""}
        onClick={() => {
          dispatch(setView("calendar"));
          navigate("/calendar");
        }}
      >
        {" "}
        Calendar
      </button>
    </div>
  );
};

export default WorkoutLogRight;
