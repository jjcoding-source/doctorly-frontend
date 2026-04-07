import { ArrowRight, CalendarClock, ClipboardList, Users } from 'lucide-react';
import StatusBadge from '../../components/common/StatusBadge';

const DoctorDashboard = () => {
  const todayAppointments = [
    { id: 201, patient: 'Jebin Thomas', time: '10:30 AM', reason: 'Chest pain follow-up', status: 'confirmed' },
    { id: 202, patient: 'Meera Nair', time: '11:15 AM', reason: 'Routine checkup', status: 'pending' },
    { id: 203, patient: 'Rahul Menon', time: '02:00 PM', reason: 'Skin allergy', status: 'confirmed' },
  ];

  const stats = [
    { label: "Today's Patients", value: '8', icon: Users, tone: 'text-cyan-700' },
    { label: 'This Week', value: '34', icon: CalendarClock, tone: 'text-emerald-600' },
    { label: 'Pending Requests', value: '3', icon: ClipboardList, tone: 'text-amber-600' },
  ];

  return (
    <div className="space-y-10">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Doctor Dashboard</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.05em] text-slate-900">Good morning, Dr. Anjali</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Here&apos;s a sharper view of today&apos;s patient flow, outstanding requests, and appointments that need your attention.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-slate-50">
                <Icon className={`h-6 w-6 ${stat.tone}`} />
              </div>
              <p className="mt-6 text-sm text-slate-500">{stat.label}</p>
              <p className={`mt-2 text-5xl font-bold tracking-[-0.05em] ${stat.tone}`}>{stat.value}</p>
            </div>
          );
        })}
      </section>

      <section className="card p-7">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Today&apos;s Appointments</h2>
            <p className="mt-2 text-sm text-slate-500">A cleaner queue for the patients you&apos;re seeing today.</p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
            View full schedule
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          {todayAppointments.map((apt) => (
            <div key={apt.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{apt.patient}</h3>
                  <p className="mt-1 text-sm text-slate-500">{apt.reason}</p>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-sm font-semibold text-slate-700">{apt.time}</p>
                  <StatusBadge status={apt.status} />
                </div>

                <div className="flex gap-3">
                  <button className="rounded-full bg-emerald-100 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-200">
                    Start
                  </button>
                  <button className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DoctorDashboard;
