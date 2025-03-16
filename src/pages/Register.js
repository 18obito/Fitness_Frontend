import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #00bfff, #1e90ff);
`;

const RegisterBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 380px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  color: #1e90ff;
  margin-bottom: 20px;
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  background: #f9f9f9;
`;

const Icon = styled.span`
  color: #1e90ff;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s;
  font-weight: bold;
  
  &:hover {
    background: #007bff;
  }
`;

const Message = styled.p`
  margin-top: 10px;
  color: ${({ success }) => (success ? "green" : "red")};
  font-weight: bold;
`;

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message ] = useState("");
  const [success] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("https://fitness-backend-uwyy.onrender.com/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            alert("Registration Successful!");
            navigate("/login");
        } else {
            alert(data.message || "Registration failed.");
        }
    } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
    }
};


  return (
    <RegisterContainer>
      <RegisterBox>
        <Title>Create an Account</Title>
        <form onSubmit={handleRegister}>
          <InputContainer>
            <Icon><FaUser /></Icon>
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon><FaEnvelope /></Icon>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          <Button type="submit">Sign Up</Button>
        </form>
        {message && <Message success={success}>{message}</Message>}
      </RegisterBox>
    </RegisterContainer>
  );
};

export default Register;
