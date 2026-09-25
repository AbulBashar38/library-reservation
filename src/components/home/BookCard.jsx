import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import BookCover from '../ui/BookCover.jsx'
import Button from '../ui/Button.jsx'

export default function BookCard({ id, title, author, genre, rating, copies, description, cover }) {
  const available = copies > 0

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-900/10"
    >
      {/* Cover area */}
      <div className="grid place-items-center bg-linear-to-br from-slate-50 to-slate-100 py-8">
        <div className="transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
          <BookCover title={title} author={author} cover={cover} />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
            {genre}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-ink">
            <Star className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            {rating}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm text-muted">by {author}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <span className={`flex items-center gap-1.5 text-xs font-medium ${available ? 'text-emerald-600' : 'text-rose-600'}`}>
            <span className={`size-2 rounded-full ${available ? 'bg-emerald-500' : 'bg-rose-500'}`} />
            {available ? `${copies} available` : 'Waitlist only'}
          </span>
          <Button to={`/reserve?book=${id}`} size="sm" variant={available ? 'primary' : 'secondary'}>
            {available ? 'Reserve' : 'Join waitlist'}
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
