import { Users, ShieldCheck, HeartHandshake } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Verified drivers',
    description: 'Instantly confirm legitimacy with QR and ID matching.'
  },
  {
    icon: Users,
    title: 'Community ratings',
    description: 'Passenger feedback builds accountability and trust.'
  },
  {
    icon: HeartHandshake,
    title: 'Emergency readiness',
    description: 'SOS workflows connected to Tagum City response teams.'
  }
]

export default function TrustSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.title} className="glass-card p-5">
            <div className="mb-3 inline-flex rounded-2xl bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {item.title}
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}
