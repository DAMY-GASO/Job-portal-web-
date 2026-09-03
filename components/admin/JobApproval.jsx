import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, Clock, Building2, MapPin, DollarSign } from 'lucide-react';

const JobApproval = ({ pendingJobs, onApprove, onReject }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-damy-primary flex items-center gap-2">
          <Clock className="text-yellow-500" size={24} />
          Matangazo Yanayosubiri Kuidhinishwa
        </h2>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
          {pendingJobs.length} yanasubiri
        </span>
      </div>

      {pendingJobs.length === 0 ? (
        <div className="text-center py-12">
          <CheckCircle className="mx-auto text-green-500" size={48} />
          <p className="text-gray-500 mt-2">Hakuna matangazo yanayosubiri kuidhinishwa</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pendingJobs.map((job) => (
            <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-damy-primary">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 size={16} />
                          {job.employer}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={16} />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[job.status]}`}>
                      {job.status === 'pending' ? 'Inasubiri' : job.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="text-xs text-gray-500">
                      Iliyotumwa: {job.postedDate}
                    </span>
                    <span className="text-xs text-gray-500">
                      Mwisho wa kutuma: {job.deadline}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-1"
                  >
                    <Eye size={16} />
                    {selectedJob === job.id ? 'Funga' : 'Angalia'}
                  </button>
                  <button
                    onClick={() => onApprove(job.id)}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1"
                  >
                    <CheckCircle size={16} />
                    Idhinisha
                  </button>
                  <button
                    onClick={() => onReject(job.id)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1"
                  >
                    <XCircle size={16} />
                    Kataa
                  </button>
                </div>
              </div>

              {/* Expanded details */}
              {selectedJob === job.id && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Maelezo Kamili:</h4>
                  <p className="text-sm text-gray-700">{job.fullDescription || job.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Kategoria</p>
                      <p className="text-sm font-medium">{job.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Aina ya Kazi</p>
                      <p className="text-sm font-medium">{job.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Mahitaji</p>
                      <p className="text-sm font-medium">{job.requirements}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Waombaji</p>
                      <p className="text-sm font-medium">{job.applicants || 0}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobApproval;
