import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, Clock, XCircle, Building2, Calendar, Eye } from 'lucide-react';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Mock data
    const mockApplications = [
      {
        id: 1,
        jobTitle: 'Software Engineer',
        company: 'TechCo Tanzania',
        location: 'Dar es Salaam',
        salary: 'TSh 1,500,000 - 2,500,000',
        status: 'pending',
        appliedDate: '2026-09-05',
        deadline: '2026-10-01',
        feedback: ''
      },
      {
        id: 2,
        jobTitle: 'Accountant',
        company: 'Finance Plus Ltd',
        location: 'Arusha',
        salary: 'TSh 800,000 - 1,200,000',
        status: 'reviewed',
        appliedDate: '2026-09-04',
        deadline: '2026-09-30',
        feedback: 'Tunakagua maombi yako'
      },
      {
        id: 3,
        jobTitle: 'Sales Manager',
        company: 'Retail Solutions',
        location: 'Mwanza',
        salary: 'TSh 1,000,000 - 1,800,000',
        status: 'shortlisted',
        appliedDate: '2026-09-03',
        deadline: '2026-10-15',
        feedback: 'Umechaguliwa kwa ajili ya usaili'
      },
      {
        id: 4,
        jobTitle: 'Marketing Specialist',
        company: 'Digital Agency',
        location: 'Dar es Salaam',
        salary: 'TSh 600,000 - 1,000,000',
        status: 'rejected',
        appliedDate: '2026-08-25',
        deadline: '2026-09-25',
        feedback: 'Suala: Uzoefu haukidhi mahitaji'
      }
    ];
    setApplications(mockApplications);
  }, []);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    reviewed: 'bg-blue-100 text-blue-800',
    shortlisted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    hired: 'bg-purple-100 text-purple-800'
  };

  const statusLabels = {
    pending: 'Inasubiri',
    reviewed: 'Inakaguliwa',
    shortlisted: 'Umechaguliwa',
    rejected: 'Umekataliwa',
    hired: 'Umeajiriwa'
  };

  const statusIcons = {
    pending: <Clock size={20} />,
    reviewed: <Eye size={20} />,
    shortlisted: <CheckCircle size={20} />,
    rejected: <XCircle size={20} />,
    hired: <CheckCircle size={20} />
  };

  const filteredApps = applications.filter(app => 
    filter === 'all' || app.status === filter
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-damy-primary flex items-center gap-2 mb-6">
        <FileText className="text-damy-accent" size={28} />
        Maombi Yangu
      </h2>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['all', 'pending', 'reviewed', 'shortlisted', 'rejected', 'hired'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              filter === status
                ? 'bg-damy-accent text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status === 'all' ? 'Zote' : statusLabels[status]}
          </button>
        ))}
      </div>

      {/* Applications List */}
      {filteredApps.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="mx-auto text-gray-300" size={48} />
          <p className="text-gray-500 mt-2">Hujatuma ombi lolote bado</p>
          <button className="text-damy-accent hover:underline mt-2">
            Tafuta kazi sasa
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredApps.map((app) => (
            <div key={app.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${statusColors[app.status]}`}>
                      {statusIcons[app.status]}
                    </div>
                    <div>
                      <h3 className="font-bold text-damy-primary">{app.jobTitle}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <Building2 size={16} />
                        {app.company}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                        <span>{app.location}</span>
                        <span>{app.salary}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          Iliyotumwa: {app.appliedDate}
                        </span>
                      </div>
                      {app.feedback && (
                        <div className="mt-2 p-2 bg-gray-50 rounded-lg text-sm text-gray-700">
                          <span className="font-medium">Maoni:</span> {app.feedback}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[app.status]}`}>
                    {statusLabels[app.status]}
                  </span>
                  {app.status === 'shortlisted' && (
                    <button className="text-sm text-green-600 hover:underline">
                      Jiandae kwa usaili
                    </button>
                  )}
                  {app.status === 'rejected' && (
                    <button className="text-sm text-damy-accent hover:underline">
                      Tafuta kazi nyingine
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications;
