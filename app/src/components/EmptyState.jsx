export default function EmptyState({ title, description }) {
  return (
    <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/70 p-8 text-center">
      <p className="text-sm font-semibold text-emerald-800">{title}</p>
      <p className="mt-2 text-xs text-emerald-600">{description}</p>
    </div>
  )
}
