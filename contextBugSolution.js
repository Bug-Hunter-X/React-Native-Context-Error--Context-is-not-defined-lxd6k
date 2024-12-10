import React, { createContext, useContext } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const user = { name: 'John Doe', email: 'john.doe@example.com' };
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  const user = useContext(UserContext);
  if (!user) {
    return <p>User not found</p>; // Handle the case where context is unavailable
  }
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export { UserProvider, UserProfile };
