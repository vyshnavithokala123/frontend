import React from 'react';
import { hasAccess } from './RBACContext';

const UserPage = () => {
  return (
    <div>
      {hasAccess('user') ? (
        <h1>User Dashboard</h1>
      ) : (
        <h1>Access Denied</h1>
      )}
    </div>
  );
};

export default UserPage;
