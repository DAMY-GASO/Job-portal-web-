import React, { useState, useEffect } from 'react';
import { FileText, User, Mail, Phone, MapPin, Calendar, CheckCircle, XCircle, Eye } from 'lucide-react';

const ApplicationsReceived = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Mock data
    const mockApplications = [
      {
        id: 1,
        jobTitle: 'Software Engineer',
        applicant: {
          name: 'Sarah M.',
          email: 'sarah@email.com',
          phone: '+255 712 345 678',
          location: 'Dar es Salaam'
        },
        status: 'pending',
        appliedDate: '2026-09-05',
        coverLetter: 'Nina uzoefu wa miaka 5 katika React na Node.js. Nimefanya kazi katika kampuni kubwa za teknolojia.',
        resume: 'sarah_cv.pdf'
      },
      {
        id: 2,
        jobTitle: 'Accountant',
        applicant: {
          name: 'John K.',
          email: 'john@email.com',
          phone: '+255 765 432 100',
          location: 'Arusha'
        },
        status: 'reviewed',
        appliedDate: '2026-09-04',
        coverLetter: 'Nina uzoefu wa miaka 3 katika accounting na QuickBooks. Nimehitimu CPA.',
        resume: 'john_cv.pdf'
      },
      {
        id: 3,
        jobTitle: 'Software Engineer',
        applicant: {
          name: 'Jane P.',
          email: 'jane@email.com',
          phone: '+255 688 901 234',
          location: 'Mwanza'
        },
        status: 'shortlisted',
        appliedDate: '2026-09-03',
        coverLetter: 'Mhandisi wa programu mwenye shauku ya kujifunza na kutatua matatizo.',
        resume: 'jane_cv.pdf'
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
    reviewed: 'Imeangaliwa',
    shortlisted: 'Imechaguliwa',
    rejected: 'Imekataliwa',
    hired: 'Ameajiriwa'
  };

  const updateStatus = (appId, newStatus) => {
    setApplications(applications.map(app => 
      app.id === appId ? { ...app, status: newStatus } : app
    ));
    alert(`Ombi limebadilishwa kuwa: ${statusLabels[newStatus]}`);
  };

  const filteredApps = applications.filter(app => 
    filter === 'all' || app.status === filter
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-damy-primary flex items-center gap-2 mb-6">
        <FileText className="text-damy-accent" size={28} />
        Maombi Yaliyopokelewa
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
          <p className="text-gray-500 mt-2">Hujapokea maombi yoyote bado</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredApps.map((app) => (
            <div key={app.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-damy-accent/10 p-3 rounded-full">
                      <User className="text-damy-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold">{app.applicant.name}</h3>
                      <p className="text-sm text-damy-accent">{app.jobTitle}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Mail size={16} />
                          {app.applicant.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone size={16} />
                          {app.applicant.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {app.applicant.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {app.appliedDate}
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                          {app.coverLetter}
                        </p>
                        <button className="text-sm text-damy-accent hover:underline mt-1">
                          <Eye size={16} className="inline mr-1" />
                          Angalia CV
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[app.status]}`}>
                    {statusLabels[app.status]}
                  </span>
                  
                  {app.status === 'pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateStatus(app.id, 'shortlisted')}
                        className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1"
                      >
                        <CheckCircle size={16} />
                        Chagua
                      </button>
                      <button
                        onClick={() => updateStatus(app.id, 'rejected')}
                        className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-1"
                      >
                        <XCircle size={16} />
                        Kataa
                      </button>
                    </div>
                  )}
                  {app.status === 'shortlisted' && (
                    <button
                      onClick={() => updateStatus(app.id, 'hired')}
                      className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      Ajiri
                    </button>
                  )}
                  {app.status === 'reviewed' && (
                    <button
                      onClick={() => updateStatus(app.id, 'shortlisted')}
                      className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      Chagua
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

export default ApplicationsReceived;
