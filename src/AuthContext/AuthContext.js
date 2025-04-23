import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    // Try to get user_id from sessionStorage first
    const storedUserId = sessionStorage.getItem("user_id");
    return storedUserId ? storedUserId : null;
  });

  useEffect(() => {
    if (userId) {
      // Store the user_id in sessionStorage
      sessionStorage.setItem("user_id", userId);
    } else {
      // Clear user_id from sessionStorage if it's null
      sessionStorage.removeItem("user_id");
    }
  }, [userId]);

  const login = (id) => {
    setUserId(id);
  };

  const logout = () => {
    sessionStorage.removeItem("user_id"); // Remove from sessionStorage
    setUserId(null); // Update state
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
