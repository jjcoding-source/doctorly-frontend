import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ role }) => {
  const { logout } = useAuth();
  const location = useLocation();

  const patientMenu = [
    { icon: Home, label: 'Dashboard', path: '/patient/dashboard' },
    { icon: Calendar, label: 'My Appointments', path: '/patient/appointments' },
    { icon: Users, label: 'Find Doctors', path: '/patient/doctors' },
    { icon: User, label: 'Profile', path: '/patient/profile' },
  ];

  const doctorMenu = [
    { icon: Home, label: 'Dashboard', path: '/doctor/dashboard' },
    { icon: Calendar, label: 'Schedule', path: '/doctor/schedule' },
    { icon: Users, label: 'Appointments', path: '/doctor/appointments' },
    { icon: User, label: 'My Patients', path: '/doctor/patients' },
  ];

  const adminMenu = [
    { icon: Home, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Calendar, label: 'Appointments', path: '/admin/appointments' },
  ];

  const menu = role === 'patient' ? patientMenu : role === 'doctor' ? doctorMenu : adminMenu;

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">D</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">Doctorly</span>
        </div>
      </div>

      <div className="flex-1 p-4">
        <nav className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-3 text-red-600 hover:bg-red-50 rounded-xl"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;