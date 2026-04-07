import { useState } from 'react';
import Button from '../../components/common/Button';
import StatusBadge from '../../components/common/StatusBadge';

const DoctorSchedule = () => {
  const [slots] = useState([
    { id: 1, day: 'Monday', time: '09:00 AM - 01:00 PM', type: 'available' },
    { id: 2, day: 'Tuesday', time: '02:00 PM - 06:00 PM', type: 'available' },
    { id: 3, day: 'Wednesday', time: 'Blocked', type: 'blocked' },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-8">
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Schedule</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Manage weekly availability</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Keep your clinic hours updated so patients always see accurate booking windows.
          </p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>Add New Slot</Button>
      </section>

      <section className="card p-8">
        <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Weekly Availability</h2>
        <div className="mt-6 space-y-4">
          {slots.map((slot) => (
            <div key={slot.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-bold text-slate-900">{slot.day}</p>
                  <p className="mt-1 text-sm text-slate-500">{slot.time}</p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={slot.type} />
                  <Button variant="outline">Edit</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="card w-full max-w-md p-8">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Add Availability Slot</h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              This demo modal stands in for a richer schedule editor.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Button
                onClick={() => {
                  alert('Slot added successfully!');
                  setShowAddForm(false);
                }}
              >
                Save Slot
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSchedule;
