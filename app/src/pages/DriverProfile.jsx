import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { drivers, incidents, reviews } from '../data/mockData'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'
import { ShieldCheck, Phone, Star } from 'lucide-react'
import { getInitials } from '../utils/formatters'

export default function DriverProfile() {
  const { id } = useParams()
  const driver = useMemo(
    () => drivers.find((item) => item.id === id),
    [id]
  )

  if (!driver) {
    return (
      <div className="ttms-section pb-16">
        <EmptyState
          title="Driver not found"
          description="Please search for another driver ID or plate number."
        />
      </div>
    )
  }

  const driverIncidents = incidents.filter((item) => item.driverId === id)
  const driverReviews = reviews.filter((item) => item.driverId === id)

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card p-6">
        <div className="flex flex-wrap items-center gap-6">
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${driver.avatarColor} text-2xl font-semibold text-white`}
          >
            {getInitials(driver.name)}
          </div>
          <div className="flex-1">
            <p className="text-xl font-semibold text-slate-900">
              {driver.name}
            </p>
            <p className="text-sm text-slate-500">Driver ID {driver.id}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {driver.verified && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="h-3 w-3" />
                  Verified
                </span>
              )}
              <StatusBadge status={driver.status} />
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                Plate {driver.plate}
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-center">
            <p className="text-xs text-emerald-700">Safety Score</p>
            <p className="text-2xl font-semibold text-emerald-800">
              {driver.safetyScore}%
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900">
            Tricycle details
          </p>
          <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <p className="text-xs text-slate-400">Assigned Barangay</p>
              <p className="font-semibold text-slate-700">{driver.barangay}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Vehicle</p>
              <p className="font-semibold text-slate-700">{driver.tricycle}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Years of service</p>
              <p className="font-semibold text-slate-700">{driver.years}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Incidents</p>
              <p className="font-semibold text-slate-700">{driver.incidents}</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-50/70 p-4 text-xs text-emerald-700">
            {driver.history.map((item) => (
              <p key={item}>- {item}</p>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900">
            Emergency contact
          </p>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-50/70 p-4">
            <Phone className="h-4 w-4 text-emerald-700" />
            <div>
              <p className="text-xs font-semibold text-emerald-800">
                {driver.emergencyContact}
              </p>
              <p className="text-xs text-emerald-700">{driver.contactNumber}</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-900">
              Incident history
            </p>
            <div className="mt-3 space-y-2 text-xs text-slate-500">
              {driverIncidents.length === 0 ? (
                <p>No incidents reported.</p>
              ) : (
                driverIncidents.map((incident) => (
                  <div
                    key={incident.id}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3"
                  >
                    <p className="font-semibold text-emerald-700">
                      {incident.category}
                    </p>
                    <p>
                      {incident.location} - {incident.date}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="glass-card p-6">
        <p className="text-sm font-semibold text-slate-900">
          Passenger feedback
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {driverReviews.map((review) => (
            <div key={review.id} className="rounded-2xl bg-white/70 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  {review.name}
                </p>
                <span className="flex items-center gap-1 text-xs text-emerald-700">
                  <Star className="h-3 w-3" />
                  {review.rating}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
