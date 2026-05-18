import { familyMembers } from '../data/mockData'
import MapPlaceholder from '../components/MapPlaceholder'
import { MapPin, Users } from 'lucide-react'

export default function FamilyMembers() {
  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card p-6 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-200">
              Family members
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Mock location sharing for family
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Family members can view mock location updates and route status for demo purposes only.
            </p>
          </div>
          <div className="rounded-2xl bg-emerald-50/70 px-4 py-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
            Mock sharing enabled
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Current location
          </p>
          <div className="mt-4">
            <MapPlaceholder label="Family location view" />
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/70 p-4 text-sm dark:bg-slate-900/60">
            <MapPin className="h-4 w-4 text-emerald-600" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                Tagum City live position
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Demo coordinates shown for your selected family contacts.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Users className="h-4 w-4 text-emerald-600" />
            Family contacts
          </p>
          <div className="mt-4 space-y-3">
            {familyMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-300/20 dark:bg-emerald-500/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-100">
                      {member.name}
                    </p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-200">
                      {member.relation}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-slate-950/70 dark:text-emerald-200">
                    {member.id}
                  </span>
                </div>
                <p className="mt-3 text-xs text-emerald-700 dark:text-emerald-200">
                  {member.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}