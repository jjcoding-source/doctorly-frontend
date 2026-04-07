import { useAuth } from '../../contexts/AuthContext';
import { Bell, LogOut, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 px-4 py-4 backdrop-blur-xl md:px-8">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700/80">
            Connected Care Platform
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-[-0.04em] text-slate-900">
            Doctorly Workspace
          </h1>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="glass flex items-center gap-3 rounded-full px-4 py-3 text-sm text-slate-500 shadow-sm">
            <Search className="h-4 w-4" />
            <span>Search appointments, specialists, or records</span>
          </div>

          {user && (
            <div className="flex items-center gap-3">
              <button className="glass rounded-full p-3 text-slate-600 transition hover:bg-sky-50">
                <Bell className="h-5 w-5" />
              </button>

              <div className="glass flex items-center gap-3 rounded-full px-3 py-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sm">
                  <User className="h-5 w-5" />
                </div>
                <div className="pr-2">
                  <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                  <p className="text-xs capitalize text-slate-500">{user.role}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
