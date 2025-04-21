import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || null);

  const login = (id, name) => {
    setUserId(id);
    setUserName(name);

    localStorage.setItem('userId', id);
    localStorage.setItem('userName', name);
  };

  const logout = () => {
    setUserId(null);
    setUserName(null);

    localStorage.removeItem('userId');
    localStorage.removeItem('userName');

    window.location.href = '/'; // Redirect to login
  };

  useEffect(() => {
    // No JWT token handling needed
  }, []);

  return (
    <AuthContext.Provider value={{ userId, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
