export default function Timeline({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.title} className="flex gap-3">
          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
          <div>
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="text-xs text-slate-500">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
