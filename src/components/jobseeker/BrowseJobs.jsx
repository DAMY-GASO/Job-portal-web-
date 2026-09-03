import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  Briefcase,
  Clock,
  Heart,
  Eye,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const BrowseJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    type: '',
    salaryRange: ''
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Mock data - hii itabadilishwa na API baadae
    const mockJobs = [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'TechCo Tanzania',
        location: 'Dar es Salaam',
        salary_min: 1500000,
        salary_max: 2500000,
        type: 'Full-time',
        category: 'Technology',
        description: 'Tunatafuta software engineer mwenye uzoefu wa React na Node.js.',
        requirements: 'React, Node.js, PostgreSQL',
        benefits: 'Bima ya afya, posho za usafiri, mafunzo',
        postedDate: '2026-09-01',
        deadline: '2026-10-01',
        applicants: 12,
        views: 45,
        is_featured: true,
        employer: {
          name: 'TechCo Tanzania',
          email: 'hr@techco.com',
          phone: '+255 712 345 678'
        }
      },
      {
        id: 2,
        title: 'Accountant',
        company: 'Finance Plus Ltd',
        location: 'Arusha',
        salary_min: 800000,
        salary_max: 1200000,
        type: 'Full-time',
        category: 'Finance',
        description: 'Tunatafuta mhasibu mwenye uzoefu wa QuickBooks.',
        requirements: 'CPA, QuickBooks, Excel',
        benefits: 'Bima ya afya, posho za malazi',
        postedDate: '2026-09-02',
        deadline: '2026-09-30',
        applicants: 8,
        views: 23,
        is_featured: false,
        employer: {
          name: 'Finance Plus Ltd',
          email: 'hr@financeplus.com',
          phone: '+255 765 432 100'
        }
      },
      {
        id: 3,
        title: 'Sales Manager',
        company: 'Retail Solutions',
        location: 'Mwanza',
        salary_min: 1000000,
        salary_max: 1800000,
        type: 'Full-time',
        category: 'Sales',
        description: 'Tunatafuta Sales Manager mwenye uzoefu wa kuongoza timu.',
        requirements: 'Sales experience, Leadership, B2B',
        benefits: 'Commission, posho za usafiri',
        postedDate: '2026-09-03',
        deadline: '2026-10-15',
        applicants: 5,
        views: 31,
        is_featured: false,
        employer: {
          name: 'Retail Solutions',
          email: 'hr@retailsolutions.com',
          phone: '+255 688 901 234'
        }
      },
      {
        id: 4,
        title: 'Marketing Specialist',
        company: 'Digital Agency',
        location: 'Dar es Salaam',
        salary_min: 600000,
        salary_max: 1000000,
        type: 'Contract',
        category: 'Marketing',
        description: 'Tunatafuta marketing specialist mwenye uzoefu wa digital marketing.',
        requirements: 'Digital Marketing, SEO, Social Media',
        benefits: 'Flexible hours, remote work',
        postedDate: '2026-08-25',
        deadline: '2026-09-25',
        applicants: 15,
        views: 56,
        is_featured: false,
        employer: {
          name: 'Digital Agency',
          email: 'hr@digitalagency.com',
          phone: '+255 744 567 890'
        }
      },
      {
        id: 5,
        title: 'Web Developer',
        company: 'Tech Solutions',
        location: 'Remote',
        salary_min: 1200000,
        salary_max: 2000000,
        type: 'Remote',
        category: 'Technology',
        description: 'Tunatafuta web developer mwenye uzoefu wa MERN stack.',
        requirements: 'MongoDB, Express, React, Node.js',
        benefits: 'Remote work, flexible schedule',
        postedDate: '2026-08-20',
        deadline: '2026-09-20',
        applicants: 20,
        views: 78,
        is_featured: false,
        employer: {
          name: 'Tech Solutions',
          email: 'hr@techsolutions.com',
          phone: '+255 755 678 901'
        }
      }
    ];

    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  // Filter jobs based on search and filters
  useEffect(() => {
    let filtered = jobs;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(job => job.category === filters.category);
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(job => job.location === filters.location);
    }

    // Job type filter
    if (filters.type) {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    // Salary filter
    if (filters.salaryRange) {
      const [min, max] = filters.salaryRange.split('-').map(Number);
      filtered = filtered.filter(job => 
        job.salary_min >= min && job.salary_max <= max
      );
    }

    setFilteredJobs(filtered);
  }, [searchTerm, filters, jobs]);

  const handleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
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

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Finance': 'bg-green-100 text-green-800',
      'Sales': 'bg-orange-100 text-orange-800',
      'Marketing': 'bg-purple-100 text-purple-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Education': 'bg-yellow-100 text-yellow-800',
      'Engineering': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tafuta kazi, kampuni, au eneo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <Filter size={20} />
            Vichujio
            {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategoria
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent"
              >
                <option value="">Zote</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Eneo
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent"
              >
                <option value="">Zote</option>
                <option value="Dar es Salaam">Dar es Salaam</option>
                <option value="Arusha">Arusha</option>
                <option value="Mwanza">Mwanza</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aina ya Kazi
              </label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent"
              >
                <option value="">Zote</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kiwango cha Mshahara
              </label>
              <select
                value={filters.salaryRange}
                onChange={(e) => setFilters({ ...filters, salaryRange: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent"
              >
                <option value="">Zote</option>
                <option value="0-500000">Chini ya TSh 500,000</option>
                <option value="500000-1000000">TSh 500,000 - 1,000,000</option>
                <option value="1000000-1500000">TSh 1,000,000 - 1,500,000</option>
                <option value="1500000-2000000">TSh 1,500,000 - 2,000,000</option>
                <option value="2000000-9999999">TSh 2,000,000+</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'kazi' : 'kazi'} zimepatikana
        </p>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-damy-accent">
          <option>Zilizotangazwa hivi karibuni</option>
          <option>Kiwango cha juu cha mshahara</option>
          <option>Kiwango cha chini cha mshahara</option>
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-damy-accent/10 p-3 rounded-lg">
                    <Briefcase className="text-damy-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-damy-primary">{job.title}</h3>
                      {job.is_featured && (
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
                          ⭐ Featured
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(job.category)}`}>
                        {job.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mt-1 flex items-center gap-2">
                      <Building2 size={16} />
                      {job.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={16} />
                        TSh {job.salary_min.toLocaleString()} - {job.salary_max.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        Iliyotumwa {getTimeAgo(job.postedDate)}
                      </span>
                    </div>

                    <p className="text-gray-700 mt-2 line-clamp-2">{job.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => handleSaveJob(job.id)}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                    savedJobs.includes(job.id)
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Heart size={18} className={savedJobs.includes(job.id) ? 'fill-red-600' : ''} />
                  {savedJobs.includes(job.id) ? 'Imehifadhiwa' : 'Hifadhi'}
                </button>
                
                <button
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="px-6 py-2 bg-damy-accent text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
                >
                  {selectedJob === job.id ? 'Funga Maelezo' : 'Angalia Zaidi'}
                </button>
              </div>
            </div>

            {/* Expanded Job Details */}
            {selectedJob === job.id && (
              <div className="mt-4 pt-4 border-t">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-damy-primary mb-2">Maelezo Kamili</h4>
                    <p className="text-gray-700 text-sm">{job.description}</p>
                    
                    <h4 className="font-bold text-damy-primary mt-4 mb-2">Mahitaji</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {job.requirements.split(',').map((req, index) => (
                        <li key={index}>{req.trim()}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-damy-primary mb-2">Faida</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {job.benefits.split(',').map((benefit, index) => (
                        <li key={index}>{benefit.trim()}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold text-damy-primary mt-4 mb-2">Maelezo ya Mwajiri</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p><span className="font-medium">Kampuni:</span> {job.employer.name}</p>
                      <p><span className="font-medium">Barua Pepe:</span> {job.employer.email}</p>
                      <p><span className="font-medium">Simu:</span> {job.employer.phone}</p>
                    </div>
                    
                    <div className="mt-4 flex gap-3">
                      <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Tuma Ombi Sasa
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Eye size={20} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <Search className="mx-auto text-gray-300" size={48} />
          <p className="text-gray-500 mt-2">Hakuna kazi zilizopatikana</p>
          <p className="text-sm text-gray-400">Jaribu kubadilisha vichujio vyako</p>
        </div>
      )}
    </div>
  );
};

export default BrowseJobs;
