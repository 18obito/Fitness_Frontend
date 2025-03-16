import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: #1e1e1e;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #00bfff;
  font-size: 24px;
  margin-left: 20px;
`;

const NavLinks = styled.div`
  margin-right: 20px;
  a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #00bfff;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Fitness Tracker</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register">Register</Link>  {/* Added Register Link */}
        <Link to="/login">Login</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
