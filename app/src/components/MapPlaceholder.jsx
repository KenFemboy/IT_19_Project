import { MapPinned } from 'lucide-react'

export default function MapPlaceholder({ label }) {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/70 text-emerald-700">
      <MapPinned className="h-5 w-5" />
      <p className="text-xs font-semibold">{label}</p>
      <p className="text-[11px]">Map integration placeholder</p>
    </div>
  )
}
