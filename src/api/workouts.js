import axios from "axios";

export const getWorkouts = () => {
  return axios.get("http://localhost:5000/api/workouts");
};


const addWorkout = async (workout) => {
  try {
    const response = await axios.post("http://localhost:5000/api/workouts", workout);
    console.log("Workout added:", response.data);
  } catch (error) {
    console.error("Error adding workout:", error);
  }
};

