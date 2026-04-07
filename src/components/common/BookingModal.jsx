import { CalendarDays, Clock3, FileText, IndianRupee, Stethoscope } from 'lucide-react';
import Button from './Button';

const BookingModal = ({ isOpen, onClose, doctor, selectedDate, selectedTime, onConfirm }) => {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="card max-h-[90vh] w-full max-w-xl overflow-y-auto p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/80">
              Confirm Visit
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-slate-900">
              Appointment Summary
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Review the schedule details before locking in your slot.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-200"
          >
            Close
          </button>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-slate-50 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-sky-100 text-sky-700">
              <Stethoscope className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
              <p className="text-sm font-medium text-sky-700">{doctor.specialty}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <CalendarDays className="h-4 w-4" />
                Date
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800">{selectedDate}</p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <Clock3 className="h-4 w-4" />
                Time
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800">{selectedTime}</p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <IndianRupee className="h-4 w-4" />
                Fee
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-800">{doctor.fee}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="field-label flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Reason for visit
          </label>
          <textarea
            className="field-input min-h-28 resize-y"
            placeholder="Share symptoms, follow-up notes, or anything the doctor should know ahead of time."
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="flex-1">
            Confirm Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
