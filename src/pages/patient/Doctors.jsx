import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import BookingModal from '../../components/common/BookingModal';
import DoctorCard from '../../components/common/DoctorCard';

const Doctors = () => {
  const [doctors] = useState([
    { id: 1, name: 'Dr. Anjali Menon', specialty: 'Cardiologist', experience: 12, rating: 4.9, fee: 800 },
    { id: 2, name: 'Dr. Rajesh Kumar', specialty: 'General Physician', experience: 8, rating: 4.7, fee: 500 },
    { id: 3, name: 'Dr. Priya Sharma', specialty: 'Pediatrician', experience: 15, rating: 4.8, fee: 600 },
    { id: 4, name: 'Dr. Arjun Nair', specialty: 'Dermatologist', experience: 9, rating: 4.6, fee: 700 },
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate] = useState('15 April 2026');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedTime('10:30 AM');
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    alert(`Appointment booked with ${selectedDoctor.name} on ${selectedDate} at ${selectedTime}`);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Doctor Discovery</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Find the right specialist</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Search by specialty and browse a cleaner set of doctor cards with faster booking actions.
        </p>
      </section>

      <section className="card p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
          <label className="glass flex items-center gap-3 rounded-[1.5rem] px-4 py-3">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search doctors or specialties"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>

          <select className="field-input min-w-52">
            <option>All Specialties</option>
            <option>Cardiologist</option>
            <option>Pediatrician</option>
            <option>Dermatologist</option>
          </select>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} onBookNow={handleBookNow} />
        ))}
      </section>

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
