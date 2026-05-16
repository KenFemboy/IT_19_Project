import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import StatusBadge from './StatusBadge'
import { getInitials } from '../utils/formatters'

export default function DriverCard({ driver }) {
  return (
    <div className="glass-card flex flex-col gap-4 p-5">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${driver.avatarColor} text-white`}
        >
          {getInitials(driver.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{driver.name}</p>
          <p className="text-xs text-slate-500">Plate {driver.plate}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {driver.verified && (
            <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-700">
              <ShieldCheck className="h-3 w-3" />
              Verified
            </span>
          )}
          <StatusBadge status={driver.status} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs text-slate-500">
        <div>
          <p className="font-semibold text-slate-700">Barangay</p>
          <p>{driver.barangay}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-700">Safety Score</p>
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
