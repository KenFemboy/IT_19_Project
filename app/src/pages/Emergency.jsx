import { useState } from 'react'
import SOSModal from '../components/SOSModal'
import { emergencyHotlines, barangays } from '../data/mockData'
import MapPlaceholder from '../components/MapPlaceholder'

export default function Emergency() {
  const [open, setOpen] = useState(false)

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card flex flex-col gap-4 p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Emergency assistance
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Use SOS to notify responders or call a hotline immediately.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-24 items-center justify-center rounded-3xl bg-emerald-600 text-lg font-semibold text-white shadow-soft transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          SOS
        </button>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Emergency hotlines
          </p>
          <div className="mt-4 space-y-3">
            {emergencyHotlines.map((line) => (
              <div
                key={line.id}
                className="flex items-center justify-between rounded-2xl bg-emerald-50/70 p-3 text-xs text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200"
              >
                <span className="font-semibold">{line.name}</span>
                <span>{line.number}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Nearby police station
          </p>
          <div className="mt-4">
            <MapPlaceholder label="Police station locator" />
          </div>
        </div>
      </section>

      <section className="glass-card p-6">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Barangay contacts
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {barangays.slice(0, 9).map((barangay) => (
            <div
              key={barangay}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3 text-xs text-emerald-700 dark:border-emerald-300/20 dark:bg-emerald-500/10 dark:text-emerald-200"
            >
              {barangay} Safety Desk
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-6">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Live location sharing
        </p>
        <div className="mt-4">
          <MapPlaceholder label="Live location placeholder" />
        </div>
      </section>

      <SOSModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
