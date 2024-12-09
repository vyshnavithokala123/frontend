import React from 'react';
import { hasAccess } from './RBACContext';

const AdminPage = () => {
  return (
    <div>
      {hasAccess('admin') ? (
        <h1>Admin Dashboard</h1>
      ) : (
        <h1>Access Denied</h1>
      )}
    </div>
  );
};

export default AdminPage;
