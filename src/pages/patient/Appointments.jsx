import { useState } from 'react';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';

const PatientAppointments = () => {
  const [appointments] = useState([
    {
      id: 101,
      doctor: "Dr. Anjali Menon",
      specialty: "Cardiologist",
      date: "15 April 2026",
      time: "10:30 AM",
      status: "confirmed",
      fee: 800
    },
    {
      id: 102,
      doctor: "Dr. Rajesh Kumar",
      specialty: "General Physician",
      date: "18 April 2026",
      time: "04:00 PM",
      status: "pending",
      fee: 500
    },
    {
      id: 103,
      doctor: "Dr. Priya Sharma",
      specialty: "Pediatrician",
      date: "05 April 2026",
      time: "11:00 AM",
      status: "completed",
      fee: 600
    },
    {
      id: 104,
      doctor: "Dr. Arjun Nair",
      specialty: "Dermatologist",
      date: "02 April 2026",
      time: "02:30 PM",
      status: "cancelled",
      fee: 700
    }
  ]);

  const [activeTab, setActiveTab] = useState('upcoming'); // upcoming, past, cancelled

  const filteredAppointments = appointments.filter(apt => {
    if (activeTab === 'upcoming') return ['confirmed', 'pending'].includes(apt.status);
    if (activeTab === 'past') return apt.status === 'completed';
    if (activeTab === 'cancelled') return apt.status === 'cancelled';
    return true;
  });

  const handleCancel = (id) => {
    if (confirm("Cancel this appointment?")) {
      alert(`Appointment #${id} cancelled successfully.`);
      // In real app: API call to update status
    }
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-800">My Appointments</h1>
        <p className="text-gray-600 mt-2">Manage your upcoming and past appointments</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        {['upcoming', 'past', 'cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 font-medium capitalize transition-all border-b-2 ${
              activeTab === tab 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'upcoming' ? 'Upcoming' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredAppointments.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No appointments found in this category.
          </div>
        ) : (
          filteredAppointments.map((apt) => (
            <div key={apt.id} className="card p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-2xl">{apt.doctor}</h3>
                    <p className="text-primary">{apt.specialty}</p>
                  </div>
                  <StatusBadge status={apt.status} />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-8 text-sm">
                  <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-medium text-lg">{apt.date}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Time</p>
                    <p className="font-medium text-lg">{apt.time}</p>
                  </div>
                </div>
              </div>

              <div className="md:text-right">
                <p className="text-emerald-600 font-semibold text-xl">₹{apt.fee}</p>
                
                {apt.status === 'confirmed' || apt.status === 'pending' ? (
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" className="px-6">Reschedule</Button>
                    <Button 
                      variant="danger" 
                      className="px-6"
                      onClick={() => handleCancel(apt.id)}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button variant="outline" className="mt-6">View Details</Button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientAppointments;