import api from './api';

// Mock data
const MOCK_JOBS = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCo Tanzania',
    employer_id: 2,
    location: 'Dar es Salaam',
    salary_min: 1500000,
    salary_max: 2500000,
    type: 'Full-time',
    category: 'Technology',
    description: 'Tunatafuta software engineer mwenye uzoefu wa React na Node.js.',
    requirements: 'React, Node.js, PostgreSQL',
    benefits: 'Bima ya afya, posho za usafiri, mafunzo',
    status: 'approved',
    is_featured: true,
    posted_date: '2026-09-01',
    deadline: '2026-10-01',
    views: 45,
    applicants_count: 12
  },
  {
    id: 2,
    title: 'Accountant',
    company: 'Finance Plus Ltd',
    employer_id: 3,
    location: 'Arusha',
    salary_min: 800000,
    salary_max: 1200000,
    type: 'Full-time',
    category: 'Finance',
    description: 'Tunatafuta mhasibu mwenye uzoefu wa QuickBooks.',
    requirements: 'CPA, QuickBooks, Excel',
    benefits: 'Bima ya afya, posho za malazi',
    status: 'approved',
    is_featured: false,
    posted_date: '2026-09-02',
    deadline: '2026-09-30',
    views: 23,
    applicants_count: 8
  },
  {
    id: 3,
    title: 'Sales Manager',
    company: 'Retail Solutions',
    employer_id: 4,
    location: 'Mwanza',
    salary_min: 1000000,
    salary_max: 1800000,
    type: 'Full-time',
    category: 'Sales',
    description: 'Tunatafuta Sales Manager mwenye uzoefu wa kuongoza timu.',
    requirements: 'Sales experience, Leadership, B2B',
    benefits: 'Commission, posho za usafiri',
    status: 'pending',
    is_featured: false,
    posted_date: '2026-09-03',
    deadline: '2026-10-15',
    views: 31,
    applicants_count: 5
  },
  {
    id: 4,
    title: 'Marketing Specialist',
    company: 'Digital Agency',
    employer_id: 5,
    location: 'Dar es Salaam',
    salary_min: 600000,
    salary_max: 1000000,
    type: 'Contract',
    category: 'Marketing',
    description: 'Tunatafuta marketing specialist mwenye uzoefu wa digital marketing.',
    requirements: 'Digital Marketing, SEO, Social Media',
    benefits: 'Flexible hours, remote work',
    status: 'approved',
    is_featured: false,
    posted_date: '2026-08-25',
    deadline: '2026-09-25',
    views: 56,
    applicants_count: 15
  },
  {
    id: 5,
    title: 'Web Developer',
    company: 'Tech Solutions',
    employer_id: 6,
    location: 'Remote',
    salary_min: 1200000,
    salary_max: 2000000,
    type: 'Remote',
    category: 'Technology',
    description: 'Tunatafuta web developer mwenye uzoefu wa MERN stack.',
    requirements: 'MongoDB, Express, React, Node.js',
    benefits: 'Remote work, flexible schedule',
    status: 'approved',
    is_featured: false,
    posted_date: '2026-08-20',
    deadline: '2026-09-20',
    views: 78,
    applicants_count: 20
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class JobService {
  // Get all jobs with filters
  async getJobs(filters = {}) {
    await delay(600);
    
    let jobs = [...MOCK_JOBS];
    
    // Filter by status (default: approved)
    const status = filters.status || 'approved';
    jobs = jobs.filter(job => job.status === status);
    
    // Search
    if (filters.search) {
      const search = filters.search.toLowerCase();
      jobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search) ||
        job.category.toLowerCase().includes(search)
      );
    }
    
    // Category filter
    if (filters.category) {
      jobs = jobs.filter(job => job.category === filters.category);
    }
    
    // Location filter
    if (filters.location) {
      jobs = jobs.filter(job => job.location === filters.location);
    }
    
    // Job type filter
    if (filters.type) {
      jobs = jobs.filter(job => job.type === filters.type);
    }
    
    // Salary range filter
    if (filters.salary_min) {
      jobs = jobs.filter(job => job.salary_max >= filters.salary_min);
    }
    if (filters.salary_max) {
      jobs = jobs.filter(job => job.salary_min <= filters.salary_max);
    }
    
    // Featured filter
    if (filters.featured) {
      jobs = jobs.filter(job => job.is_featured === true);
    }
    
    // Sorting
    if (filters.sort) {
      switch(filters.sort) {
        case 'latest':
          jobs.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));
          break;
        case 'salary_high':
          jobs.sort((a, b) => b.salary_max - a.salary_max);
          break;
        case 'salary_low':
          jobs.sort((a, b) => a.salary_min - b.salary_min);
          break;
        case 'views':
          jobs.sort((a, b) => b.views - a.views);
          break;
        default:
          break;
      }
    }
    
    // Pagination
    const page = filters.page || 1;
    const limit = filters.limit || 10;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedJobs = jobs.slice(start, end);
    
    return {
      success: true,
      data: paginatedJobs,
      meta: {
        total: jobs.length,
        page,
        limit,
        total_pages: Math.ceil(jobs.length / limit)
      }
    };
  }

  // Get single job by ID
  async getJobById(id) {
    await delay(400);
    const job = MOCK_JOBS.find(j => j.id === parseInt(id));
    if (!job) {
      throw new Error('Kazi haijapatikana');
    }
    return {
      success: true,
      data: job
    };
  }

  // Create job (Employer)
  async createJob(jobData) {
    await delay(800);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'employer') {
      throw new Error('Huna ruhusa ya kuweka tangazo');
    }
    
    const newJob = {
      id: MOCK_JOBS.length + 1,
      ...jobData,
      employer_id: user.id,
      company: user.company || 'Your Company',
      status: 'pending',
      is_featured: jobData.is_featured || false,
      posted_date: new Date().toISOString().split('T')[0],
      views: 0,
      applicants_count: 0
    };
    
    MOCK_JOBS.push(newJob);
    
    return {
      success: true,
      message: 'Tangazo limewekwa kwa mafanikio! Liko katika kuidhinishwa na Admin.',
      data: newJob
    };
  }

  // Update job (Employer)
  async updateJob(id, jobData) {
    await delay(600);
    const index = MOCK_JOBS.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error('Kazi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || (user.role !== 'employer' && user.role !== 'admin')) {
      throw new Error('Huna ruhusa ya kubadilisha tangazo hili');
    }
    
    // Check if employer owns this job (kama sio admin)
    if (user.role === 'employer' && MOCK_JOBS[index].employer_id !== user.id) {
      throw new Error('Huna ruhusa ya kubadilisha tangazo hili');
    }
    
    MOCK_JOBS[index] = { ...MOCK_JOBS[index], ...jobData };
    
    return {
      success: true,
      message: 'Tangazo limebadilishwa kwa mafanikio',
      data: MOCK_JOBS[index]
    };
  }

  // Delete job (Employer or Admin)
  async deleteJob(id) {
    await delay(500);
    const index = MOCK_JOBS.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error('Kazi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || (user.role !== 'employer' && user.role !== 'admin')) {
      throw new Error('Huna ruhusa ya kufuta tangazo hili');
    }
    
    // Check if employer owns this job (kama sio admin)
    if (user.role === 'employer' && MOCK_JOBS[index].employer_id !== user.id) {
      throw new Error('Huna ruhusa ya kufuta tangazo hili');
    }
    
    MOCK_JOBS.splice(index, 1);
    
    return {
      success: true,
      message: 'Tangazo limefutwa kwa mafanikio'
    };
  }

  // Admin: Approve job
  async approveJob(id) {
    await delay(500);
    const index = MOCK_JOBS.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error('Kazi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'admin') {
      throw new Error('Huna ruhusa ya kuidhinisha tangazo');
    }
    
    MOCK_JOBS[index].status = 'approved';
    
    return {
      success: true,
      message: 'Tangazo limeidhinishwa kwa mafanikio',
      data: MOCK_JOBS[index]
    };
  }

  // Admin: Reject job
  async rejectJob(id, reason = '') {
    await delay(500);
    const index = MOCK_JOBS.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error('Kazi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'admin') {
      throw new Error('Huna ruhusa ya kukataa tangazo');
    }
    
    MOCK_JOBS[index].status = 'rejected';
    MOCK_JOBS[index].rejection_reason = reason;
    
    return {
      success: true,
      message: 'Tangazo limekataliwa',
      data: MOCK_JOBS[index]
    };
  }

  // Get employer's jobs
  async getEmployerJobs(employerId) {
    await delay(500);
    const jobs = MOCK_JOBS.filter(j => j.employer_id === parseInt(employerId));
    return {
      success: true,
      data: jobs
    };
  }

  // Toggle featured status (Admin)
  async toggleFeatured(id) {
    await delay(400);
    const index = MOCK_JOBS.findIndex(j => j.id === parseInt(id));
    if (index === -1) {
      throw new Error('Kazi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'admin') {
      throw new Error('Huna ruhusa ya kubadilisha hali ya featured');
    }
    
    MOCK_JOBS[index].is_featured = !MOCK_JOBS[index].is_featured;
    
    return {
      success: true,
      message: `Tangazo ${MOCK_JOBS[index].is_featured ? 'limewekwa kwenye featured' : 'limetolewa kwenye featured'}`,
      data: MOCK_JOBS[index]
    };
  }
}

export default new JobService();
