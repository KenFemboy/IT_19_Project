import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MobileNav from '../components/MobileNav'
import Footer from '../components/Footer'
import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-cityGray pb-24 dark:bg-slate-950">
      <Navbar />
      <main className="pt-6">
        <Outlet />
      </main>
      <Footer />
      <Link
        to="/emergency"
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-soft transition hover:bg-emerald-700"
        aria-label="Emergency assistance"
      >
        <Phone className="h-6 w-6" />
      </Link>
      <MobileNav />
    </div>
  )
}
