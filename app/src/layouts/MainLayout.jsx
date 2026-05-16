import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Phone } from 'lucide-react'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-cityGray pb-24 dark:bg-slate-950 lg:pb-8">
      <Navbar
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <Sidebar
          isOpen={sidebarOpen}
          collapsed={sidebarCollapsed}
          onClose={() => setSidebarOpen(false)}
          onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        />
        <main className="flex-1 pt-6 lg:pt-10">
          <Outlet />
        </main>
      </div>
      <Footer />
      <Link
        to="/emergency"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-soft transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        aria-label="Emergency assistance"
      >
        <Phone className="h-6 w-6" />
      </Link>
      <MobileNav />
    </div>
  )
}
