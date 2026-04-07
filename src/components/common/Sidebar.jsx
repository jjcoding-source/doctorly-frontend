import { Calendar, Home, LogOut, Stethoscope, User, Users } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ role }) => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const patientMenu = [
    { icon: Home, label: 'Dashboard', path: '/patient/dashboard' },
    { icon: Calendar, label: 'Appointments', path: '/patient/appointments' },
    { icon: Stethoscope, label: 'Find Doctors', path: '/patient/doctors' },
    { icon: User, label: 'Profile', path: '/patient/profile' },
  ];

  const doctorMenu = [
    { icon: Home, label: 'Dashboard', path: '/doctor/dashboard' },
    { icon: Calendar, label: 'Schedule', path: '/doctor/schedule' },
    { icon: User, label: 'Profile', path: '/doctor/profile' },
  ];

  const adminMenu = [
    { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: User, label: 'Profile', path: '/admin/profile' },
    { icon: Users, label: 'Community', path: '/admin/dashboard' },
  ];

  const menu = role === 'doctor' ? doctorMenu : role === 'admin' ? adminMenu : patientMenu;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="hidden w-80 flex-col border-r border-sky-100 bg-white px-6 py-6 text-slate-800 lg:flex">
      <div className="rounded-[2rem] border border-sky-100 bg-sky-50/70 p-5 shadow-soft">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-xl font-black text-white">
            D
          </div>
          <div>
            <p className="text-lg font-bold tracking-[-0.04em] text-slate-900">Doctorly</p>
            <p className="text-sm text-slate-500">Modern care operations</p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-white p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-sky-700/80">Logged In As</p>
          <p className="mt-2 text-base font-semibold text-slate-900">{user?.name || 'Guest'}</p>
          <p className="text-sm capitalize text-slate-500">{role}</p>
        </div>
      </div>

      <nav className="mt-8 flex-1 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-sky-600 text-white shadow-soft'
                  : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-sky-600 group-hover:text-sky-700'}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-100 bg-white px-4 py-3.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
