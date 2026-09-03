import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Briefcase, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(email, password);
      
      if (result.success) {
        // Redirect based on role
        const user = result.user;
        if (user.role === 'admin') {
          navigate('/admin/dashboard');
        } else if (user.role === 'employer') {
          navigate('/employer/dashboard');
        } else {
          navigate('/jobseeker/dashboard');
        }
      } else {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Briefcase className="text-damy-accent" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-damy-primary">Karibu Tena!</h2>
          <p className="text-gray-600">Ingia kwenye akaunti yako</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Barua Pepe
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent"
                placeholder="mwanajob@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nenosiri
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-damy-accent focus:border-transparent pr-12"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Inasubiri...
                </>
              ) : (
                'Ingia'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <Link to="/forgot-password" className="text-damy-accent hover:underline block mb-2">
            Umesahau nenosiri?
          </Link>
          <p>
            Huna akaunti?{' '}
            <Link to="/register" className="text-damy-accent font-semibold hover:underline">
              Jisajili hapa
            </Link>
          </p>
        </div>
        
        <p className="text-center text-sm mt-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            ← Rudi kwenye Landing Page
          </Link>
        </p>

        {/* Mock Credentials Info */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 text-center">📝 Akaunti za majaribio:</p>
          <div className="text-xs text-gray-500 mt-1 space-y-1">
            <p>Admin: admin@jobportal.com / password123</p>
            <p>Mwajiri: hr@techco.com / password123</p>
            <p>Mtafuta Kazi: john@gmail.com / password123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
