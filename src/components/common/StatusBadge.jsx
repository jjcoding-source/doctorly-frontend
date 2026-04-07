const StatusBadge = ({ status }) => {
  const colors = {
    pending: 'bg-amber-100 text-amber-700 ring-amber-200',
    confirmed: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
    completed: 'bg-sky-100 text-sky-700 ring-sky-200',
    cancelled: 'bg-rose-100 text-rose-700 ring-rose-200',
    available: 'bg-emerald-100 text-emerald-700 ring-emerald-200',
    blocked: 'bg-slate-200 text-slate-700 ring-slate-300',
  };

  const normalized = status?.toLowerCase() || 'pending';

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 ${colors[normalized] || 'bg-slate-100 text-slate-700 ring-slate-200'}`}
    >
      {normalized}
    </span>
  );
};

export default StatusBadge;
