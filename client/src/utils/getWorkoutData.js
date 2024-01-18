import axios from "axios";

export const getWorkoutData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/workout");
    return data;
  } catch (err) {
    console.error(err);
  }
};
