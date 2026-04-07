import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import PatientLayout from './components/layout/PatientLayout';
import { AuthProvider } from './contexts/AuthContext';
import AdminDashboard from './pages/admin/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import DoctorSchedule from './pages/doctor/Schedule';
import PatientAppointments from './pages/patient/Appointments';
import PatientDashboard from './pages/patient/Dashboard';
import DoctorDetail from './pages/patient/DoctorDetail';
import Doctors from './pages/patient/Doctors';
import Profile from './pages/profile/Profile';
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute allowedRoles={['patient']} />}>
              <Route element={<PatientLayout />}>
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/patient/doctors" element={<Doctors />} />
                <Route path="/patient/doctors/:id" element={<DoctorDetail />} />
                <Route path="/patient/appointments" element={<PatientAppointments />} />
                <Route path="/patient/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
              <Route element={<PatientLayout />}>
                <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                <Route path="/doctor/schedule" element={<DoctorSchedule />} />
                <Route path="/doctor/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route element={<PatientLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/profile" element={<Profile />} />
              </Route>
            </Route>

            <Route
              path="*"
              element={
                <div className="flex min-h-screen items-center justify-center px-6">
                  <div className="card max-w-lg p-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">
                      Error 404
                    </p>
                    <h1 className="mt-4 text-5xl font-bold tracking-[-0.05em] text-slate-900">
                      Page not found
                    </h1>
                    <p className="mt-4 text-slate-600">
                      The page you were looking for doesn&apos;t exist or has been moved.
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
        <Toaster position="top-right" richColors />
      </Router>
    </AuthProvider>
  );
}

export default App;
