// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUserId = sessionStorage.getItem('user_id');
    return storedUserId ? { user_id: storedUserId } : null;
  });

  const login = (user_id) => {
    setAuthUser({ user_id });
    sessionStorage.setItem('user_id', user_id);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setAuthUser(null);
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

