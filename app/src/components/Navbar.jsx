import { Bell, Menu, ShieldCheck } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/search-driver', label: 'Search' },
  { path: '/ride-history', label: 'Rides' },
  { path: '/settings', label: 'Settings' }
]

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(AppContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/30 bg-white/80 backdrop-blur dark:border-emerald-100/10 dark:bg-slate-950/70">
      <div className="ttms-section flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Tagum TTMS
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Passenger Monitoring
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-slate-600 hover:text-emerald-700 dark:text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="hidden rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-500/40 dark:text-emerald-200 lg:block"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link
            to="/notifications"
            className="relative rounded-full border border-emerald-200 bg-emerald-50 p-2 text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-emerald-200 bg-white p-2 text-emerald-700 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-emerald-100 bg-white px-6 py-4 text-sm text-slate-600 dark:border-emerald-100/10 dark:bg-slate-950">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
