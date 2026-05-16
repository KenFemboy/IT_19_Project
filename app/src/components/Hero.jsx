import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { QrCode, Search, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-hero-grid px-6 py-14 text-white shadow-soft sm:px-10">
      <div className="absolute -right-12 top-6 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-28 w-28 rounded-full bg-emerald-200/30 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <span className="ttms-chip mb-5 inline-flex bg-white/20 text-white">
          <ShieldCheck className="h-4 w-4" />
          Smart-city passenger safety
        </span>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          Tagum Tricycle Monitoring System
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-emerald-50/90 sm:text-base">
          Verify drivers, monitor rides, and stay connected to emergency
          assistance across Tagum City. Built for passengers who prioritize
          safety and community trust.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/search-driver" className="ttms-button bg-white text-emerald-700">
            <Search className="h-4 w-4" />
            Search Driver
          </Link>
          <Link to="/search-driver" className="ttms-button-outline border-white/70 text-white">
            <QrCode className="h-4 w-4" />
            Scan Driver QR
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
