export const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCo Tanzania',
    location: 'Dar es Salaam',
    salary: '1,500,000 - 2,500,000',
    type: 'Full-time',
    category: 'Technology',
    description: 'Tunatafuta software engineer mwenye uzoefu wa React na Node.js.',
    postedDate: '2026-09-01',
    deadline: '2026-10-01',
    status: 'approved',
    employerId: 2
  },
  {
    id: 2,
    title: 'Accountant',
    company: 'Finance Plus Ltd',
    location: 'Arusha',
    salary: '800,000 - 1,200,000',
    type: 'Full-time',
    category: 'Finance',
    description: 'Tunatafuta mhasibu mwenye uzoefu wa kufanya kazi na QuickBooks.',
    postedDate: '2026-09-02',
    deadline: '2026-09-30',
    status: 'approved',
    employerId: 3
  },
  {
    id: 3,
    title: 'Sales Manager',
    company: 'Retail Solutions',
    location: 'Mwanza',
    salary: '1,000,000 - 1,800,000',
    type: 'Full-time',
    category: 'Sales',
    description: 'Tunatafuta manager wa mauzo mwenye uzoefu wa kuongoza timu.',
    postedDate: '2026-09-03',
    deadline: '2026-10-15',
    status: 'pending',
    employerId: 4
  }
];

export const mockUsers = [
  { id: 1, name: 'Admin', email: 'admin@jobportal.com', role: 'admin' },
  { id: 2, name: 'TechCo HR', email: 'hr@techco.com', role: 'employer' },
  { id: 3, name: 'Finance HR', email: 'hr@financeplus.com', role: 'employer' },
  { id: 4, name: 'John Jobseeker', email: 'john@gmail.com', role: 'job_seeker' },
];

export const mockApplications = [
  { id: 1, jobId: 1, jobSeekerId: 4, status: 'pending', appliedDate: '2026-09-05' },
  { id: 2, jobId: 2, jobSeekerId: 5, status: 'reviewed', appliedDate: '2026-09-04' },
];
