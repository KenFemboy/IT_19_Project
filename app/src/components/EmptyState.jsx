export default function EmptyState({ title, description }) {
  return (
    <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/70 p-8 text-center dark:border-emerald-300/30 dark:bg-emerald-500/10">
      <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
        {title}
      </p>
      <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-300">
        {description}
      </p>
    </div>
  )
}
