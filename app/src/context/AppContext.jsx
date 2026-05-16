import { createContext, useEffect, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import {
  incidents as initialIncidents,
  notifications as initialNotifications,
  rideHistory as initialRideHistory,
  reviews as initialReviews
} from '../data/mockData'

export const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage('ttms-dark-mode', false)
  const [ratings, setRatings] = useLocalStorage('ttms-ratings', initialReviews)
  const [reports, setReports] = useLocalStorage('ttms-reports', initialIncidents)
  const [rideHistory, setRideHistory] = useLocalStorage(
    'ttms-ride-history',
    initialRideHistory
  )
  const [notifications, setNotifications] = useLocalStorage(
    'ttms-notifications',
    initialNotifications
  )
  const [settings, setSettings] = useLocalStorage('ttms-settings', {
    language: 'English',
    notifyEmail: true,
    notifySms: false,
    accessibility: 'Standard'
  })

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])

  const value = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      ratings,
      setRatings,
      reports,
      setReports,
      rideHistory,
      setRideHistory,
      notifications,
      setNotifications,
      settings,
      setSettings
    }),
    [
      darkMode,
      notifications,
      ratings,
      reports,
      rideHistory,
      settings
    ]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
