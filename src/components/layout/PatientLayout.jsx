import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';

const PatientLayout = () => {
  const { user } = useAuth();
  const role = user?.role || 'patient';

  return (
    <div className="app-shell lg:flex">
      <Sidebar role={role} />

      <div className="min-w-0 flex-1">
        <Navbar />
        <main className="p-4 md:p-6 lg:p-8">
          <div className="page-shell">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-cyan-100/60 via-white/10 to-emerald-100/50" />
            <div className="relative p-5 md:p-8 lg:p-10">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientLayout;
