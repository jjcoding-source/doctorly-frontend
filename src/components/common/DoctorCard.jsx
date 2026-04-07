import { CalendarDays, IndianRupee, Star, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const DoctorCard = ({ doctor, onBookNow }) => {
  return (
    <div className="card card-hover p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-sky-100 text-sky-700">
          <Stethoscope className="h-8 w-8" />
        </div>
        <div className="rounded-full bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
          {doctor.experience} yrs
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold tracking-[-0.03em] text-slate-900">{doctor.name}</h3>
        <p className="mt-1 text-sm font-medium text-sky-700">{doctor.specialty}</p>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-[1.25rem] bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          {doctor.rating}
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />
          Next available today
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-2xl font-bold tracking-[-0.04em] text-emerald-600">
        <IndianRupee className="h-5 w-5" />
        {doctor.fee}
        <span className="text-sm font-medium text-slate-400">consultation</span>
      </div>

      <div className="mt-7 grid gap-3">
        <Link to={`/patient/doctors/${doctor.id}`} className="block">
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
        <Button onClick={() => onBookNow(doctor)} className="w-full">
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
