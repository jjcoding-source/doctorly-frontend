import { Link } from 'react-router-dom';
import Button from './Button';

const DoctorCard = ({ doctor, onBookNow }) => {
  return (
    <div className="card p-6 hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-sky-100 to-teal-100 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-105 transition">
          👨‍⚕️
        </div>
        
        <h3 className="font-semibold text-xl mb-1">{doctor.name}</h3>
        <p className="text-primary font-medium">{doctor.specialty}</p>
        
        <div className="flex items-center gap-1 my-3 text-amber-500">
          ★★★★☆ <span className="text-gray-500 text-sm ml-1">({doctor.rating})</span>
        </div>

        <p className="text-sm text-gray-600 mb-1">Experience: {doctor.experience} years</p>
        <p className="text-lg font-semibold text-emerald-600">₹{doctor.fee}</p>

        <div className="mt-6 w-full space-y-3">
          <Link to={`/patient/doctors/${doctor.id}`} className="block">
            <Button variant="outline" className="w-full">View Profile</Button>
          </Link>
          <Button onClick={() => onBookNow(doctor)} className="w-full">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;