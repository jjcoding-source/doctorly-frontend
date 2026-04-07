import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/common/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const demoUsers = {
      patient: { id: 1, name: "Jebin Thomas", email, role: "patient" },
      doctor: { id: 2, name: "Dr. Anjali Menon", email, role: "doctor" },
      admin: { id: 3, name: "Admin", email, role: "admin" },
    };

    login(demoUsers[role]);
    
    if (role === 'patient') navigate('/patient/dashboard');
    else if (role === 'doctor') navigate('/doctor/dashboard');
    else navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="card w-full max-w-md p-10">
        <div className="text-center mb-10">
          <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
            <span className="text-white text-4xl font-bold">D</span>
          </div>
          <h2 className="text-3xl font-semibold">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your Doctorly account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Login As</label>
            <div className="grid grid-cols-3 gap-3">
              {['patient', 'doctor', 'admin'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`py-3 rounded-xl text-sm font-medium capitalize transition
                    ${role === r 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full py-4 text-lg">
            Sign In
          </Button>
        </form>

        <p className="text-center mt-8 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary hover:underline font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;