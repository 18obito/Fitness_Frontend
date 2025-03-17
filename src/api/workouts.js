import axios from "axios";

export const getWorkouts = () => {
  return axios.get("/api/workouts");
};




