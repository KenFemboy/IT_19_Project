import { Star } from 'lucide-react'

export default function RatingCard({ review }) {
  return (
    <div className="glass-card flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">{review.name}</p>
        <div className="flex items-center gap-1 text-emerald-600">
          <Star className="h-4 w-4" />
          <span className="text-xs font-semibold">{review.rating}</span>
        </div>
      </div>
      <p className="text-xs text-slate-500">{review.comment}</p>
      <p className="text-[11px] text-slate-400">{review.date}</p>
    </div>
  )
}
