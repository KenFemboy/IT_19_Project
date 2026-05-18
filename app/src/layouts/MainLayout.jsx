import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { MapPin, Phone } from 'lucide-react'

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      window.alert('Geolocation is not supported by your browser.')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        window.alert(`Current location tracked:\nLatitude: ${latitude.toFixed(5)}\nLongitude: ${longitude.toFixed(5)}`)
      },
      () => {
        window.alert('Unable to retrieve your current location. Please allow location access.')
      }
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-cityGray dark:bg-slate-950">
      <Navbar
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div className="flex flex-1 flex-col lg:flex-row lg:gap-6">
        <Sidebar
          isOpen={sidebarOpen}
          collapsed={sidebarCollapsed}
          onClose={() => setSidebarOpen(false)}
          onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        />
        <main className="flex-1 pb-44 pt-6 lg:pt-10 lg:pb-28">
          <Outlet />
        </main>
      </div>
      <Footer />
      <button
        type="button"
        onClick={handleTrackLocation}
        className="fixed bottom-36 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-soft transition hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 sm:h-14 sm:w-14"
        aria-label="Track current location"
        title="Track current location"
      >
        <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <Link
        to="/emergency"
        className="fixed bottom-20 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-soft transition hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 sm:h-14 sm:w-14"
        aria-label="Emergency assistance"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>
      <MobileNav />
    </div>
  )
}
