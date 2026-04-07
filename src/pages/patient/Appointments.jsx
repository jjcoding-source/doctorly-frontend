import { CalendarDays, Clock3, IndianRupee } from 'lucide-react';
import { useState } from 'react';
import Button from '../../components/common/Button';
import StatusBadge from '../../components/common/StatusBadge';

const PatientAppointments = () => {
  const [appointments] = useState([
    {
      id: 101,
      doctor: 'Dr. Anjali Menon',
      specialty: 'Cardiologist',
      date: '15 April 2026',
      time: '10:30 AM',
      status: 'confirmed',
      fee: 800,
    },
    {
      id: 102,
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'General Physician',
      date: '18 April 2026',
      time: '04:00 PM',
      status: 'pending',
      fee: 500,
    },
    {
      id: 103,
      doctor: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      date: '05 April 2026',
      time: '11:00 AM',
      status: 'completed',
      fee: 600,
    },
    {
      id: 104,
      doctor: 'Dr. Arjun Nair',
      specialty: 'Dermatologist',
      date: '02 April 2026',
      time: '02:30 PM',
      status: 'cancelled',
      fee: 700,
    },
  ]);
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredAppointments = appointments.filter((apt) => {
    if (activeTab === 'upcoming') return ['confirmed', 'pending'].includes(apt.status);
    if (activeTab === 'past') return apt.status === 'completed';
    if (activeTab === 'cancelled') return apt.status === 'cancelled';
    return true;
  });

  const handleCancel = (id) => {
    if (confirm('Cancel this appointment?')) {
      alert(`Appointment #${id} cancelled successfully.`);
    }
  };

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Appointments</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Manage your bookings</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Keep upcoming consultations organized, revisit past visits, and handle changes with less friction.
        </p>
      </section>

      <section className="flex flex-wrap gap-3">
        {['upcoming', 'past', 'cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pill-tab ${
              activeTab === tab
                ? 'bg-slate-900 text-white shadow-soft'
                : 'border-slate-200 bg-white/80 text-slate-500 hover:border-cyan-200 hover:text-cyan-700'
            }`}
          >
            {tab === 'upcoming' ? 'Upcoming' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </section>

      <section className="space-y-5">
        {filteredAppointments.length === 0 ? (
          <div className="card p-16 text-center text-slate-500">No appointments found in this category.</div>
        ) : (
          filteredAppointments.map((apt) => (
            <div key={apt.id} className="card p-6 md:p-7">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex-1">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">{apt.doctor}</h3>
                      <p className="mt-1 text-sm font-medium text-cyan-700">{apt.specialty}</p>
                    </div>
                    <StatusBadge status={apt.status} />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-[1.3rem] bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        <CalendarDays className="h-4 w-4" />
                        Date
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-800">{apt.date}</p>
                    </div>
                    <div className="rounded-[1.3rem] bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        <Clock3 className="h-4 w-4" />
                        Time
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-800">{apt.time}</p>
                    </div>
                    <div className="rounded-[1.3rem] bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        <IndianRupee className="h-4 w-4" />
                        Fee
                      </div>
                      <p className="mt-3 text-sm font-semibold text-emerald-600">{apt.fee}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row xl:flex-col">
                  {apt.status === 'confirmed' || apt.status === 'pending' ? (
                    <>
                      <Button variant="outline">Reschedule</Button>
                      <Button variant="danger" onClick={() => handleCancel(apt.id)}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline">View Details</Button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default PatientAppointments;
