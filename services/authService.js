import api from './api';

// Mock data
const MOCK_USERS = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@jobportal.com',
    password: 'password123',
    role: 'admin',
    phone: '+255 712 345 678',
    location: 'Dar es Salaam',
    created_at: '2026-01-01'
  },
  {
    id: 2,
    name: 'TechCo HR',
    email: 'hr@techco.com',
    password: 'password123',
    role: 'employer',
    company: 'TechCo Tanzania',
    phone: '+255 712 345 679',
    location: 'Dar es Salaam',
    created_at: '2026-01-15'
  },
  {
    id: 3,
    name: 'John Jobseeker',
    email: 'john@gmail.com',
    password: 'password123',
    role: 'job_seeker',
    phone: '+255 712 345 680',
    location: 'Dar es Salaam',
    skills: ['JavaScript', 'React', 'Node.js'],
    created_at: '2026-02-01'
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Auth Service
class AuthService {
  // Login
  async login(email, password) {
    await delay(800); // Simulate network delay
    
    // Kwa mock, tunatafuta user
    const user = MOCK_USERS.find(u => u.email === email);
    
    if (!user) {
      throw new Error('Barua pepe au nenosiri si sahihi');
    }
    
    if (user.password !== password) {
      throw new Error('Barua pepe au nenosiri si sahihi');
    }
    
    // Generate mock token
    const token = `mock-token-${user.id}-${Date.now()}`;
    
    // Remove password from user object
    const { password: _, ...userData } = user;
    
    return {
      success: true,
      message: 'Login successful',
      data: {
        token,
        user: userData
      }
    };
  }

  // Register
  async register(userData) {
    await delay(1000);
    
    // Check if user already exists
    const existingUser = MOCK_USERS.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('Barua pepe tayari inatumika');
    }
    
    // Create new user
    const newUser = {
      id: MOCK_USERS.length + 1,
      ...userData,
      created_at: new Date().toISOString().split('T')[0]
    };
    
    // Save to mock users (in real app, hii itakuwa API call)
    MOCK_USERS.push(newUser);
    
    const { password: _, ...userResponse } = newUser;
    
    return {
      success: true,
      message: 'Registration successful',
      data: userResponse
    };
  }

  // Logout
  async logout() {
    await delay(300);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return {
      success: true,
      message: 'Logged out successfully'
    };
  }

  // Get current user
  async getCurrentUser() {
    await delay(400);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      throw new Error('User not authenticated');
    }
    return {
      success: true,
      data: user
    };
  }

  // Update profile
  async updateProfile(userData) {
    await delay(800);
    const currentUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (!currentUser) {
      throw new Error('User not authenticated');
    }
    
    const updatedUser = { ...currentUser, ...userData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    return {
      success: true,
      message: 'Profile updated successfully',
      data: updatedUser
    };
  }

  // Change password
  async changePassword(currentPassword, newPassword) {
    await delay(600);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    // Mock validation
    if (currentPassword !== 'password123') {
      throw new Error('Nenosiri la sasa si sahihi');
    }
    
    return {
      success: true,
      message: 'Password changed successfully'
    };
  }

  // Forgot password
  async forgotPassword(email) {
    await delay(600);
    const user = MOCK_USERS.find(u => u.email === email);
    if (!user) {
      throw new Error('Barua pepe haijapatikana');
    }
    
    return {
      success: true,
      message: 'Link ya kuweka nenosiri mpya imetumwa kwa barua pepe yako'
    };
  }
}

export default new AuthService();
