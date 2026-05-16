import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function DriverCard({ driver }) {
  return (
    <div className="glass-card flex flex-col gap-4 p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {driver.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Plate {driver.plate}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {driver.verified && (
            <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
              <ShieldCheck className="h-3 w-3" />
              Verified
            </span>
          )}
          <StatusBadge status={driver.status} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div>
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            Barangay
          </p>
          <p>{driver.barangay}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            Safety Score
          </p>
          <p>{driver.safetyScore}%</p>
        </div>
      </div>
      <Link
        to={`/driver/${driver.id}`}
        className="ttms-button-outline text-xs"
      >
        View Profile
      </Link>
    </div>
  )
}
