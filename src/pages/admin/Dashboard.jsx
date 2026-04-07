import { ArrowRight } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Appointments', value: '1,284', change: '+12%', color: 'text-cyan-700' },
    { label: 'Active Doctors', value: '87', change: '+3', color: 'text-emerald-600' },
    { label: 'Registered Patients', value: '3,942', change: '+89', color: 'text-sky-600' },
    { label: 'Revenue This Month', value: 'Rs. 4,82,000', change: '+18%', color: 'text-emerald-600' },
  ];

  const recentAppointments = [
    { id: 301, doctor: 'Dr. Anjali Menon', patient: 'Jebin Thomas', date: '15 Apr', time: '10:30 AM', status: 'confirmed' },
    { id: 302, doctor: 'Dr. Rajesh Kumar', patient: 'Meera Nair', date: '15 Apr', time: '11:15 AM', status: 'pending' },
    { id: 303, doctor: 'Dr. Priya Sharma', patient: 'Rahul Menon', date: '14 Apr', time: '02:00 PM', status: 'completed' },
  ];

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Admin Dashboard</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Operations overview</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Monitor platform growth, appointment activity, and revenue with a cleaner executive summary.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-7">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className={`mt-4 text-4xl font-bold tracking-[-0.05em] ${stat.color}`}>{stat.value}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              {stat.change} from last month
            </p>
          </div>
        ))}
      </section>

      <section className="card p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Recent Appointments</h2>
            <p className="mt-2 text-sm text-slate-500">A snapshot of the latest activity across the platform.</p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
            View all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-[0.18em] text-slate-400">
                <th className="py-4 font-semibold">Doctor</th>
                <th className="py-4 font-semibold">Patient</th>
                <th className="py-4 font-semibold">Date & Time</th>
                <th className="py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((apt) => (
                <tr key={apt.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-5 font-semibold text-slate-900">{apt.doctor}</td>
                  <td className="py-5 text-slate-600">{apt.patient}</td>
                  <td className="py-5 text-slate-500">{`${apt.date} • ${apt.time}`}</td>
                  <td className="py-5">
                    <StatusBadge status={apt.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
