import RoutineDropdown from "../routine-dropdown/RoutineDropdown";
import DateDropdown from "../new-workout/DateDropdown";

const NewWorkoutHeader = ({ chooseRoutine, workoutData }) => {
  return (
    <>
      <h2 className="text-left text-2xl ">New Workout</h2>
      <div className="workout-header pb-5">
        <RoutineDropdown chooseRoutine={chooseRoutine} />
        <DateDropdown workoutData={workoutData} />
      </div>
    </>
  );
};

export default NewWorkoutHeader;
