import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaDumbbell, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getWorkouts } from "../api/workouts"; // ✅ Import getWorkouts function

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #00bfff, #1e90ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const AddWorkoutButton = styled.button`
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #1e90ff;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 20px;

  &:hover {
    background: #f0f0f0;
  }

  svg {
    margin-right: 8px;
  }
`;

const WorkoutList = styled.div`
  width: 90%;
  max-width: 600px;
`;

const WorkoutCard = styled.div`
  background: white;
  color: #333;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: #1e90ff;
  }
`;

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getWorkouts() // ✅ Use the function instead of axios.get
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <DashboardContainer>
      <Title>🏋️ Fitness Dashboard</Title>
      <AddWorkoutButton onClick={() => navigate("/addworkout")}>
        <FaPlusCircle /> Add Workout
      </AddWorkoutButton>
      
      <WorkoutList>
        {workouts.length === 0 ? (
          <p>No workouts added yet.</p>
        ) : (
          workouts.map((workout, index) => (
            <WorkoutCard key={index}>
              <div>
                <h3>{workout.name}</h3>
                <p>{workout.duration} mins | {workout.type}</p>
              </div>
              <FaDumbbell size={24} />
            </WorkoutCard>
          ))
        )}
      </WorkoutList>
    </DashboardContainer>
  );
};

export default Dashboard;
