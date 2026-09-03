import axios from 'axios';

// API base URL - hii itabadilishwa na URL halisi ya backend baadae
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor - Ongeza token kwa kila request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token imeisha muda
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    // Handle validation errors
    if (error.response?.status === 422) {
      const errors = error.response.data.errors || {};
      const errorMessages = Object.values(errors).flat();
      error.message = errorMessages.join('\n') || error.response.data.message || 'Data si sahihi';
    }
    
    // Handle other errors
    const message = error.response?.data?.message || error.message || 'Kuna tatizo. Tafadhali jaribu tena.';
    error.userMessage = message;
    
    return Promise.reject(error);
  }
);

export default api;
