import { Bell, Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Logo from '../assets/logo.png'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/search-driver', label: 'Search' },
  { path: '/ride-history', label: 'Rides' },
  { path: '/family-members', label: 'Family' },
  { path: '/settings', label: 'Settings' }
]

export default function Navbar({ onToggleSidebar, onToggleCollapse, sidebarCollapsed }) {
  const { darkMode, setDarkMode } = useContext(AppContext)

  return (
    <header className="sticky top-0 z-[60] border-b border-white/30 bg-white/90 backdrop-blur dark:border-emerald-100/10 dark:bg-slate-950/80">
      <div className="flex w-full items-center justify-between gap-2 px-4 py-4 sm:gap-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex h-10 w-10 overflow-hidden rounded-2xl bg-white dark:bg-slate-900">
            <img src={Logo} alt="TRISAFE logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              TRISAFE
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
            onClick={onToggleSidebar}
            className="rounded-full border border-emerald-200 bg-white p-2 text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-300/30 dark:bg-slate-950 dark:text-emerald-200 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden rounded-full border border-emerald-200 p-2 text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-300/30 dark:text-emerald-200 dark:hover:bg-emerald-500/10 lg:inline-flex"
            aria-label="Collapse sidebar"
          >
            {sidebarCollapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
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
        </div>
      </div>
    </header>
  )
}
