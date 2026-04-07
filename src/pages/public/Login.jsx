import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const demoUsers = {
      patient: { id: 1, name: 'Jebin Thomas', email, role: 'patient' },
      doctor: { id: 2, name: 'Dr. Anjali Menon', email, role: 'doctor' },
      admin: { id: 3, name: 'Admin', email, role: 'admin' },
    };

    login(demoUsers[role]);

    if (role === 'patient') navigate('/patient/dashboard');
    else if (role === 'doctor') navigate('/doctor/dashboard');
    else navigate('/admin/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
        <div className="hero-gradient hidden p-10 lg:block">
          <div className="h-full rounded-[1.75rem] border border-sky-200/80 bg-white/55 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Welcome Back</p>
            <h1 className="mt-5 text-5xl font-extrabold tracking-[-0.06em] text-slate-900">
              Step back into a smoother care workflow.
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Switch between patient, doctor, and admin demo roles to explore the refreshed experience.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Sign In</p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Access your workspace</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Use any email and password in this demo. Pick a role to preview each dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="field-label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="field-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="field-input"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div>
                <label className="field-label">Continue As</label>
                <div className="grid grid-cols-3 gap-3">
                  {['patient', 'doctor', 'admin'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setRole(item)}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold capitalize transition ${
                        role === item
                          ? 'bg-slate-900 text-white shadow-soft'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full py-4 text-base">
                Sign In
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="font-semibold text-cyan-700 transition hover:text-cyan-800">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
