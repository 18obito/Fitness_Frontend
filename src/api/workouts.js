import axios from "axios";

export const getWorkouts = () => {
  return axios.get("http://localhost:5000/api/workouts");
};




