import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful! (Demo mode)');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 md:p-10 lg:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Create Account</p>
            <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">
              Join Doctorly in a few steps
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Build a patient account and explore the refreshed care journey.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label className="field-label">Full Name</label>
                <input
                  type="text"
                  className="field-input"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="field-label">Email</label>
                <input
                  type="email"
                  className="field-input"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="field-label">Password</label>
                <input
                  type="password"
                  className="field-input"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="field-label">Account Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {['patient', 'doctor'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFormData({ ...formData, role: item })}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold capitalize transition ${
                        formData.role === item
                          ? 'bg-cyan-600 text-white shadow-soft'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full py-4 text-base">
                Create Account
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-cyan-700 transition hover:text-cyan-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="hero-gradient hidden p-10 lg:block">
          <div className="h-full rounded-[2rem] border border-sky-200/80 bg-white/55 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Member Benefits</p>
            <div className="mt-6 space-y-4">
              {[
                'Book specialist appointments in moments',
                'Track schedules and follow-ups in one place',
                'Experience a cleaner, more modern patient portal',
              ].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-sky-100 bg-white/85 p-4 text-sm leading-7 text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
