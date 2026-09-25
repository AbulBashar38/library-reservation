import { toast } from 'sonner'
import PageTransition from '../components/PageTransition.jsx'

// Placeholder: the reservation form (React Hook Form + Zod) comes next.
export default function Reserve() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">Reserve a Book</h1>
        <p className="mt-4 text-muted">The form will go here.</p>
        <button
          type="button"
          onClick={() => toast.success('Toasts are working!')}
          className="mt-8 rounded-lg border border-primary-600 px-6 py-3 font-semibold text-primary-700 transition hover:bg-primary-50"
        >
          Test toast
        </button>
      </section>
    </PageTransition>
  )
}
