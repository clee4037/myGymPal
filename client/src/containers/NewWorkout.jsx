import { useSelector, useDispatch } from "react-redux";
import Exercise from "../components/new-workout/Exercise";
import RoutineDropdown from "../components/routine-dropdown/RoutineDropdown";
import DateDropdown from "../components/new-workout/DateDropdown";
import NewWorkoutFooter from "../components/new-workout/NewWorkoutFooter";
import { postWorkout } from "../utils/postWorkout";
import { setWorkoutData } from "../utils/slice/newWorkoutSlice";

const NewWorkout = ({ updatePage }) => {
  const { workoutData } = useSelector((state) => state.newWorkout);
  const { routines } = useSelector((state) => state.routine);
  const dispatch = useDispatch();
  // const validator = () => {
  //   const body = { ...workoutData, exercises: [] };
  //   if (workoutData.date) {
  //     alert("Please select a date");
  //     return false;
  //   }
  //   const keys = Object.keys(workoutData);

  // for (let i = 0; i < keys.length; i++) {
  //   if (keys[i] !== "routine" || keys[i] !== "date") {
  //     console.log(keys[i]);

  //     const exerciseData = body[keys[i]];
  //     console.log("ex", exerciseData);
  //     const transformedData = [];
  //     const setIndex = Object.keys(exerciseData);
  //     console.log("set count", setIndex);
  //     for (let j = 1; j < setIndex.length; j++) {
  //       const setData = exerciseData[setIndex[j]];
  //       if (!setData.weight || !setData.reps) {
  //         alert("Missing weight or reps");
  //         return false;
  //       }
  //       transformedData.push({ reps: setData.reps, weight: setData.weight });
  //     }
  //     body.exercises.push({ name: keys[i], ...transformedData });
  //     delete body[keys[i]];
  //     console.log(body);
  //   }
  // }

  //   return true;
  // };

  /* WIP: POST / COMPLETE WORKOUT */
  const sendWorkoutData = async () => {
    try {
      // CURRENTLY ALLOW NULL VALUES
      await postWorkout(workoutData);
      updatePage("log");
    } catch (err) {
      console.error(err);
    }
  };

  /* CHOOSE ROUTINE AND RENDER */
  const chooseRoutine = (e) => {
    /* REFACTOR TO USE ROUTINE ID */
    const selectedRoutine =
      routines && routines.find((routine) => routine.name === e.target.value);
    const data = {
      routine: selectedRoutine.name,
      exercises: selectedRoutine.data.map(({ exercise, sets }) => {
        const data = Array.from({ length: sets }, () => ({
          reps: null,
          weight: null,
          notes: null,
        }));
        return { name: exercise, data };
      }),
    };
    dispatch(setWorkoutData(data));
  };

  return (
    <div className="pl-5 pr-5">
      <h2 className="text-left text-2xl ">New Workout</h2>
      <div className="workout-header pb-5">
        <RoutineDropdown chooseRoutine={chooseRoutine} />
        <DateDropdown workoutData={workoutData} />
      </div>
      {workoutData.exercises &&
        workoutData.exercises.map(({ name, data }, exerciseIndex) => (
          <Exercise
            name={name}
            exerciseIndex={exerciseIndex}
            setCount={data.length}
            key={name + data.length}
          />
        ))}
      {workoutData.exercises && (
        <NewWorkoutFooter sendWorkoutData={sendWorkoutData} />
      )}
    </div>
  );
};

export default NewWorkout;
