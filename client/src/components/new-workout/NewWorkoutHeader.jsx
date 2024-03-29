import RoutineDropdown from "../dropdowns/RoutineDropdown";
import DateDropdown from "../dropdowns/DateDropdown";

const NewWorkoutHeader = ({ workoutData }) => {
  return (
    <>
      <h2 className="text-left text-2xl ">New Workout</h2>
      <div className="workout-header pb-5">
        <RoutineDropdown />
        <DateDropdown workoutData={workoutData} />
      </div>
    </>
  );
};

export default NewWorkoutHeader;
