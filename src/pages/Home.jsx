import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

// Placeholder: hero, cards, and other sections come next.
export default function Home() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Home</h1>
        <p className="mt-4 text-muted">Tailwind, routing, and page transitions are working.</p>
        <Link
          to="/reserve"
          className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
        >
          Go to Reserve
        </Link>
      </section>
    </PageTransition>
  )
}
