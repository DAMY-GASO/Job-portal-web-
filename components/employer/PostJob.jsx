import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, X, Upload, DollarSign, MapPin, Briefcase, Clock } from 'lucide-react';

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: 'full-time',
    location: '',
    salary_min: '',
    salary_max: '',
    description: '',
    requirements: '',
    benefits: '',
    deadline: '',
    is_featured: false
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const categories = [
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Sales',
    'Marketing',
    'Engineering',
    'Hospitality',
    'Construction',
    'Agriculture',
    'Transport',
    'Other'
  ];

  const jobTypes = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'remote', label: 'Remote' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Jina la nafasi inahitajika';
    if (!formData.category) newErrors.category = 'Kategoria inahitajika';
    if (!formData.location) newErrors.location = 'Eneo inahitajika';
    if (!formData.description) newErrors.description = 'Maelezo inahitajika';
    if (!formData.requirements) newErrors.requirements = 'Mahitaji inahitajika';
    if (!formData.deadline) newErrors.deadline = 'Tarehe ya mwisho inahitajika';
    if (formData.salary_min && formData.salary_max && 
        parseInt(formData.salary_min) > parseInt(formData.salary_max)) {
      newErrors.salary = 'Kiwango cha chini hakiwezi kuwa kikubwa kuliko cha juu';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Mock submission - hii itabadilishwa na API baadae
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newJob = {
        id: Date.now(),
        ...formData,
        postedDate: new Date().toISOString(),
        status: 'pending',
        applicants: 0,
        views: 0,
        employer: 'Your Company' // Hii itatoka kwenye user profile
      };

      // Save to localStorage for mock data
      const existingJobs = JSON.parse(localStorage.getItem('employerJobs') || '[]');
      localStorage.setItem('employerJobs', JSON.stringify([newJob, ...existingJobs]));

      alert('Tangazo limewekwa kwa mafanikio! Liko katika kuidhinishwa na Admin.');
      navigate('/employer/my-jobs');
    } catch (error) {
      alert('Kuna tatizo. Tafadhali jaribu tena.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-damy-primary flex items-center gap-2">
          <PlusCircle className="text-damy-accent" size={28} />
          Tangaza Nafasi Mpya ya Kazi
        </h2>
        <span className="text-sm text-gray-500">Jaza taarifa zote hapa chini</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jina la Nafasi <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent`}
            placeholder="Mfano: Software Engineer, Accountant, Sales Manager"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategoria <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-3 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent`}
            >
              <option value="">Chagua kategoria</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Aina ya Kazi <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
            >
              {jobTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Eneo <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent`}
              placeholder="Mfano: Dar es Salaam, Arusha, Mwanza"
            />
          </div>
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>

        {/* Salary Range */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kiwango cha Chini (TSh)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="number"
                name="salary_min"
                value={formData.salary_min}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                placeholder="500,000"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kiwango cha Juu (TSh)
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="number"
                name="salary_max"
                value={formData.salary_max}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                placeholder="1,500,000"
              />
            </div>
          </div>
          {errors.salary && <p className="text-red-500 text-sm mt-1 col-span-2">{errors.salary}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maelezo ya Kazi <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent`}
            placeholder="Eleza kazi hii kwa undani... Majukumu, mazingira ya kazi, n.k."
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mahitaji <span className="text-red-500">*</span>
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="3"
            className={`w-full px-4 py-3 border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent`}
            placeholder="Orodhesha mahitaji... Elimu, uzoefu, stadi, n.k."
          />
          {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
        </div>

        {/* Benefits */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Faida (Optional)
          </label>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
            placeholder="Mfano: Bima ya afya, posho za usafiri, mafunzo, n.k."
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tarehe ya Mwisho <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border ${errors.deadline ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent`}
            />
          </div>
          {errors.deadline && <p className="text-red-500 text-sm mt-1">{errors.deadline}</p>}
        </div>

        {/* Featured Job */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="is_featured"
            checked={formData.is_featured}
            onChange={handleChange}
            className="w-5 h-5 text-damy-accent rounded focus:ring-damy-accent"
          />
          <label className="text-sm text-gray-700">
            <span className="font-semibold">Tangazo Lililonakshiwa (Featured)</span>
            <span className="text-gray-500 ml-2">— Tangazo litaonekana juu na kuvutia waombaji wengi</span>
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-4 border-t">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 btn-primary py-3 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span>
                Inasubiri...
              </>
            ) : (
              <>
                <PlusCircle size={20} />
                Tangaza Ajira
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate('/employer/dashboard')}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Ghairi
          </button>
        </div>

        <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold">ℹ️ Vidokezo:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Tangazo litaidhinishwa na Admin kabla ya kuwekwa hadharani</li>
            <li>Unaweza kuhariri au kufuta tangazo wakati wowote</li>
            <li>Tangazo lililonakshiwa lina gharama ya TSh 50,000 kwa wiki</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
