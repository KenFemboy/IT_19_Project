import { Home, LayoutDashboard, Search, Bell, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/search-driver', label: 'Search', icon: Search },
  { path: '/notifications', label: 'Alerts', icon: Bell },
  { path: '/settings', label: 'Settings', icon: User }
]

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/50 bg-white/90 backdrop-blur dark:border-emerald-100/10 dark:bg-slate-950/80 lg:hidden">
      <div className="grid grid-cols-5 gap-2 px-4 py-3">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-[11px] font-semibold ${
                  isActive
                    ? 'text-emerald-700 dark:text-emerald-300'
                    : 'text-slate-500 dark:text-slate-400'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
