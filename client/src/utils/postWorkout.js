import axios from "axios";

export const postWorkout = async (body) => {
  try {
    await axios.post("http://localhost:3000/workout", body);
    console.log("Workout posted");
  } catch (err) {
    console.error(err);
  }
};
