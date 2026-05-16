export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        className="ttms-button-outline px-3 py-2 text-xs"
      >
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        className="ttms-button-outline px-3 py-2 text-xs"
      >
        Next
      </button>
    </div>
  )
}
