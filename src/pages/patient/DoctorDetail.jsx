import { ArrowLeft, CalendarDays, Clock3, IndianRupee, Star, Stethoscope } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookingModal from '../../components/common/BookingModal';
import Button from '../../components/common/Button';

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor] = useState({
    id: Number.parseInt(id, 10),
    name: 'Dr. Anjali Menon',
    specialty: 'Cardiologist',
    experience: 12,
    rating: 4.9,
    fee: 800,
    bio: 'Dr. Anjali Menon is a highly experienced cardiologist focused on preventive care, heart failure management, and patient education.',
    reviews: 124,
  });
  const [selectedDate, setSelectedDate] = useState('15 April 2026');
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const availableSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '04:00 PM'];

  const handleBook = () => {
    if (!selectedTime) {
      alert('Please select a time slot');
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
        <ArrowLeft className="h-4 w-4" />
        Back to doctors
      </button>

      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="card p-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-cyan-100 to-emerald-100 text-cyan-700">
            <Stethoscope className="h-12 w-12" />
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-[-0.05em] text-slate-900">{doctor.name}</h1>
          <p className="mt-2 text-lg font-medium text-cyan-700">{doctor.specialty}</p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-[1.3rem] bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{doctor.experience}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Years</p>
            </div>
            <div className="rounded-[1.3rem] bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{doctor.rating}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Rating</p>
            </div>
            <div className="rounded-[1.3rem] bg-slate-50 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{doctor.reviews}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Reviews</p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-8 text-slate-600">{doctor.bio}</p>

          <div className="mt-8 flex items-center gap-2 text-3xl font-bold tracking-[-0.05em] text-emerald-600">
            <IndianRupee className="h-6 w-6" />
            {doctor.fee}
            <span className="text-sm font-medium text-slate-400">consultation fee</span>
          </div>
        </section>

        <section className="card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Book Appointment</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-slate-900">Choose a date and time</h2>

          <div className="mt-8">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <CalendarDays className="h-4 w-4" />
              Select Date
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {['14 Apr', '15 Apr', '16 Apr', '17 Apr', '18 Apr'].map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(`${date} 2026`)}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold whitespace-nowrap transition ${
                    selectedDate.includes(date)
                      ? 'bg-slate-900 text-white shadow-soft'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Clock3 className="h-4 w-4" />
              Available Time Slots
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {availableSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                    selectedTime === time
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:bg-cyan-50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-700">Selected consultation</p>
                <p className="mt-2 text-sm text-slate-500">{selectedDate}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-600">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {doctor.rating}
              </div>
            </div>
          </div>

          <Button onClick={handleBook} className="mt-8 w-full py-4 text-base" disabled={!selectedTime}>
            Confirm Booking
          </Button>
        </section>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={doctor}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onConfirm={() => {
          alert(`Appointment confirmed with ${doctor.name} on ${selectedDate} at ${selectedTime}`);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default DoctorDetail;
