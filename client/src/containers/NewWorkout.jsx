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
  console.log(workoutData);
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
  //     const setNumber = Object.keys(exerciseData);
  //     console.log("set count", setNumber);
  //     for (let j = 1; j < setNumber.length; j++) {
  //       const setData = exerciseData[setNumber[j]];
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
      const body = workoutData;
      body.exercises = Object.keys(body.exercises).map(
        (key) => body.exercises[key]
      );
      await postWorkout(body);
      updatePage("log");
    } catch (err) {
      console.error(err);
    }
  };

  /* WIP: EXERCISE DATA FROM EXERCISE CHILD COMP */
  const addWorkoutData = (set, name, data) => {
    const updatedState = workoutData.exercises;
    console.log("1.", set, updatedState);
    updatedState[set - 1] = data;
    console.log("2.", updatedState);
    dispatch(
      setWorkoutData({
        ...workoutData,
        exercises: [],
      })
    );
    // const updatedState = workoutData.exercises;
    // updatedState.exercises = updatedState.exercises || {};
    // if (!updatedState.exercises[name]) {
    //   updatedState.exercises[name] = { name, data };
    // }
    // dispatch(setWorkoutData(updatedState));
  };

  /* CHOOSE ROUTINE AND RENDER */
  const chooseRoutine = (e) => {
    const selectedRoutine =
      routines && routines.find((routine) => routine.name === e.target.value);
    const data = {
      routine: selectedRoutine.name,
      exercises: selectedRoutine.data.map(({ exercise, sets }) => {
        const data = Array.from({ length: sets }, () => ({
          reps: null,
          weight: null,
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
        workoutData.exercises.map(({ name, data }, exerciseNumber) => (
          <Exercise
            name={name}
            exerciseNumber={exerciseNumber}
            setCount={data.length}
            addWorkoutData={addWorkoutData}
            key={name + data.length}
          />
        ))}
      {workoutData.exercises && (
        <NewWorkoutFooter
          // addExercise={addExercise}
          sendWorkoutData={sendWorkoutData}
        />
      )}
    </div>
  );
};

export default NewWorkout;
