import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import StatCards from './StatCards';
import JobApproval from './JobApproval';
import RecentActivities from './RecentActivities';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { Download, RefreshCw, Filter } from 'lucide-react';

const AdminDashboard = () => {
  // Mock data - hii itabadilishwa na API baadae
  const [stats, setStats] = useState({
    totalUsers: 254,
    totalJobs: 89,
    totalApplications: 312,
    totalRevenue: 1250000,
    pendingJobs: 12,
    growthRate: 23
  });

  const [pendingJobs, setPendingJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      employer: 'TechCo Tanzania',
      location: 'Dar es Salaam',
      salary: '1,500,000 - 2,500,000',
      type: 'Full-time',
      category: 'Technology',
      description: 'Tunatafuta software engineer mwenye uzoefu wa React na Node.js.',
      fullDescription: 'Tunatafuta software engineer mwenye uzoefu wa zaidi ya miaka 3 katika React na Node.js. Mtafiti wa kazi mwenye uwezo wa kufanya kazi katika timu na kutatua matatizo.',
      requirements: 'React, Node.js, PostgreSQL',
      postedDate: '2026-09-01',
      deadline: '2026-10-01',
      status: 'pending',
      applicants: 12
    },
    {
      id: 2,
      title: 'Accountant',
      employer: 'Finance Plus Ltd',
      location: 'Arusha',
      salary: '800,000 - 1,200,000',
      type: 'Full-time',
      category: 'Finance',
      description: 'Tunatafuta mhasibu mwenye uzoefu wa kufanya kazi na QuickBooks.',
      fullDescription: 'Tunatafuta mhasibu mwenye uzoefu wa zaidi ya miaka 2 katika accounting. Uzoefu wa QuickBooks ni muhimu.',
      requirements: 'CPA, QuickBooks, Excel',
      postedDate: '2026-09-02',
      deadline: '2026-09-30',
      status: 'pending',
      applicants: 8
    },
    {
      id: 3,
      title: 'Sales Manager',
      employer: 'Retail Solutions',
      location: 'Mwanza',
      salary: '1,000,000 - 1,800,000',
      type: 'Full-time',
      category: 'Sales',
      description: 'Tunatafuta manager wa mauzo mwenye uzoefu wa kuongoza timu.',
      fullDescription: 'Tunatafuta Sales Manager mwenye uzoefu wa kuongoza timu ya mauzo katika retail industry. Uzoefu wa B2B sales ni faida.',
      requirements: 'Sales experience, Leadership, B2B',
      postedDate: '2026-09-03',
      deadline: '2026-10-15',
      status: 'pending',
      applicants: 5
    }
  ]);

  const [activities, setActivities] = useState([
    { user: 'Juma A.', action: 'alijisajili kama mwajiri', type: 'user_register', timestamp: '2026-09-03T10:30:00' },
    { user: 'TechCo', action: 'alipostia tangazo jipya la kazi', type: 'job_post', timestamp: '2026-09-03T09:15:00' },
    { user: 'Sarah M.', action: 'alituma ombi la kazi', type: 'application', timestamp: '2026-09-03T08:45:00' },
    { user: 'Finance Plus', action: 'alilipa kwa ajili ya tangazo', type: 'payment', timestamp: '2026-09-02T16:20:00', amount: 50000 },
    { user: 'Peter K.', action: 'alijisajili kama mtafuta kazi', type: 'user_register', timestamp: '2026-09-02T14:00:00' },
  ]);

  // Chart data
  const revenueData = [
    { month: 'Jan', revenue: 80000 },
    { month: 'Feb', revenue: 120000 },
    { month: 'Mar', revenue: 150000 },
    { month: 'Apr', revenue: 180000 },
    { month: 'May', revenue: 220000 },
    { month: 'Jun', revenue: 250000 },
  ];

  const jobCategoryData = [
    { name: 'Technology', value: 30 },
    { name: 'Finance', value: 20 },
    { name: 'Healthcare', value: 15 },
    { name: 'Education', value: 12 },
    { name: 'Sales', value: 18 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#4A90E2', '#2ECC71', '#E74C3C', '#F39C12', '#9B59B6', '#1ABC9C'];

  // Handlers
  const handleApprove = (jobId) => {
    setPendingJobs(pendingJobs.filter(job => job.id !== jobId));
    setStats({
      ...stats,
      totalJobs: stats.totalJobs + 1,
      pendingJobs: stats.pendingJobs - 1
    });
    alert(`Tangazo #${jobId} limeidhinishwa!`);
  };

  const handleReject = (jobId) => {
    setPendingJobs(pendingJobs.filter(job => job.id !== jobId));
    setStats({
      ...stats,
      pendingJobs: stats.pendingJobs - 1
    });
    alert(`Tangazo #${jobId} limekataliwa.`);
  };

  const handleRefresh = () => {
    alert('Data inasasishwa...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-damy-primary">Dashibodi ya Admin</h1>
            <p className="text-gray-600">Karibu tena! Hivi ndivyo jukwaa lako linavyoenda.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={handleRefresh}
              className="bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2"
            >
              <RefreshCw size={18} />
              Sasisha
            </button>
            <button className="bg-damy-accent text-white px-4 py-2 rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2">
              <Download size={18} />
              Pakua Ripoti
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <StatCards stats={stats} />

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-damy-primary mb-4">Mapato kwa Mwezi</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `TSh ${value.toLocaleString()}`} />
                <Bar dataKey="revenue" fill="#4A90E2" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-damy-primary mb-4">Matangazo kwa Kategoria</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={jobCategoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {jobCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Job Approval Section */}
        <div className="mt-8">
          <JobApproval 
            pendingJobs={pendingJobs} 
            onApprove={handleApprove} 
            onReject={handleReject} 
          />
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <RecentActivities activities={activities} />
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Simamia Watumiaji</h3>
            <p className="text-sm text-blue-100 mt-2">Angalia, hariri, au futa akaunti za watumiaji</p>
            <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
              Nenda kwa Watumiaji →
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Matangazo Yote</h3>
            <p className="text-sm text-green-100 mt-2">Angalia matangazo yote na hali zao</p>
            <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors">
              Nenda kwa Matangazo →
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="font-bold text-lg">Ripoti za Mapato</h3>
            <p className="text-sm text-purple-100 mt-2">Tazama takwimu na mapato yote ya jukwaa</p>
            <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors">
              Nenda kwa Mapato →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
