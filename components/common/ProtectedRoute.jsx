import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  // Kama hakuna token, mpeleke kwenye login
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Kama user hana role inayoruhusiwa
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // Mpeleke kwenye dashboard yake kulingana na role
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else if (user?.role === 'employer') {
      return <Navigate to="/employer/dashboard" replace />;
    } else if (user?.role === 'job_seeker') {
      return <Navigate to="/jobseeker/dashboard" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
