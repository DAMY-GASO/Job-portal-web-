import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
