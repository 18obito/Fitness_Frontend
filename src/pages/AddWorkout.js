import React, { useState } from "react";

const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ name: "", duration: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workout.name && workout.duration) {
      setWorkouts([...workouts, workout]);
      setWorkout({ name: "", duration: "" });
    }
  };

  return (
    <>
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workout.name}
          onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Duration (mins)"
          value={workout.duration}
          onChange={(e) => setWorkout({ ...workout, duration: e.target.value })}
        />
        <button type="submit">Add Workout</button>
      </form>

      {workouts.length > 0 && (
        <>
          <h3>Workout List</h3>
          <ul>
            {workouts.map((w, index) => (
              <li key={index}>
                {w.name} - {w.duration} mins
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default AddWorkout;
