import React, { createContext, useState, useEffect } from 'react';
import { getUserById } from '../services/userService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Assume we have a function to get the currently logged-in user's ID
    const fetchUser = async () => {
      const userId = getLoggedInUserId();
      if (userId) {
        const userData = await getUserById(userId);
        setUser(userData);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
