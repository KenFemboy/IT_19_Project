import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
      <Search className="h-4 w-4 text-slate-400" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-slate-600 outline-none"
      />
    </div>
  )
}
