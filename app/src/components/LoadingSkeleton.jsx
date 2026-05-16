export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-3 rounded-3xl border border-slate-100 bg-white/70 p-5">
      <div className="h-4 w-24 rounded bg-slate-200" />
      <div className="h-6 w-3/4 rounded bg-slate-200" />
      <div className="h-3 w-1/2 rounded bg-slate-200" />
    </div>
  )
}
