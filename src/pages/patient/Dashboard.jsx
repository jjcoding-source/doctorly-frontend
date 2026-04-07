import { ArrowRight, CalendarClock, HeartPulse, IndianRupee, Star } from 'lucide-react';
import Button from '../../components/common/Button';
import StatusBadge from '../../components/common/StatusBadge';

const PatientDashboard = () => {
  const upcoming = [
    { id: 1, doctor: 'Dr. Anjali Menon', specialty: 'Cardiologist', time: 'Tomorrow, 10:30 AM', status: 'confirmed' },
    { id: 2, doctor: 'Dr. Rajesh Kumar', specialty: 'General Physician', time: '15 Apr, 4:00 PM', status: 'pending' },
  ];

  const recommendedDoctors = [
    { name: 'Dr. Priya Sharma', specialty: 'Pediatrician', rating: 4.9, fee: 500 },
    { name: 'Dr. Arjun Nair', specialty: 'Dermatologist', rating: 4.8, fee: 600 },
  ];

  return (
    <div className="space-y-10">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="card overflow-hidden p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Patient Dashboard</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.05em] text-slate-900">Good morning, Jebin</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            You&apos;re all set for a smoother day of care. Review upcoming appointments and discover specialists matched to your needs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Upcoming visits', value: '2', icon: CalendarClock },
              { label: 'Health programs', value: '5', icon: HeartPulse },
              { label: 'Saved doctors', value: '12', icon: Star },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[1.5rem] bg-slate-50 p-5">
                  <Icon className="h-6 w-6 text-cyan-700" />
                  <p className="mt-5 text-3xl font-bold tracking-[-0.05em] text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700/80">Care Tip</p>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-slate-900">Prepare notes before your next consultation</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Adding recent symptoms, medication updates, and concerns ahead of time helps doctors make faster, clearer decisions.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Upcoming Appointments</h2>
            <p className="mt-2 text-sm text-slate-500">A quick glance at your active bookings and next steps.</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {upcoming.map((apt) => (
            <div key={apt.id} className="card p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.03em] text-slate-900">{apt.doctor}</h3>
                  <p className="mt-1 text-sm text-cyan-700">{apt.specialty}</p>
                </div>
                <StatusBadge status={apt.status} />
              </div>

              <p className="mt-8 text-2xl font-bold tracking-[-0.05em] text-slate-900">{apt.time}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="flex-1">Reschedule</Button>
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Recommended Doctors</h2>
            <p className="mt-2 text-sm text-slate-500">Specialists patients like you are booking this week.</p>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
            Explore all
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recommendedDoctors.map((doc) => (
            <div key={doc.name} className="card card-hover p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-gradient-to-br from-cyan-100 to-emerald-100 text-lg font-bold text-cyan-700">
                {doc.name.slice(4, 5)}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{doc.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{doc.specialty}</p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-amber-600">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {doc.rating}
                </div>
                <div className="flex items-center gap-1 font-semibold text-emerald-600">
                  <IndianRupee className="h-4 w-4" />
                  {doc.fee}
                </div>
              </div>
              <Button className="mt-6 w-full">Book Appointment</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;
