import React from 'react';
import { Briefcase, FileText, Users, DollarSign, Eye, Clock } from 'lucide-react';

const EmployerStats = ({ stats }) => {
  const cards = [
    {
      icon: <Briefcase size={24} />,
      label: 'Matangazo Yangu',
      value: stats.totalJobs || 0,
      color: 'blue'
    },
    {
      icon: <FileText size={24} />,
      label: 'Maombi Yaliyopokelewa',
      value: stats.totalApplications || 0,
      color: 'green'
    },
    {
      icon: <Eye size={24} />,
      label: 'Mara Zilizotazamwa',
      value: stats.totalViews || 0,
      color: 'purple'
    },
    {
      icon: <Users size={24} />,
      label: 'Wafanyakazi Walioajiriwa',
      value: stats.totalHired || 0,
      color: 'orange'
    },
    {
      icon: <Clock size={24} />,
      label: 'Matangazo Yanayoendelea',
      value: stats.activeJobs || 0,
      color: 'teal'
    },
    {
      icon: <DollarSign size={24} />,
      label: 'Jumla ya Malipo',
      value: stats.totalSpent || 0,
      color: 'yellow',
      isCurrency: true
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    teal: 'bg-teal-100 text-teal-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-full ${colorClasses[card.color]}`}>
              {card.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">{card.label}</p>
              <p className="text-2xl font-bold text-damy-primary">
                {card.isCurrency ? `TSh ${card.value.toLocaleString()}` : card.value.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployerStats;
