import { motion } from 'framer-motion'
import { BookCopy, ChevronRight, ShieldCheck, Timer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MAX_COPIES } from '../../schemas/reservationSchema.js'
import Container from '../ui/Container.jsx'

const perks = [
  { icon: Timer, label: '48-hour hold' },
  { icon: BookCopy, label: `Up to ${MAX_COPIES} copies` },
  { icon: ShieldCheck, label: 'Free for members' },
]

export default function ReserveHeader() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 pt-10 pb-28 text-white">
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-20 size-96 rounded-full bg-violet-400/20 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-primary-100">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span className="font-medium text-white" aria-current="page">
            Reserve a Book
          </span>
        </nav>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="mt-6 font-display text-4xl font-bold sm:text-5xl">Reserve a Book</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-100">
            Fill in the form below and we will set your book aside at the front desk. It takes less than a
            minute.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {perks.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-white/20 backdrop-blur"
              >
                <Icon className="size-4" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
