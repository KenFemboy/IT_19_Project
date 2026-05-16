import { motion } from 'framer-motion'

export default function DashboardCard({ title, value, icon: Icon, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card flex flex-col gap-3 p-5 text-slate-700 shadow-soft"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600">{title}</p>
        {Icon ? (
          <span className="rounded-full bg-emerald-100 p-2 text-emerald-700">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
      </div>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{subtitle}</p>
    </motion.div>
  )
}
