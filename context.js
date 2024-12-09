import React, { createContext, useContext, useState } from 'react';

// Creating Context for RBAC
const RBACContext = createContext();

// Available roles
const roles = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};

// Role-based access control component
export const RBACProvider = ({ children }) => {
  const [role, setRole] = useState(roles.GUEST); // Default role is GUEST

  const setUserRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <RBACContext.Provider value={{ role, setUserRole }}>
      {children}
    </RBACContext.Provider>
  );
};

// Hook to use the current role
export const useRBAC = () => useContext(RBACContext);

// Helper function to check if user has access
export const hasAccess = (requiredRole) => {
  const { role } = useRBAC();
  if (role === requiredRole || role === roles.ADMIN) {
    return true;
  }
  return false;
};
