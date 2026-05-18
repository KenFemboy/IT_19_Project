import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import TrustSection from '../components/TrustSection'
import { motion } from 'framer-motion'
import { ShieldCheck, Megaphone, MapPinned } from 'lucide-react'

const benefits = [
  {
    title: 'Real-time verification',
    detail: 'Confirm driver legitimacy before you ride.'
  },
  {
    title: 'Ride monitoring',
    detail: 'Share ride details and stay informed.'
  },
  {
    title: 'Emergency workflows',
    detail: 'Access SOS and hotlines instantly.'
  }
]

export default function Landing() {
  return (
    <div className="ttms-section space-y-12 pb-16">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card p-6">
          <SectionHeader
            title="Smart transportation for Tagum City"
            subtitle="TRISAFE keeps passengers connected to verified drivers, safety updates, and community alerts."
            action={
              <Link to="/dashboard" className="ttms-button">
                Open Dashboard
              </Link>
            }
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-300/20 dark:bg-emerald-500/10"
              >
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">
                  {benefit.title}
                </p>
                <p className="mt-2 text-xs text-emerald-700 dark:text-emerald-300">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Community trust pulse
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            94% of passengers feel safer with TRISAFE verification.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 dark:bg-slate-900/60">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <p className="text-xs text-slate-600 dark:text-slate-300">
                1,240 verified drivers active this month
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 dark:bg-slate-900/60">
              <MapPinned className="h-4 w-4 text-emerald-600" />
              <p className="text-xs text-slate-600 dark:text-slate-300">
                22 barangays covered by safety mapping
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 dark:bg-slate-900/60">
              <Megaphone className="h-4 w-4 text-emerald-600" />
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Live advisories updated every 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Why passengers trust TRISAFE"
          subtitle="Built with safety-first design and smart city transparency."
        />
        <TrustSection />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6">
          <SectionHeader
            title="About TRISAFE"
            subtitle="A public passenger platform for Tagum City tricycles."
          />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">
            TRISAFE is a front-end prototype that visualizes verified drivers,
            passenger safety updates, and emergency support. It highlights how
            technology can improve public transport trust and transparency.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/search-driver" className="ttms-button">
              Search Driver
            </Link>
            <Link to="/report" className="ttms-button-outline">
              Report Incident
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Contact TRISAFE
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            For passenger concerns or safety updates, reach our team anytime.
          </p>
          <div className="mt-4 space-y-3 text-xs text-slate-600 dark:text-slate-300">
            <p>Emergency Desk: 0917-300-TRISAFE</p>
            <p>Email: support@trisafe.tagum</p>
            <p>Hours: 5:00 AM - 10:00 PM daily</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
