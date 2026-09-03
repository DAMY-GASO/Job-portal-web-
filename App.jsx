import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import Features from './components/landing/Features';
import HowItWorks from './components/landing/HowItWorks';
import Testimonials from './components/landing/Testimonials';
import Footer from './components/landing/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Landing Page Component
const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
