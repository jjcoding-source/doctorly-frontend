import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "sonner";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

import PatientDashboard from "./pages/patient/Dashboard";
import Doctors from "./pages/patient/Doctors";
import Doctors from './pages/patient/Doctors';
import DoctorDetail from './pages/patient/DoctorDetail';

import DoctorDashboard from "./pages/doctor/Dashboard";

import AdminDashboard from "./pages/admin/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Patient Routes */}
            <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
              <Route element={<PatientLayout />}>
                <Route
                  path="/patient/dashboard"
                  element={<PatientDashboard />}
                />
                <Route path="/patient/doctors" element={<Doctors />} />
                <Route path="/patient/doctors/:id" element={<DoctorDetail />} />
              </Route>
            </Route>

            {/* Doctor Routes */}
            <Route element={<ProtectedRoute allowedRoles={["doctor"]} />}>
              <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>

            <Route
              path="*"
              element={
                <h1 className="text-center mt-20 text-2xl">
                  404 - Page Not Found
                </h1>
              }
            />
          </Routes>
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
