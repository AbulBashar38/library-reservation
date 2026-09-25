import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button.jsx'

export default function ServiceCard({ icon: Icon, title, description, cta, to }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/10"
    >
      <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="size-7" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
      <Button to={to} variant="ghost" size="sm" className="mt-6 -ml-4 self-start">
        {cta}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Button>
    </motion.article>
  )
}
