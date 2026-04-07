import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">Doctorly</h1>
        </div>
      </div>

      {user && (
        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-gray-100 rounded-xl transition">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user.role}</p>
            </div>
            <div className="w-9 h-9 bg-sky-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl transition"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;