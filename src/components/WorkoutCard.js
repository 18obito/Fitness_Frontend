import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 15px;
  border: 1px solid #ccc;
  margin: 10px 0;
`;

const WorkoutCard = ({ workout }) => {
  return (
    <Card>
      <h3>{workout.name}</h3>
      <p>Duration: {workout.duration} mins</p>
    </Card>
  );
};

export default WorkoutCard;
