import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  QrCode,
  Search,
  ShieldCheck,
  Bell,
  MapPinned
} from 'lucide-react'
import { motion } from 'framer-motion'
import {
  analyticsStats,
  drivers,
  safetyUpdates
} from '../data/mockData'
import { AppContext } from '../context/AppContext'
import DashboardCard from '../components/DashboardCard'
import SectionHeader from '../components/SectionHeader'
import MapPlaceholder from '../components/MapPlaceholder'
import Timeline from '../components/Timeline'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'

export default function Dashboard() {
  const { notifications, rideHistory } = useContext(AppContext)

  return (
    <div className="ttms-section space-y-8 pb-16">
      <section className="glass-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Welcome back, Passenger</p>
            <h2 className="text-2xl font-semibold text-slate-900">
              Your TTMS Dashboard
            </h2>
          </div>
          <div className="flex gap-3">
            <Link to="/search-driver" className="ttms-button">
              <Search className="h-4 w-4" />
              Search Driver
            </Link>
            <Link to="/search-driver" className="ttms-button-outline">
              <QrCode className="h-4 w-4" />
              Scan QR
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <DashboardCard
          title="Verified Drivers"
          value={`${drivers.filter((driver) => driver.verified).length}`}
          subtitle="Active in Tagum City"
          icon={ShieldCheck}
        />
        <DashboardCard
          title="Safety Alerts"
          value={`${notifications.filter((note) => !note.read).length}`}
          subtitle="Unread notifications"
          icon={Bell}
        />
        <DashboardCard
          title="Community Reports"
          value="12"
          subtitle="Incident logs this month"
          icon={AlertTriangle}
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <SectionHeader
            title="Ride activity analytics"
            subtitle="Daily ride volume (mock data)"
          />
          <div className="mt-6 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsStats}>
                <defs>
                  <linearGradient id="rideGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#43a35f" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#43a35f" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{
                    background: 'white',
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    fontSize: 12
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="rides"
                  stroke="#2f8248"
                  fill="url(#rideGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass-card p-6">
          <SectionHeader
            title="Driver verification"
            subtitle="Stay updated on verified riders"
            action={
              <Link to="/search-driver" className="ttms-button-outline">
                View drivers
              </Link>
            }
          />
          <div className="mt-4 space-y-4">
            {drivers.slice(0, 3).map((driver) => (
              <div key={driver.id} className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {driver.id}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {driver.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {driver.barangay} - {driver.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6">
          <SectionHeader
            title="Nearby tricycle map"
            subtitle="GPS tracking placeholder"
          />
          <div className="mt-4">
            <MapPlaceholder label="Nearby tricycles" />
          </div>
        </div>
        <div className="glass-card p-6">
          <SectionHeader
            title="Safety tips"
            subtitle="Community safety updates"
          />
          <div className="mt-4 space-y-3">
            {safetyUpdates.map((tip) => (
              <div key={tip.id} className="rounded-2xl bg-emerald-50/70 p-4">
                <p className="text-sm font-semibold text-emerald-800">
                  {tip.title}
                </p>
                <p className="mt-2 text-xs text-emerald-700">{tip.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <SectionHeader
            title="Recent rides"
            subtitle="Latest passenger ride records"
            action={
              <Link to="/ride-history" className="ttms-button-outline">
                View history
              </Link>
            }
          />
          <div className="mt-4 space-y-3">
            {rideHistory.slice(0, 3).map((ride) => (
              <div
                key={ride.id}
                className="flex items-center justify-between rounded-2xl bg-white/70 p-3 text-xs"
              >
                <div>
                  <p className="font-semibold text-slate-700">
                    {ride.origin} -> {ride.destination}
                  </p>
                  <p className="text-slate-500">{ride.date}</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2 py-1 font-semibold text-emerald-700">
                  {ride.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <SectionHeader
            title="Community updates"
            subtitle="Latest safety activities"
          />
          <div className="mt-4">
            <Timeline
              items={[
                {
                  title: 'Terminal safety inspection',
                  detail: 'Routine checks conducted in Magugpo Poblacion.'
                },
                {
                  title: 'Barangay briefing',
                  detail: 'Emergency response alignment with DRRMO team.'
                },
                {
                  title: 'Night patrol',
                  detail: 'Extended passenger support in Visayan Village.'
                }
              ]}
            />
          </div>
        </motion.div>
      </section>

      <section className="glass-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Emergency SOS
            </p>
            <p className="text-xs text-slate-500">
              Immediate assistance with one tap.
            </p>
          </div>
          <Link to="/emergency" className="ttms-button">
            <MapPinned className="h-4 w-4" />
            Open Emergency
          </Link>
        </div>
      </section>
    </div>
  )
}
