import { useState } from 'react';
import Button from '../../components/common/Button';

const DoctorSchedule = () => {
  const [slots, setSlots] = useState([
    { id: 1, day: "Monday", time: "09:00 AM - 01:00 PM", type: "Available" },
    { id: 2, day: "Tuesday", time: "02:00 PM - 06:00 PM", type: "Available" },
    { id: 3, day: "Wednesday", time: "Blocked", type: "Blocked" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">My Schedule</h1>
        <Button onClick={() => setShowAddForm(true)}>Add New Slot</Button>
      </div>

      <div className="card p-8">
        <h2 className="text-xl font-semibold mb-6">Weekly Availability</h2>
        
        <div className="space-y-4">
          {slots.map((slot) => (
            <div key={slot.id} className="flex items-center justify-between p-6 border border-gray-200 rounded-2xl">
              <div>
                <p className="font-medium text-lg">{slot.day}</p>
                <p className="text-gray-600">{slot.time}</p>
              </div>
              <div className={`px-5 py-2 rounded-full text-sm font-medium ${
                slot.type === 'Available' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
              }`}>
                {slot.type}
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Slot Modal Simulation */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-6">Add Availability Slot</h3>
            <p className="text-gray-600 mb-8">This is a demo form. In real app it would be more advanced.</p>
            
            <Button onClick={() => {
              alert("Slot added successfully!");
              setShowAddForm(false);
            }} className="w-full">
              Save Slot
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowAddForm(false)}
              className="w-full mt-4"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorSchedule;