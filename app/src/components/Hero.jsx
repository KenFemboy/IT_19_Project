import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { QrCode, Search, ShieldCheck, UploadCloud } from 'lucide-react'
import Logo from '../assets/logo.png'

export default function Hero() {
  const [logoError, setLogoError] = useState(false)
  const showLogo = !logoError

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-hero-grid px-6 py-14 text-white shadow-soft sm:px-10 lg:px-14">
      <div className="absolute -right-12 top-6 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-28 w-28 rounded-full bg-emerald-200/30 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <div>
            <span className="ttms-chip mb-5 inline-flex bg-white/20 text-white">
              <ShieldCheck className="h-4 w-4" />
              Smart-city passenger safety
            </span>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
              TRISAFE
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl 2xl:text-6xl">
              Tagum Tricycle Monitoring System
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-emerald-50/90 sm:text-base lg:text-lg">
              Verify drivers, monitor rides, and stay connected to emergency
              assistance across Tagum City. Built for passengers who prioritize
              safety and community trust.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-dashed border-white/70 bg-white/10 shadow-soft backdrop-blur dark:border-emerald-300/40 dark:bg-slate-950/40 sm:h-52 sm:w-52 lg:h-56 lg:w-56 xl:h-60 xl:w-60">
              {showLogo ? (
                <img
                  src={Logo}
                  alt="TRISAFE logo"
                  className="h-full w-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <>
                  <UploadCloud className="h-6 w-6 text-emerald-300" />
                  <p className="text-xs font-semibold text-emerald-100">
                    Your Logo Here
                  </p>
                  <p className="text-[11px] text-emerald-100/80">
                    Displayed in the home hero section
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/search-driver" className="ttms-button bg-white text-emerald-700">
              <Search className="h-4 w-4" />
              Search Driver
            </Link>
            <Link to="/search-driver" className="ttms-button-outline border-white/70 text-white">
              <QrCode className="h-4 w-4" />
              Scan Driver QR
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
