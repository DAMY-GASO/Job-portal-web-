import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Eye,
  Edit,
  Trash2,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  MapPin,
  DollarSign,
  Search,
  Filter
} from 'lucide-react';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Mock data - hii itabadilishwa na API baadae
    const mockJobs = [
      {
        id: 1,
        title: 'Software Engineer',
        category: 'Technology',
        type: 'full-time',
        location: 'Dar es Salaam',
        salary_min: 1500000,
        salary_max: 2500000,
        postedDate: '2026-09-01',
        deadline: '2026-10-01',
        status: 'approved',
        applicants: 12,
        views: 45,
        is_featured: true
      },
      {
        id: 2,
        title: 'Accountant',
        category: 'Finance',
        type: 'full-time',
        location: 'Arusha',
        salary_min: 800000,
        salary_max: 1200000,
        postedDate: '2026-09-02',
        deadline: '2026-09-30',
        status: 'pending',
        applicants: 8,
        views: 23,
        is_featured: false
      },
      {
        id: 3,
        title: 'Sales Manager',
        category: 'Sales',
        type: 'full-time',
        location: 'Mwanza',
        salary_min: 1000000,
        salary_max: 1800000,
        postedDate: '2026-09-03',
        deadline: '2026-10-15',
        status: 'approved',
        applicants: 5,
        views: 31,
        is_featured: false
      },
      {
        id: 4,
        title: 'Marketing Specialist',
        category: 'Marketing',
        type: 'contract',
        location: 'Dar es Salaam',
        salary_min: 600000,
        salary_max: 1000000,
        postedDate: '2026-08-25',
        deadline: '2026-09-25',
        status: 'expired',
        applicants: 15,
        views: 56,
        is_featured: false
      },
      {
        id: 5,
        title: 'Web Developer',
        category: 'Technology',
        type: 'remote',
        location: 'Remote',
        salary_min: 1200000,
        salary_max: 2000000,
        postedDate: '2026-08-20',
        deadline: '2026-09-20',
        status: 'rejected',
        applicants: 0,
        views: 18,
        is_featured: false
      }
    ];

    // Load from localStorage if exists
    const savedJobs = JSON.parse(localStorage.getItem('employerJobs') || '[]');
    setJobs(savedJobs.length > 0 ? savedJobs : mockJobs);
  }, []);

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 text-yellow-800', label: 'Inasubiri' },
      approved: { color: 'bg-green-100 text-green-800', label: 'Imeidhinishwa' },
      rejected: { color: 'bg-red-100 text-red-800', label: 'Imekataliwa' },
      expired: { color: 'bg-gray-100 text-gray-800', label: 'Imeisha Muda' },
      closed: { color: 'bg-purple-100 text-purple-800', label: 'Imefungwa' }
    };
    return statusConfig[status] || statusConfig.pending;
  };

  const handleDelete = (jobId) => {
    if (window.confirm('Je, una uhakika unataka kufuta tangazo hili?')) {
      setJobs(jobs.filter(job => job.id !== jobId));
      localStorage.setItem('employerJobs', JSON.stringify(jobs.filter(job => job.id !== jobId)));
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesFilter = filter === 'all' || job.status === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-damy-primary flex items-center gap-2">
          <Briefcase className="text-damy-accent" size={28} />
          Matangazo Yangu
        </h2>
        <Link to="/employer/post-job" className="btn-primary flex items-center gap-2">
          + Tangaza Mpya
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tafuta tangazo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
          />
        </div>
        
        <div className="flex gap-2">
          {['all', 'pending', 'approved', 'rejected', 'expired'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-damy-accent text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'Zote' : 
               status === 'pending' ? 'Zinasubiri' :
               status === 'approved' ? 'Zimeidhinishwa' :
               status === 'rejected' ? 'Zimekataliwa' : 'Zimeisha'}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs List */}
      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <Briefcase className="mx-auto text-gray-300" size={48} />
          <p className="text-gray-500 mt-2">Hujatangaza nafasi yoyote bado</p>
          <Link to="/employer/post-job" className="text-damy-accent hover:underline mt-2 inline-block">
            Tangaza nafasi yako ya kwanza
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const statusBadge = getStatusBadge(job.status);
            return (
              <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="bg-damy-accent/10 p-2 rounded-lg">
                        <Briefcase className="text-damy-accent" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-damy-primary">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign size={16} />
                            {job.salary_min && job.salary_max ? 
                              `TSh ${job.salary_min.toLocaleString()} - ${job.salary_max.toLocaleString()}` : 
                              'Kiwango hakijabainishwa'}
                          </span>
                          <span className="capitalize">{job.type?.replace('-', ' ')}</span>
                          <span>{job.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusBadge.color}`}>
                        {statusBadge.label}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Users size={16} />
                        {job.applicants || 0} waombaji
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Eye size={16} />
                        {job.views || 0} mara zilizotazamwa
                      </span>
                      <span className="text-gray-500">
                        {job.postedDate}
                      </span>
                      {job.is_featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/employer/jobs/${job.id}`}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1"
                    >
                      <Eye size={16} />
                      Angalia
                    </Link>
                    {job.status !== 'expired' && job.status !== 'rejected' && (
                      <>
                        <Link
                          to={`/employer/edit-job/${job.id}`}
                          className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-1"
                        >
                          <Edit size={16} />
                          Hariri
                        </Link>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-1"
                        >
                          <Trash2 size={16} />
                          Futa
                        </button>
                      </>
                    )}
                    {job.status === 'approved' && (
                      <Link
                        to={`/employer/applications/${job.id}`}
                        className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center gap-1"
                      >
                        <Users size={16} />
                        Waombaji
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyJobs;
