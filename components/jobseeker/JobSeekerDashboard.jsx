import React, { useState } from 'react';
import JobSeekerSidebar from './JobSeekerSidebar';
import JobSeekerStats from './JobSeekerStats';
import BrowseJobs from './BrowseJobs';
import MyApplications from './MyApplications';
import { Bell, TrendingUp, Award } from 'lucide-react';

const JobSeekerDashboard = () => {
  const [stats] = useState({
    totalApplications: 4,
    approvedApplications: 1,
    pendingApplications: 1,
    savedJobs: 3,
    jobsViewed: 12,
    successRate: 25
  });

  const [recentJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'TechCo', posted: '2 masaa' },
    { id: 2, title: 'Accountant', company: 'Finance Plus', posted: '5 masaa' },
    { id: 3, title: 'Sales Manager', company: 'Retail Solutions', posted: '8 masaa' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <JobSeekerSidebar />

      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-damy-primary">Dashibodi ya Mtafuta Kazi</h1>
            <p className="text-gray-600">Karibu tena! Endelea kutafuta kazi ndoto yako.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <JobSeekerStats stats={stats} />

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Tafuta Kazi</h3>
            <p className="text-sm text-blue-100 mt-2">Tafuta kazi zinazokufaa</p>
            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
              Nenda Kwenye Kazi →
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Maombi Yangu</h3>
            <p className="text-sm text-green-100 mt-2">Angalia hali ya maombi yako</p>
            <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors">
              Nenda Kwenye Maombi →
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Kazi Zilizohifadhiwa</h3>
            <p className="text-sm text-purple-100 mt-2">Angalia kazi ulizohifadhi</p>
            <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors">
              Nenda Kwenye Zilizohifadhiwa →
            </button>
          </div>
        </div>

        {/* Browse Jobs Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-damy-primary mb-4 flex items-center gap-2">
            <TrendingUp className="text-damy-accent" size={24} />
            Kazi Zilizotangazwa Hivi Karibuni
          </h2>
          <BrowseJobs />
        </div>

        {/* My Applications */}
        <div className="mt-8">
          <MyApplications />
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-damy-primary to-damy-secondary rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-damy-accent" size={32} />
            <h3 className="text-xl font-bold">Vidokezo vya Kupata Kazi Haraka</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold text-damy-accent">1. Boresha Profaili</h4>
              <p className="text-sm text-gray-300 mt-1">Jaza maelezo yako kamili na pia CV yako</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold text-damy-accent">2. Tuma Maombi Mengi</h4>
              <p className="text-sm text-gray-300 mt-1">Usikate tamaa, endelea kutuma maombi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold text-damy-accent">3. Jiandae kwa Usaili</h4>
              <p className="text-sm text-gray-300 mt-1">Jifunze kuhusu kampuni kabla ya usaili</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
