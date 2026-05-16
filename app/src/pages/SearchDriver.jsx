import { useMemo, useState } from 'react'
import { drivers } from '../data/mockData'
import DriverCard from '../components/DriverCard'
import QRScannerPlaceholder from '../components/QRScannerPlaceholder'
import SearchBar from '../components/SearchBar'
import SectionHeader from '../components/SectionHeader'

const filters = ['All', 'Verified', 'Available']

export default function SearchDriver() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      const matchesQuery =
        driver.id.toLowerCase().includes(query.toLowerCase()) ||
        driver.plate.toLowerCase().includes(query.toLowerCase()) ||
        driver.name.toLowerCase().includes(query.toLowerCase())
      const matchesFilter =
        filter === 'All' ||
        (filter === 'Verified' && driver.verified) ||
        (filter === 'Available' && driver.status === 'Available')
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <div className="ttms-section space-y-6 pb-16">
      <SectionHeader
        title="Search driver"
        subtitle="Find drivers by ID, QR, or plate number"
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card space-y-4 p-5">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search by Driver ID, plate, or name"
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  filter === item
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <QRScannerPlaceholder />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredDrivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </div>
      </div>
    </div>
  )
}
