import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginUser } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const checkAuth = () => {
      const userData = localStorage.getItem('adminUser');
      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      setError(null);
      // Call the API to login
      const userData = await loginUser({ username, password });

      // Save user data to localStorage
      localStorage.setItem('adminUser', JSON.stringify(userData));

      // Update state
      setUser(userData);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setError(err.message || 'Login failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('adminUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
