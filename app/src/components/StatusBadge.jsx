const statusStyles = {
  Available: 'bg-emerald-100 text-emerald-700',
  'On Ride': 'bg-amber-100 text-amber-700',
  Offline: 'bg-slate-200 text-slate-600'
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`rounded-full px-2 py-1 text-[11px] font-semibold ${
        statusStyles[status] ?? 'bg-slate-100 text-slate-600'
      }`}
    >
      {status}
    </span>
  )
}
