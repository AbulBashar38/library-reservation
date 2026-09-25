import { motion } from 'framer-motion'
import { House, RotateCcw } from 'lucide-react'
import { findBook } from '../../data/books.js'
import { formats } from '../../data/formats.js'
import { daysBetween, formatDate } from '../../utils/date.js'
import BookCover from '../ui/BookCover.jsx'
import Button from '../ui/Button.jsx'

function SummaryItem({ label, value, wide }) {
  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <dt className="text-xs font-medium tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 text-sm font-medium break-words text-ink">{value}</dd>
    </div>
  )
}

// Shown after a valid submission: a confirmation plus a summary of everything the user entered.
export default function ReservationSuccess({ data, onNewReservation }) {
  const book = findBook(data.book)
  const waitlisted = book.copies === 0
  const days = daysBetween(data.pickupDate, data.returnDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
    >
      {/* Animated tick */}
      <div className="flex flex-col items-center px-6 pt-10 pb-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
          className="grid size-20 place-items-center rounded-full bg-emerald-100 ring-8 ring-emerald-50"
        >
          <svg viewBox="0 0 24 24" className="size-10 text-emerald-600" fill="none" aria-hidden="true">
            <motion.path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            />
          </svg>
        </motion.div>

        <h2 className="mt-6 font-display text-3xl font-bold text-ink">
          {waitlisted ? 'You are on the waitlist!' : 'Reservation confirmed!'}
        </h2>
        <p className="mt-2 max-w-md text-muted">
          {waitlisted
            ? `We will email ${data.email} as soon as a copy of ${book.title} is returned.`
            : `Thanks, ${data.fullName.split(' ')[0]}! ${book.title} will be waiting for you at the front desk.`}
        </p>
        <p className="mt-4 rounded-full bg-slate-100 px-4 py-1.5 font-mono text-sm font-semibold text-ink">
          Reference: {data.reference}
        </p>
      </div>

      {/* Summary of the submitted data */}
      <div className="border-t border-slate-100 bg-slate-50/60 p-6 sm:p-8">
        <h3 className="text-sm font-semibold text-ink">Reservation summary</h3>
        <div className="mt-5 flex flex-col gap-8 sm:flex-row">
          <div className="flex justify-center sm:block">
            <BookCover title={book.title} author={book.author} cover={book.cover} />
          </div>
          <dl className="grid flex-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <SummaryItem label="Full name" value={data.fullName} />
            <SummaryItem label="Library card" value={data.cardNumber.toUpperCase()} />
            <SummaryItem label="Email" value={data.email} />
            <SummaryItem label="Phone" value={data.phone} />
            <SummaryItem label="Book" value={`${book.title} by ${book.author}`} wide />
            <SummaryItem label="Copies" value={data.copies} />
            <SummaryItem label="Format" value={formats.find((f) => f.value === data.format).label} />
            <SummaryItem label="Pickup date" value={formatDate(data.pickupDate)} />
            <SummaryItem label="Return date" value={formatDate(data.returnDate)} />
            <SummaryItem label="Loan period" value={`${days} day${days === 1 ? '' : 's'}`} />
            <SummaryItem label="Terms" value="Accepted" />
            {/* Never show the password itself */}
            <SummaryItem label="Password" value="Set (hidden for your security)" />
            {data.notes && <SummaryItem label="Notes" value={data.notes} wide />}
          </dl>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-100 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
        <Button to="/" variant="secondary">
          <House className="size-4" aria-hidden="true" />
          Back to Home
        </Button>
        <Button onClick={onNewReservation}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Make another reservation
        </Button>
      </div>
    </motion.div>
  )
}
