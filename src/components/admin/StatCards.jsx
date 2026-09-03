import React from 'react';
import { Users, Briefcase, FileText, DollarSign, TrendingUp, Clock } from 'lucide-react';

const StatCards = ({ stats }) => {
  const cards = [
    {
      icon: <Users size={24} />,
      label: 'Watumiaji',
      value: stats.totalUsers || 0,
      color: 'blue',
      change: '+12%'
    },
    {
      icon: <Briefcase size={24} />,
      label: 'Matangazo',
      value: stats.totalJobs || 0,
      color: 'green',
      change: '+8%'
    },
    {
      icon: <FileText size={24} />,
      label: 'Maombi',
      value: stats.totalApplications || 0,
      color: 'purple',
      change: '+15%'
    },
    {
      icon: <DollarSign size={24} />,
      label: 'Mapato (TSh)',
      value: stats.totalRevenue || 0,
      color: 'yellow',
      change: '+5%',
      isCurrency: true
    },
    {
      icon: <Clock size={24} />,
      label: 'Yanasubiri',
      value: stats.pendingJobs || 0,
      color: 'orange',
      change: 'Inahitaji umakini'
    },
    {
      icon: <TrendingUp size={24} />,
      label: 'Kiwango cha Ukuaji',
      value: stats.growthRate || 0,
      color: 'teal',
      change: '+23%',
      isPercentage: true
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-full ${colorClasses[card.color]}`}>
              {card.icon}
            </div>
            <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
              {card.change}
            </span>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="text-2xl font-bold text-damy-primary">
              {card.isCurrency ? `TSh ${card.value.toLocaleString()}` : 
               card.isPercentage ? `${card.value}%` : 
               card.value.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
