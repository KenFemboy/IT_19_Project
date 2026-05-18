import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Search,
  Bell,
  User,
  Users,
  Home,
  History,
  AlertTriangle,
  Star,
  PanelLeftClose,
  PanelLeftOpen
} from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/search-driver', label: 'Search', icon: Search },
  { path: '/ride-history', label: 'Ride history', icon: History },
  { path: '/family-members', label: 'Family members', icon: Users },
  { path: '/notifications', label: 'Alerts', icon: Bell },
  { path: '/ratings', label: 'Ratings', icon: Star },
  { path: '/report', label: 'Report', icon: AlertTriangle },
  { path: '/settings', label: 'Settings', icon: User }
]

export default function Sidebar({ isOpen, collapsed, onClose, onToggleCollapse }) {
  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-label="Close sidebar"
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 border-r border-emerald-100/60 bg-white/95 px-4 pb-8 pt-6 shadow-glass backdrop-blur transition-transform duration-300 dark:border-emerald-100/10 dark:bg-slate-950/90 lg:static lg:h-auto lg:top-auto lg:border-r lg:border-emerald-100/60 lg:bg-white/95 dark:lg:border-emerald-100/10 dark:lg:bg-slate-950/90 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${collapsed ? 'lg:w-20' : 'lg:w-72'}`}
      >
        <div className={`mb-6 flex items-center justify-between ${collapsed ? 'lg:justify-center' : ''}`}>
          <div className={`flex flex-col gap-1 ${collapsed ? 'lg:hidden' : ''}`}>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              TRISAFE PANEL
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Passenger controls
            </p>
          </div>
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden rounded-full border border-emerald-200 p-2 text-emerald-700 transition hover:bg-emerald-50 dark:border-emerald-300/30 dark:text-emerald-200 dark:hover:bg-emerald-500/10 lg:inline-flex"
            aria-label="Toggle sidebar width"
          >
            {collapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
        </div>
        <nav className="space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-emerald-600/10 text-emerald-700 shadow-soft dark:bg-emerald-500/10 dark:text-emerald-200'
                      : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-200'
                  } ${collapsed ? 'lg:justify-center' : ''}`
                }
              >
                <Icon className="h-4 w-4" />
                <span className={collapsed ? 'lg:hidden' : ''}>{link.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
