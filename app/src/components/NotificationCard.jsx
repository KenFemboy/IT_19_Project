import { Bell, ShieldAlert, Megaphone } from 'lucide-react'

const icons = {
  alert: ShieldAlert,
  update: Bell,
  community: Megaphone
}

export default function NotificationCard({ item }) {
  const Icon = icons[item.type] ?? Bell
  return (
    <div
      className={`glass-card flex items-start gap-4 p-4 ${
        item.read ? 'opacity-70' : ''
      }`}
    >
      <span className="rounded-2xl bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          {item.title}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {item.message}
        </p>
        <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500">
          {item.date}
        </p>
      </div>
    </div>
  )
}
