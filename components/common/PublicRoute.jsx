import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  // Kama tayari ameingia, mpeleke kwenye dashboard yake
  if (token && user) {
    if (user.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else if (user.role === 'employer') {
      return <Navigate to="/employer/dashboard" replace />;
    } else if (user.role === 'job_seeker') {
      return <Navigate to="/jobseeker/dashboard" replace />;
    }
  }

  return children;
};

export default PublicRoute;
