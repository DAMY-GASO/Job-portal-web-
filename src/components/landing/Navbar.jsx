import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-damy-primary text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Briefcase className="text-damy-accent" size={32} />
            <span>Job<span className="text-damy-accent">Portal</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-damy-accent transition-colors">
              Vipengele
            </a>
            <a href="#how-it-works" className="hover:text-damy-accent transition-colors">
              Jinsi Inavyofanya Kazi
            </a>
            <a href="#testimonials" className="hover:text-damy-accent transition-colors">
              Maoni
            </a>
            <Link to="/login" className="btn-white">
              Ingia
            </Link>
            <Link to="/register" className="btn-primary">
              Jisajili Bure
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <a href="#features" className="block hover:text-damy-accent transition-colors">
              Vipengele
            </a>
            <a href="#how-it-works" className="block hover:text-damy-accent transition-colors">
              Jinsi Inavyofanya Kazi
            </a>
            <a href="#testimonials" className="block hover:text-damy-accent transition-colors">
              Maoni
            </a>
            <Link to="/login" className="block btn-white text-center">
              Ingia
            </Link>
            <Link to="/register" className="block btn-primary text-center">
              Jisajili Bure
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
