import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RBACProvider } from './RBACContext';
import HomePage from './HomePage';
import AdminPage from './AdminPage';
import UserPage from './UserPage';

const App = () => {
  return (
    <RBACProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </RBACProvider>
  );
};

export default App;
