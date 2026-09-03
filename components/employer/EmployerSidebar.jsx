import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  PlusCircle,
  DollarSign,
  Settings,
  LogOut,
  Users,
  BarChart3
} from 'lucide-react';

const EmployerSidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashibodi', path: '/employer/dashboard' },
    { icon: <PlusCircle size={20} />, label: 'Postia Ajira', path: '/employer/post-job' },
    { icon: <Briefcase size={20} />, label: 'Matangazo Yangu', path: '/employer/my-jobs' },
    { icon: <FileText size={20} />, label: 'Maombi Yaliyopokelewa', path: '/employer/applications' },
    { icon: <Users size={20} />, label: 'Wafanyakazi', path: '/employer/employees' },
    { icon: <BarChart3 size={20} />, label: 'Takwimu', path: '/employer/statistics' },
    { icon: <DollarSign size={20} />, label: 'Malipo', path: '/employer/payments' },
    { icon: <Settings size={20} />, label: 'Mipangilio', path: '/employer/settings' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <aside className="w-64 bg-damy-primary text-white min-h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="text-damy-accent" size={28} />
          <span>Job<span className="text-damy-accent">Portal</span></span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Mwajiri Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-damy-accent text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-300 hover:bg-red-600/20 hover:text-red-400 transition-all duration-200"
        >
          <LogOut size={20} />
          <span>Toka</span>
        </button>
      </div>
    </aside>
  );
};

export default EmployerSidebar;
