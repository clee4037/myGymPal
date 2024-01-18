import axios from "axios";

export const getRoutines = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/routine");
    return data;
  } catch (err) {
    console.error(err);
  }
};
