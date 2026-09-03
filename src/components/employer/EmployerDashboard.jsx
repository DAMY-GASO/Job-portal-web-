import React, { useState } from 'react';
import EmployerSidebar from './EmployerSidebar';
import EmployerStats from './EmployerStats';
import MyJobs from './MyJobs';
import PostJob from './PostJob';
import ApplicationsReceived from './ApplicationsReceived';

const EmployerDashboard = () => {
  const [stats] = useState({
    totalJobs: 5,
    totalApplications: 25,
    totalViews: 173,
    totalHired: 3,
    activeJobs: 2,
    totalSpent: 150000
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <EmployerSidebar />

      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-damy-primary">Dashibodi ya Mwajiri</h1>
            <p className="text-gray-600">Karibu tena! Hivi ndivyo matangazo yako yanavyoenda.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2">
              📊 Pakua Ripoti
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <EmployerStats stats={stats} />

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Tangaza Ajira Mpya</h3>
            <p className="text-sm text-blue-100 mt-2">Jaza taarifa na upate waombaji haraka</p>
            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
              Tangaza Sasa →
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Angalia Maombi</h3>
            <p className="text-sm text-green-100 mt-2">Tazama na usimamie maombi yaliyopokelewa</p>
            <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors">
              Nenda kwa Maombi →
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Matangazo Yangu</h3>
            <p className="text-sm text-purple-100 mt-2">Angalia, hariri, au futa matangazo yako</p>
            <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors">
              Nenda kwa Matangazo →
            </button>
          </div>
        </div>

        {/* My Jobs */}
        <div className="mt-8">
          <MyJobs />
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
