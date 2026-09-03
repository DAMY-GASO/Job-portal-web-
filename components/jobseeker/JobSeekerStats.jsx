import React from 'react';
import { FileText, CheckCircle, Clock, Heart, Eye, TrendingUp } from 'lucide-react';

const JobSeekerStats = ({ stats }) => {
  const cards = [
    {
      icon: <FileText size={24} />,
      label: 'Maombi Yaliyotumwa',
      value: stats.totalApplications || 0,
      color: 'blue'
    },
    {
      icon: <CheckCircle size={24} />,
      label: 'Yaliyoidhinishwa',
      value: stats.approvedApplications || 0,
      color: 'green'
    },
    {
      icon: <Clock size={24} />,
      label: 'Yanasubiri',
      value: stats.pendingApplications || 0,
      color: 'yellow'
    },
    {
      icon: <Heart size={24} />,
      label: 'Kazi Zilizohifadhiwa',
      value: stats.savedJobs || 0,
      color: 'purple'
    },
    {
      icon: <Eye size={24} />,
      label: 'Kazi Zilizotazamwa',
      value: stats.jobsViewed || 0,
      color: 'orange'
    },
    {
      icon: <TrendingUp size={24} />,
      label: 'Kiwango cha Ufanisi',
      value: stats.successRate || 0,
      color: 'teal',
      isPercentage: true
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
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
          </div>
          
          <div className="space-y-1">
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="text-2xl font-bold text-damy-primary">
              {card.isPercentage ? `${card.value}%` : card.value.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSeekerStats;
