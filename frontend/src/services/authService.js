import api from "./api";

const API_URL = "/auth";

// Register User
export const registerUser = async (userData) => {
  const response = await api.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await api.post(
    `${API_URL}/login`,
    userData
  );

  if (response.data.token) {
    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );
  }

  return response.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Get Logged-in User
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

// Get JWT Token
export const getToken = () => {
  return localStorage.getItem("token");
};

// Check Login Status
export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};