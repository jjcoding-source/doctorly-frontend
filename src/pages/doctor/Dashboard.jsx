import StatusBadge from '../../components/common/StatusBadge';

const DoctorDashboard = () => {
  const todayAppointments = [
    { id: 201, patient: "Jebin Thomas", time: "10:30 AM", reason: "Chest pain follow-up", status: "confirmed" },
    { id: 202, patient: "Meera Nair", time: "11:15 AM", reason: "Routine checkup", status: "pending" },
    { id: 203, patient: "Rahul Menon", time: "02:00 PM", reason: "Skin allergy", status: "confirmed" },
  ];

  const stats = [
    { label: "Today's Patients", value: "8", color: "text-primary" },
    { label: "This Week", value: "34", color: "text-emerald-600" },
    { label: "Pending Requests", value: "3", color: "text-amber-600" },
  ];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Good morning, Dr. Anjali 👋</h1>
        <p className="text-gray-600 mt-2">Here's your schedule for today</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="card p-8">
            <p className="text-gray-600">{stat.label}</p>
            <p className={`text-5xl font-bold mt-3 ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Today's Appointments</h2>
          <button className="text-primary font-medium">View Full Schedule →</button>
        </div>

        <div className="space-y-4">
          {todayAppointments.map((apt) => (
            <div key={apt.id} className="card p-6 flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{apt.patient}</h3>
                  <p className="text-gray-600 text-sm">{apt.reason}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium">{apt.time}</p>
                <StatusBadge status={apt.status} />
              </div>

              <div className="flex gap-3">
                <button className="px-5 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-medium hover:bg-green-200">
                  Start
                </button>
                <button className="px-5 py-2 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50">
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;