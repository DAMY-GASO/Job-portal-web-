import api from './api';

// Mock data
const MOCK_APPLICATIONS = [
  {
    id: 1,
    job_id: 1,
    job_title: 'Software Engineer',
    company: 'TechCo Tanzania',
    job_seeker_id: 3,
    job_seeker_name: 'John Jobseeker',
    status: 'pending',
    applied_date: '2026-09-05',
    cover_letter: 'Nina uzoefu wa miaka 5 katika React na Node.js. Nimefanya kazi katika kampuni kubwa za teknolojia.',
    resume_url: 'john_cv.pdf',
    feedback: ''
  },
  {
    id: 2,
    job_id: 2,
    job_title: 'Accountant',
    company: 'Finance Plus Ltd',
    job_seeker_id: 4,
    job_seeker_name: 'Sarah M.',
    status: 'reviewed',
    applied_date: '2026-09-04',
    cover_letter: 'Nina uzoefu wa miaka 3 katika accounting na QuickBooks. Nimehitimu CPA.',
    resume_url: 'sarah_cv.pdf',
    feedback: 'Tunakagua maombi yako'
  },
  {
    id: 3,
    job_id: 3,
    job_title: 'Sales Manager',
    company: 'Retail Solutions',
    job_seeker_id: 5,
    job_seeker_name: 'Peter K.',
    status: 'shortlisted',
    applied_date: '2026-09-03',
    cover_letter: 'Nina uzoefu wa miaka 4 katika sales na leadership.',
    resume_url: 'peter_cv.pdf',
    feedback: 'Umechaguliwa kwa ajili ya usaili'
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ApplicationService {
  // Apply for job
  async apply(jobId, applicationData) {
    await delay(700);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'job_seeker') {
      throw new Error('Tafadhali ingia kama mtafuta kazi');
    }
    
    // Check if already applied
    const existing = MOCK_APPLICATIONS.find(
      app => app.job_id === parseInt(jobId) && app.job_seeker_id === user.id
    );
    if (existing) {
      throw new Error('Tayari umetuma ombi kwenye kazi hii');
    }
    
    const newApplication = {
      id: MOCK_APPLICATIONS.length + 1,
      job_id: parseInt(jobId),
      job_seeker_id: user.id,
      job_seeker_name: user.name,
      status: 'pending',
      applied_date: new Date().toISOString().split('T')[0],
      ...applicationData,
      feedback: ''
    };
    
    MOCK_APPLICATIONS.push(newApplication);
    
    // Update applicants count
    const jobIndex = MOCK_JOBS.findIndex(j => j.id === parseInt(jobId));
    if (jobIndex !== -1) {
      MOCK_JOBS[jobIndex].applicants_count += 1;
    }
    
    return {
      success: true,
      message: 'Ombi lako limetumwa kwa mafanikio!',
      data: newApplication
    };
  }

  // Get job seeker's applications
  async getMyApplications() {
    await delay(500);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'job_seeker') {
      throw new Error('Tafadhali ingia kama mtafuta kazi');
    }
    
    const applications = MOCK_APPLICATIONS.filter(
      app => app.job_seeker_id === user.id
    );
    
    return {
      success: true,
      data: applications
    };
  }

  // Get applications for a job (Employer)
  async getJobApplications(jobId) {
    await delay(500);
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'employer') {
      throw new Error('Huna ruhusa ya kuona maombi haya');
    }
    
    const applications = MOCK_APPLICATIONS.filter(
      app => app.job_id === parseInt(jobId)
    );
    
    return {
      success: true,
      data: applications
    };
  }

  // Update application status (Employer)
  async updateStatus(applicationId, status, feedback = '') {
    await delay(500);
    const index = MOCK_APPLICATIONS.findIndex(app => app.id === parseInt(applicationId));
    if (index === -1) {
      throw new Error('Ombi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'employer') {
      throw new Error('Huna ruhusa ya kubadilisha hali ya ombi');
    }
    
    const statusLabels = {
      pending: 'Inasubiri',
      reviewed: 'Imeangaliwa',
      shortlisted: 'Imechaguliwa',
      rejected: 'Imekataliwa',
      hired: 'Ameajiriwa'
    };
    
    MOCK_APPLICATIONS[index].status = status;
    MOCK_APPLICATIONS[index].feedback = feedback;
    
    return {
      success: true,
      message: `Ombi limebadilishwa kuwa: ${statusLabels[status] || status}`,
      data: MOCK_APPLICATIONS[index]
    };
  }

  // Withdraw application (Job Seeker)
  async withdrawApplication(applicationId) {
    await delay(400);
    const index = MOCK_APPLICATIONS.findIndex(app => app.id === parseInt(applicationId));
    if (index === -1) {
      throw new Error('Ombi haijapatikana');
    }
    
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!user || user.role !== 'job_seeker') {
      throw new Error('Huna ruhusa ya kufuta ombi hili');
    }
    
    if (MOCK_APPLICATIONS[index].job_seeker_id !== user.id) {
      throw new Error('Huna ruhusa ya kufuta ombi hili');
    }
    
    if (MOCK_APPLICATIONS[index].status !== 'pending') {
      throw new Error('Ombi hili haliwezi kufutwa kwa sababu tayari limekaguliwa');
    }
    
    const application = MOCK_APPLICATIONS[index];
    MOCK_APPLICATIONS.splice(index, 1);
    
    // Update applicants count
    const jobIndex = MOCK_JOBS.findIndex(j => j.id === application.job_id);
    if (jobIndex !== -1) {
      MOCK_JOBS[jobIndex].applicants_count -= 1;
    }
    
    return {
      success: true,
      message: 'Ombi lako limefutwa kwa mafanikio'
    };
  }
}

export default new ApplicationService();
