import { motion } from 'framer-motion'
import { ArrowRight, CircleCheck, Sparkles, Star } from 'lucide-react'
import { books } from '../../data/books.js'
import BookCover from '../ui/BookCover.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'

// The parent staggers its children, so each line of the hero text animates in after the last.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const readers = [
  { initials: 'AR', color: 'bg-rose-400' },
  { initials: 'SK', color: 'bg-amber-400' },
  { initials: 'TM', color: 'bg-emerald-400' },
  { initials: 'NH', color: 'bg-sky-400' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50 via-white to-surface pt-12 pb-28 sm:pt-20">
      {/* Decorative background: dot grid and blurred colour blobs */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] bg-size-[22px_22px] opacity-60"
        aria-hidden="true"
      />
      <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary-200/50 blur-3xl" aria-hidden="true" />
      <div className="absolute top-40 -right-24 size-96 rounded-full bg-amber-200/40 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-700 shadow-sm"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            Online reservations are now open
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl leading-tight font-bold text-ink sm:text-5xl lg:text-6xl"
          >
            Reserve your next great read,{' '}
            <span className="bg-linear-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
              skip the wait.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            Browse thousands of books, reserve the ones you want in seconds, and pick them up at the
            front desk whenever it suits you. No queues, no disappointment.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button to="/reserve" size="lg">
              Book Now <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
            <Button to="/#services" variant="secondary" size="lg">
              Learn More
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            <div className="flex -space-x-3">
              {readers.map((r) => (
                <span
                  key={r.initials}
                  className={`grid size-10 place-items-center rounded-full text-xs font-bold text-white ring-2 ring-white ${r.color}`}
                >
                  {r.initials}
                </span>
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-0.5 text-amber-400" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted">
                Loved by <span className="font-semibold text-ink">3,500+</span> readers
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Illustration: a stack of floating book covers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative mx-auto h-80 w-full max-w-md sm:h-96"
          aria-hidden="true"
        >
          <div className="absolute inset-8 rounded-full bg-linear-to-br from-primary-200 to-violet-200 opacity-70 blur-2xl" />

          <motion.div
            className="absolute top-10 left-2 -rotate-12 sm:left-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BookCover {...books[2]} size="sm" />
          </motion.div>
          <motion.div
            className="absolute top-12 right-2 rotate-12 sm:right-6"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <BookCover {...books[0]} size="sm" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BookCover {...books[1]} className="shadow-2xl" />
          </motion.div>

          {/* Floating confirmation card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-2 left-0 z-20 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl ring-1 ring-slate-900/5 backdrop-blur sm:bottom-6"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
              <CircleCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Reservation confirmed</p>
              <p className="text-xs text-muted">Atomic Habits · Pickup Friday</p>
            </div>
          </motion.div>

          {/* Floating availability chip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-0 right-0 z-20 rounded-2xl bg-white/95 px-4 py-2.5 shadow-xl ring-1 ring-slate-900/5 backdrop-blur"
          >
            <p className="text-xs text-muted">Available today</p>
            <p className="font-display text-lg font-bold text-primary-700">12,000+ books</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
