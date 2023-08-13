import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [authToken, setAuthToken] = useState(false);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setAuthToken(true);
  };

  const logout = () => {
    setUser("");
    setToken("");
    setAuthToken(false);
  };

  const contextValue = {
    user,
    setUser,
    token,
    setToken,
    authToken,
    setAuthToken,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
