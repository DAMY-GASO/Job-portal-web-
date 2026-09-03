import React from 'react';
import { UserPlus, Briefcase, FileText, DollarSign, Clock } from 'lucide-react';

const RecentActivities = ({ activities }) => {
  const getIcon = (type) => {
    switch(type) {
      case 'user_register': return <UserPlus size={16} className="text-blue-500" />;
      case 'job_post': return <Briefcase size={16} className="text-green-500" />;
      case 'application': return <FileText size={16} className="text-purple-500" />;
      case 'payment': return <DollarSign size={16} className="text-yellow-500" />;
      default: return <Clock size={16} className="text-gray-500" />;
    }
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 1000 / 60);
    if (diff < 1) return 'Sasa hivi';
    if (diff < 60) return `${diff} dakika`;
    if (diff < 1440) return `${Math.floor(diff / 60)} masaa`;
    return `${Math.floor(diff / 1440)} siku`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-damy-primary mb-6">
        Shughuli za Hivi Karibuni
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
            <div className="bg-gray-100 p-2 rounded-full">
              {getIcon(activity.type)}
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold">{activity.user}</span>
                {' '}{activity.action}
              </p>
              <p className="text-xs text-gray-500">{getTimeAgo(activity.timestamp)}</p>
            </div>
            {activity.amount && (
              <span className="text-sm font-semibold text-green-600">
                TSh {activity.amount.toLocaleString()}
              </span>
            )}
          </div>
        ))}
      </div>

      <button className="mt-4 w-full text-center text-sm text-damy-accent hover:underline">
        Ona shughuli zote
      </button>
    </div>
  );
};

export default RecentActivities;
