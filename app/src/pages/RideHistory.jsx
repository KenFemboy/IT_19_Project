import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { drivers } from '../data/mockData'
import MapPlaceholder from '../components/MapPlaceholder'
import { formatCurrency } from '../utils/formatters'

export default function RideHistory() {
  const { rideHistory } = useContext(AppContext)

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card p-6">
        <h2 className="text-xl font-semibold text-slate-900">Ride history</h2>
        <p className="mt-2 text-sm text-slate-500">
          Review past rides and download receipts.
        </p>
      </section>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {rideHistory.map((ride) => {
            const driver = drivers.find((item) => item.id === ride.driverId)
            return (
              <div key={ride.id} className="glass-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {ride.origin} -> {ride.destination}
                    </p>
                    <p className="text-xs text-slate-500">{ride.date}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {ride.status}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 text-xs text-slate-500 sm:grid-cols-3">
                  <div>
                    <p className="font-semibold text-slate-700">Driver</p>
                    <p>{driver?.name ?? 'Unknown'}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Fare</p>
                    <p>{formatCurrency(ride.fare)}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Receipt</p>
                    <button
                      type="button"
                      className="text-emerald-700"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900">
            Route overview
          </p>
          <div className="mt-4">
            <MapPlaceholder label="Route map" />
          </div>
        </div>
      </div>
    </div>
  )
}
