import { Link } from 'react-router-dom'
import PageTransition from '../components/ui/PageTransition.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-sm font-semibold text-primary-600">404</p>
        <h1 className="mt-2 font-display text-4xl font-bold">Page not found</h1>
        <Link to="/" className="mt-6 inline-block font-semibold text-primary-700 hover:underline">
          Back to home
        </Link>
      </section>
    </PageTransition>
  )
}
