import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import RatingCard from '../components/RatingCard'
import { Star } from 'lucide-react'
import { useToast } from '../context/ToastContext'

export default function Ratings() {
  const { ratings, setRatings } = useContext(AppContext)
  const { addToast } = useToast()
  const [form, setForm] = useState({
    driverId: 'D-1021',
    rating: 4,
    comment: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const newRating = {
      id: `R-${ratings.length + 200}`,
      driverId: form.driverId,
      name: 'Passenger User',
      rating: form.rating,
      comment: form.comment,
      date: new Date().toISOString().slice(0, 10)
    }
    setRatings([newRating, ...ratings])
    addToast({
      title: 'Thanks for your feedback',
      message: 'Your rating helps keep the community informed.',
      type: 'success'
    })
    setForm({ driverId: 'D-1021', rating: 4, comment: '' })
  }

  return (
    <div className="ttms-section space-y-6 pb-16">
      <section className="glass-card p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Ratings & feedback
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Share your experience to help fellow passengers.
        </p>
      </section>
      <form className="glass-card space-y-4 p-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-semibold text-slate-600">
            Driver ID
          </label>
          <input
            value={form.driverId}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, driverId: event.target.value }))
            }
            className="ttms-input mt-2"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">
            Rating
          </label>
          <div className="mt-2 flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, rating: star }))}
                className={`rounded-full p-2 ${
                  form.rating >= star
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-600'
                }`}
              >
                <Star className="h-4 w-4" />
              </button>
            ))}
            <span className="text-xs text-slate-500">{form.rating} stars</span>
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-600">
            Comment
          </label>
          <textarea
            value={form.comment}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, comment: event.target.value }))
            }
            className="ttms-input mt-2 h-28"
            placeholder="Share your ride experience"
          />
        </div>
        <button type="submit" className="ttms-button">
          Submit rating
        </button>
      </form>
      <section className="grid gap-4 md:grid-cols-2">
        {ratings.map((review) => (
          <RatingCard key={review.id} review={review} />
        ))}
      </section>
    </div>
  )
}
