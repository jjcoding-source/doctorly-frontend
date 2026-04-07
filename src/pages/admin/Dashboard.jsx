import StatusBadge from '../../components/common/StatusBadge';

const AdminDashboard = () => {
  const stats = [
    { label: "Total Appointments", value: "1,284", change: "+12%", color: "text-primary" },
    { label: "Active Doctors", value: "87", change: "+3", color: "text-emerald-600" },
    { label: "Registered Patients", value: "3,942", change: "+89", color: "text-blue-600" },
    { label: "Revenue This Month", value: "₹4,82,000", change: "+18%", color: "text-emerald-600" },
  ];

  const recentAppointments = [
    { id: 301, doctor: "Dr. Anjali Menon", patient: "Jebin Thomas", date: "15 Apr", time: "10:30 AM", status: "confirmed" },
    { id: 302, doctor: "Dr. Rajesh Kumar", patient: "Meera Nair", date: "15 Apr", time: "11:15 AM", status: "pending" },
    { id: 303, doctor: "Dr. Priya Sharma", patient: "Rahul Menon", date: "14 Apr", time: "02:00 PM", status: "completed" },
  ];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">System overview and key metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="card p-8">
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className={`text-4xl font-bold mt-4 ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-emerald-600 mt-2">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Recent Appointments */}
      <div className="card p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Recent Appointments</h2>
          <button className="text-primary font-medium">View All →</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 font-medium text-gray-600">Doctor</th>
                <th className="text-left py-4 font-medium text-gray-600">Patient</th>
                <th className="text-left py-4 font-medium text-gray-600">Date & Time</th>
                <th className="text-left py-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((apt) => (
                <tr key={apt.id} className="border-b last:border-0">
                  <td className="py-6 font-medium">{apt.doctor}</td>
                  <td className="py-6">{apt.patient}</td>
                  <td className="py-6 text-gray-600">
                    {apt.date} • {apt.time}
                  </td>
                  <td className="py-6">
                    <StatusBadge status={apt.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;