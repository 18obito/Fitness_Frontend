import axios from "axios";

export const login = async (credentials) => {
  return await axios.post("/api/auth/login", credentials);
};

export const register = async (userData) => {
  return await axios.post("/api/auth/register", userData);
};
