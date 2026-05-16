import { motion } from 'framer-motion'

export default function DashboardCard({ title, value, icon: Icon, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card flex flex-col gap-3 p-5 text-slate-700 shadow-soft dark:text-slate-200"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          {title}
        </p>
        {Icon ? (
          <span className="rounded-full bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
      </div>
      <p className="text-2xl font-semibold text-slate-900 dark:text-white">
        {value}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
    </motion.div>
  )
}
