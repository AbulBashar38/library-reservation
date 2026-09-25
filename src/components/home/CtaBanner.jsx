import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function CtaBanner() {
  return (
    <section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 via-primary-700 to-primary-900 px-6 py-16 text-center shadow-2xl shadow-primary-900/30 sm:px-16">
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-violet-400/20 blur-2xl" aria-hidden="true" />

            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to find your next great read?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-primary-100">
              Reserve a book today and we will have it waiting for you at the front desk.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/reserve" variant="light" size="lg">
                Reserve a Book <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
              <Button to="/#contact" variant="outlineLight" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
