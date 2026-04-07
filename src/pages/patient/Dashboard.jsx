import Button from '../../components/common/Button';
import StatusBadge from '../../components/common/StatusBadge';

const PatientDashboard = () => {
  const upcoming = [
    { id: 1, doctor: "Dr. Anjali Menon", specialty: "Cardiologist", time: "Tomorrow, 10:30 AM", status: "confirmed" },
    { id: 2, doctor: "Dr. Rajesh Kumar", specialty: "General Physician", time: "15 Apr, 4:00 PM", status: "pending" },
  ];

  const recommendedDoctors = [
    { name: "Dr. Priya Sharma", specialty: "Pediatrician", rating: 4.9, fee: "₹500" },
    { name: "Dr. Arjun Nair", specialty: "Dermatologist", rating: 4.8, fee: "₹600" },
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Good morning, Jebin 👋</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your health today</p>
      </div>

      {/* Upcoming Appointments */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {upcoming.map((apt) => (
            <div key={apt.id} className="card p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{apt.doctor}</h3>
                  <p className="text-gray-600">{apt.specialty}</p>
                </div>
                <StatusBadge status={apt.status} />
              </div>
              <p className="mt-6 text-xl font-medium">{apt.time}</p>
              <div className="mt-6 flex gap-3">
                <Button className="flex-1">Reschedule</Button>
                <Button variant="danger" className="flex-1">Cancel</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Doctors */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Recommended Doctors</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {recommendedDoctors.map((doc, i) => (
            <div key={i} className="card p-6 hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-4" />
              <h3 className="text-center font-semibold">{doc.name}</h3>
              <p className="text-center text-gray-600 text-sm">{doc.specialty}</p>
              <div className="flex justify-center gap-1 my-3">
                {'★'.repeat(Math.floor(doc.rating))}
              </div>
              <p className="text-center text-sm text-gray-500">Consultation: {doc.fee}</p>
              <Button className="w-full mt-6">Book Appointment</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;