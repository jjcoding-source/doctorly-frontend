import { useState } from 'react';
import DoctorCard from '../../components/common/DoctorCard';
import BookingModal from '../../components/common/BookingModal';

const Doctors = () => {
  const [doctors] = useState([
    { id: 1, name: "Dr. Anjali Menon", specialty: "Cardiologist", experience: 12, rating: 4.9, fee: 800 },
    { id: 2, name: "Dr. Rajesh Kumar", specialty: "General Physician", experience: 8, rating: 4.7, fee: 500 },
    { id: 3, name: "Dr. Priya Sharma", specialty: "Pediatrician", experience: 15, rating: 4.8, fee: 600 },
    { id: 4, name: "Dr. Arjun Nair", specialty: "Dermatologist", experience: 9, rating: 4.6, fee: 700 },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("15 April 2026");
  const [selectedTime, setSelectedTime] = useState("");

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
    setSelectedTime("10:30 AM"); 
  };

  const handleConfirmBooking = () => {
    alert(`✅ Appointment booked with ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Find Doctors</h1>
        <p className="text-gray-600 mt-2">Book appointments with verified specialists</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-3xl mb-8 shadow-sm flex flex-wrap gap-4">
        <input 
          type="text" 
          placeholder="Search doctors or specialties..." 
          className="flex-1 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-primary"
        />
        <select className="px-5 py-3 border border-gray-300 rounded-2xl">
          <option>All Specialties</option>
          <option>Cardiologist</option>
          <option>Pediatrician</option>
          <option>Dermatologist</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <DoctorCard 
            key={doctor.id} 
            doctor={doctor} 
            onBookNow={handleBookNow} 
          />
        ))}
      </div>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={selectedDoctor}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
};

export default Doctors;