import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from 'sonner';

import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Register from './pages/public/Register';

import PatientLayout from './components/layout/PatientLayout';
import PatientDashboard from './pages/patient/Dashboard';
import Doctors from './pages/patient/Doctors';
import DoctorDetail from './pages/patient/DoctorDetail';
import PatientAppointments from './pages/patient/Appointments';

import DoctorDashboard from './pages/doctor/Dashboard';
import DoctorSchedule from './pages/doctor/Schedule';

import AdminDashboard from './pages/admin/Dashboard';

import ProtectedRoute from './routes/ProtectedRoute';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Patient Routes */}
            <Route element={<ProtectedRoute allowedRoles={['patient']} />}>
              <Route element={<PatientLayout />}>
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/patient/doctors" element={<Doctors />} />
                <Route path="/patient/doctors/:id" element={<DoctorDetail />} />
                <Route path="/patient/appointments" element={<PatientAppointments />} />
                <Route path="/patient/profile" element={<Profile />} />
              </Route>
            </Route>

            {/* Doctor Routes */}
            <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
              <Route element={<PatientLayout />}>
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/doctor/schedule" element={<DoctorSchedule />} />
                <Route path="/doctor/profile" element={<Profile />} />
              </Route>
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route element={<PatientLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/profile" element={<Profile />} />
              </Route>
            </Route>

            {/* 404 */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gray-300">404</h1>
                  <p className="text-2xl mt-4">Page Not Found</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
        <Toaster position="top-right" richColors />
      </Router>
    </AuthProvider>
  );
}

export default App;   