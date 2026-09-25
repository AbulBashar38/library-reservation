import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, Info, Star } from 'lucide-react'
import { findBook } from '../../data/books.js'
import { formats } from '../../data/formats.js'
import { MAX_LOAN_DAYS } from '../../schemas/reservationSchema.js'
import { daysBetween, formatDate } from '../../utils/date.js'
import BookCover from '../ui/BookCover.jsx'

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-2.5 text-sm">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-medium text-ink">{value || '—'}</dd>
    </div>
  )
}

// Sidebar that updates live as the user fills in the form.
export default function BookPreview({ bookId, copies, format, pickupDate, returnDate }) {
  const book = findBook(bookId)
  const days = pickupDate && returnDate ? daysBetween(pickupDate, returnDate) : null
  const loanPeriod = days > 0 ? `${days} day${days === 1 ? '' : 's'}` : null

  return (
    <aside className="space-y-6 lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid min-h-64 place-items-center bg-linear-to-br from-slate-50 to-slate-100 p-6">
          <AnimatePresence mode="wait">
            {book ? (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 8, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <BookCover title={book.title} author={book.author} cover={book.cover} />
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-52 w-36 flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 p-4 text-center text-xs text-slate-400"
              >
                <BookOpen className="size-6" aria-hidden="true" />
                Choose a book to see it here
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6">
          {book ? (
            <>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
                  {book.genre}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium">
                  <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {book.rating}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">{book.title}</h3>
              <p className="text-sm text-muted">by {book.author}</p>
              <p
                className={`mt-2 flex items-center gap-1.5 text-xs font-medium ${book.copies > 0 ? 'text-emerald-600' : 'text-rose-600'}`}
              >
                <span className={`size-2 rounded-full ${book.copies > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                {book.copies > 0 ? `${book.copies} copies available` : 'All copies are out. You will join the waitlist.'}
              </p>
            </>
          ) : (
            <p className="text-center text-sm text-muted">Your reservation summary will appear here.</p>
          )}

          <dl className="mt-5 divide-y divide-slate-100 border-t border-slate-100">
            <Row label="Copies" value={copies > 0 ? copies : null} />
            <Row label="Format" value={formats.find((f) => f.value === format)?.label} />
            <Row label="Pickup" value={pickupDate && formatDate(pickupDate)} />
            <Row label="Return" value={returnDate && formatDate(returnDate)} />
            <Row label="Loan period" value={loanPeriod} />
          </dl>
        </div>
      </div>

      <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-5 text-sm text-primary-900">
        <p className="flex items-center gap-2 font-semibold">
          <Info className="size-4" aria-hidden="true" />
          Good to know
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-primary-900/80">
          <li>Books are held for 48 hours after your pickup date.</li>
          <li>You can borrow a book for up to {MAX_LOAN_DAYS} days.</li>
          <li>Bring your library card when you collect your book.</li>
        </ul>
      </div>
    </aside>
  )
}
