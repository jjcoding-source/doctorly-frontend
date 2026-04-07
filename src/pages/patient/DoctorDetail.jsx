import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/common/Button';
import BookingModal from '../../components/common/BookingModal';

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor] = useState({
    id: parseInt(id),
    name: "Dr. Anjali Menon",
    specialty: "Cardiologist",
    experience: 12,
    rating: 4.9,
    fee: 800,
    bio: "Dr. Anjali Menon is a highly experienced cardiologist with over 12 years of practice. She specializes in preventive cardiology and heart failure management.",
    reviews: 124
  });

  const [selectedDate, setSelectedDate] = useState("15 April 2026");
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const availableSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "04:00 PM"
  ];

  const handleBook = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 text-primary flex items-center gap-2 hover:underline"
      >
        ← Back to Doctors
      </button>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Doctor Info */}
        <div className="lg:col-span-5">
          <div className="card p-8">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-sky-100 to-teal-100 rounded-3xl flex items-center justify-center text-7xl mb-6">
              👩‍⚕️
            </div>
            
            <h1 className="text-4xl font-bold text-center">{doctor.name}</h1>
            <p className="text-center text-primary text-xl mt-1">{doctor.specialty}</p>

            <div className="flex justify-center gap-8 my-8 text-center">
              <div>
                <p className="text-3xl font-semibold">{doctor.experience}</p>
                <p className="text-sm text-gray-500">Years Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">{doctor.rating}</p>
                <p className="text-sm text-gray-500">Rating</p>
              </div>
              <div>
                <p className="text-3xl font-semibold">{doctor.reviews}</p>
                <p className="text-sm text-gray-500">Reviews</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>

            <div className="mt-8 pt-8 border-t">
              <p className="font-medium mb-2">Consultation Fee</p>
              <p className="text-4xl font-bold text-emerald-600">₹{doctor.fee}</p>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-7">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold mb-6">Book Appointment</h2>

            {/* Date Selector */}
            <div className="mb-8">
              <p className="font-medium mb-3">Select Date</p>
              <div className="flex gap-3 overflow-x-auto pb-4">
                {["14 Apr", "15 Apr", "16 Apr", "17 Apr", "18 Apr"].map((date, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date + " 2026")}
                    className={`px-6 py-4 rounded-2xl whitespace-nowrap transition ${
                      selectedDate.includes(date)
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <p className="font-medium mb-4">Available Time Slots</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 rounded-2xl font-medium transition border ${
                      selectedTime === time
                        ? 'bg-primary text-white border-primary'
                        : 'border-gray-300 hover:border-primary hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleBook}
              className="w-full mt-10 py-4 text-lg"
              disabled={!selectedTime}
            >
              Confirm Booking - ₹{doctor.fee}
            </Button>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctor={doctor}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onConfirm={() => {
          alert(`✅ Appointment confirmed with ${doctor.name} on ${selectedDate} at ${selectedTime}`);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default DoctorDetail;