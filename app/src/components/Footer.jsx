import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white/70 py-10 dark:border-emerald-100/10 dark:bg-slate-950/70">
      <div className="ttms-section grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Tagum Tricycle Monitoring System
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            A smart-city passenger platform for safer tricycle rides.
          </p>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            City Hall Drive, Tagum City
          </p>
          <p className="mt-2 flex items-center gap-2">
            <Phone className="h-4 w-4" />
            0917-300-TTMS
          </p>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            support@ttms.tagum
          </p>
          <p className="mt-2 text-xs">
            2026 TTMS. Front-end prototype only.
          </p>
        </div>
      </div>
    </footer>
  )
}
