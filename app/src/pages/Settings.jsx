import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Settings() {
  const { darkMode, setDarkMode, settings, setSettings } = useContext(AppContext)

  const updateSetting = (key, value) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card p-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Settings
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Customize your TRISAFE experience.
        </p>
      </section>

      <section className="glass-card space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Dark mode
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Toggle night-friendly interface.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="ttms-button-outline"
          >
            {darkMode ? 'Disable' : 'Enable'}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Email notifications
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Safety alerts and updates.
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifyEmail}
            onChange={(event) => updateSetting('notifyEmail', event.target.checked)}
            className="h-5 w-5 accent-emerald-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              SMS notifications
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Emergency updates only.
            </p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifySms}
            onChange={(event) => updateSetting('notifySms', event.target.checked)}
            className="h-5 w-5 accent-emerald-600"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Language
          </p>
          <select
            value={settings.language}
            onChange={(event) => updateSetting('language', event.target.value)}
            className="ttms-input mt-2"
          >
            <option>English</option>
            <option>Filipino</option>
            <option>Cebuano</option>
          </select>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Accessibility
          </p>
          <select
            value={settings.accessibility}
            onChange={(event) =>
              updateSetting('accessibility', event.target.value)
            }
            className="ttms-input mt-2"
          >
            <option>Standard</option>
            <option>High Contrast</option>
            <option>Large Text</option>
          </select>
        </div>
      </section>
    </div>
  )
}
