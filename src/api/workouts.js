import axios from "axios";

export const getWorkouts = () => {
  return axios.get("https://fitness-backend-uwyy.onrender.com/api/workouts");
};




