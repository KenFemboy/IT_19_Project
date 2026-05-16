import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard'
import SearchDriver from '../pages/SearchDriver'
import DriverProfile from '../pages/DriverProfile'
import ReportIncident from '../pages/ReportIncident'
import Ratings from '../pages/Ratings'
import RideHistory from '../pages/RideHistory'
import Notifications from '../pages/Notifications'
import Emergency from '../pages/Emergency'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search-driver" element={<SearchDriver />} />
        <Route path="/driver/:id" element={<DriverProfile />} />
        <Route path="/report" element={<ReportIncident />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path="/ride-history" element={<RideHistory />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
