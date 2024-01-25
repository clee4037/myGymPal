import axios from "axios";

export const getExercises = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/exercise");
    return data;
  } catch (err) {
    console.error(err);
  }
};
