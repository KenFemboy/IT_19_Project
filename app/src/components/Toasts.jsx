import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react'

const icons = {
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info
}

export default function Toasts({ items, onDismiss }) {
  return (
    <div className="fixed right-4 top-6 z-50 flex w-full max-w-sm flex-col gap-3">
      <AnimatePresence>
        {items.map((toast) => {
          const Icon = icons[toast.type] ?? Info
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="glass-card flex items-start gap-3 p-4 text-sm text-slate-700 shadow-soft dark:text-slate-200"
            >
              <span className="mt-1 rounded-full bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {toast.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {toast.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                className="text-xs font-semibold text-emerald-700 dark:text-emerald-200"
              >
                Close
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
