import { stats } from '../../data/services.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'

// A white strip of numbers that overlaps the bottom of the hero.
export default function Stats() {
  return (
    <Container className="relative z-10 -mt-16">
      <Reveal>
        <dl className="grid grid-cols-2 divide-slate-100 rounded-2xl bg-white p-2 shadow-xl ring-1 shadow-slate-900/5 ring-slate-900/5 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <dt className="text-sm text-muted">{stat.label}</dt>
              <dd className="mt-1 font-display text-3xl font-bold text-primary-700">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Container>
  )
}
