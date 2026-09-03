import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'job_seeker'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mfumo wa kujisajili utaunganishwa baadae!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Briefcase className="text-damy-accent" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-damy-primary">Jisajili Bure</h2>
          <p className="text-gray-600">Undaa akaunti yako kwa dakika chache</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jina Kamili
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                placeholder="Jina lako"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Barua Pepe
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                placeholder="mwanajob@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nenosiri
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ninayejiandikisha kama
              </label>
              <select
                name="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="job_seeker">Mtafuta Kazi</option>
                <option value="employer">Mwajiri</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3"
            >
              Jisajili Sasa
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Tuna akaunti?{' '}
          <Link to="/login" className="text-damy-accent font-semibold hover:underline">
            Ingia hapa
          </Link>
        </p>
        
        <p className="text-center text-sm mt-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            ← Rudi kwenye Landing Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
