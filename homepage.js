import React from 'react';
import { useRBAC, hasAccess } from './RBACContext';

const HomePage = () => {
  const { role, setUserRole } = useRBAC();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Your current role: {role}</p>
      <button onClick={() => setUserRole('admin')}>Set Role to Admin</button>
      <button onClick={() => setUserRole('user')}>Set Role to User</button>
      <button onClick={() => setUserRole('guest')}>Set Role to Guest</button>
    </div>
  );
};

export default HomePage;
