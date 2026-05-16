import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import NotificationCard from '../components/NotificationCard'

export default function Notifications() {
  const { notifications, setNotifications } = useContext(AppContext)

  const markAllRead = () => {
    setNotifications(
      notifications.map((note) => ({ ...note, read: true }))
    )
  }

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Notification center
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Safety alerts, advisories, and driver updates.
          </p>
        </div>
        <button type="button" className="ttms-button-outline" onClick={markAllRead}>
          Mark all read
        </button>
      </section>
      <div className="grid gap-4">
        {notifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
