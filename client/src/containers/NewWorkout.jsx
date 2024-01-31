import { useSelector } from "react-redux";
import NewWorkoutBody from "../components/new-workout/NewWorkoutBody";
import NewWorkoutHeader from "../components/new-workout/NewWorkoutHeader";
import NewWorkoutFooter from "../components/new-workout/NewWorkoutFooter";

const NewWorkout = () => {
  const { workoutData } = useSelector((state) => state.newWorkout);

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

  return (
    <div className="pl-5 pr-5">
      <NewWorkoutHeader workoutData={workoutData} />
      <NewWorkoutBody exercises={workoutData.exercises} />
      <NewWorkoutFooter workoutData={workoutData} />
    </div>
  );
};

export default NewWorkout;
