import { MapPinned } from 'lucide-react'

export default function MapPlaceholder({ label }) {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/70 text-emerald-700 dark:border-emerald-300/30 dark:bg-emerald-500/10 dark:text-emerald-200">
      <MapPinned className="h-5 w-5" />
      <p className="text-xs font-semibold">{label}</p>
      <p className="text-[11px] text-emerald-600 dark:text-emerald-300">
        Map integration placeholder
      </p>
    </div>
  )
}
