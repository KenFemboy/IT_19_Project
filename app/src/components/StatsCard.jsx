export default function StatsCard({ label, value, note }) {
  return (
    <div className="glass-card flex flex-col gap-2 p-4">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="text-[11px] text-slate-400">{note}</p>
    </div>
  )
}
