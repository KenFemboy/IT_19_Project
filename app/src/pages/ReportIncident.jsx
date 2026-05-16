import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Modal from '../components/Modal'
import { useToast } from '../context/ToastContext'

const categories = [
  'Speeding',
  'Reckless driving',
  'Overloading',
  'Rude behavior',
  'Vehicle issue'
]

export default function ReportIncident() {
  const { reports, setReports } = useContext(AppContext)
  const { addToast } = useToast()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    category: categories[0],
    location: '',
    description: '',
    anonymous: false
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const newReport = {
      id: `I-${reports.length + 210}`,
      driverId: 'D-0000',
      category: form.category,
      location: form.location,
      date: new Date().toISOString().slice(0, 10),
      status: 'Pending'
    }
    setReports([newReport, ...reports])
    addToast({
      title: 'Report submitted',
      message: 'Thank you for helping keep Tagum City safe.',
      type: 'success'
    })
    setOpen(true)
    setForm({
      category: categories[0],
      location: '',
      description: '',
      anonymous: false
    })
  }

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Report an incident
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Help maintain a safe community by reporting unsafe behavior.
        </p>
      </section>
      <form className="glass-card space-y-4 p-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-semibold text-slate-600">
            Incident category
          </label>
          <select
            value={form.category}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, category: event.target.value }))
            }
            className="ttms-input mt-2"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">
            Location
          </label>
          <input
            value={form.location}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, location: event.target.value }))
            }
            className="ttms-input mt-2"
            placeholder="Barangay, street, or landmark"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">
            Description
          </label>
          <textarea
            value={form.description}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, description: event.target.value }))
            }
            className="ttms-input mt-2 h-28"
            placeholder="Share details about the incident"
          />
        </div>
        <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-700">
          Upload image placeholder
        </div>
        <label className="flex items-center gap-2 text-xs text-slate-500">
          <input
            type="checkbox"
            checked={form.anonymous}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, anonymous: event.target.checked }))
            }
          />
          Report anonymously
        </label>
        <button type="submit" className="ttms-button">
          Submit report
        </button>
      </form>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Report received"
      >
        Our safety team will review your report within 24 hours.
      </Modal>
    </div>
  )
}
