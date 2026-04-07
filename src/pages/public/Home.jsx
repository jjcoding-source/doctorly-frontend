import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-teal-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Book Doctor Appointments<br />
            <span className="text-teal-200">Instantly & Easily</span>
          </h1>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Connect with top doctors near you. Choose time slots, book instantly, and manage your health journey.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register">
              <Button className="px-10 py-4 text-lg">Get Started as Patient</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="px-10 py-4 text-lg border-white text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12">Why Choose Doctorly?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Instant Booking", desc: "Book appointments in under 60 seconds" },
            { title: "Verified Doctors", desc: "All doctors are verified and experienced" },
            { title: "Smart Calendar", desc: "Real-time availability and easy rescheduling" },
          ].map((feature, i) => (
            <div key={i} className="card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;