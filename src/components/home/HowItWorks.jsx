import { steps } from '../../data/services.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Three steps to your next book"
          description="Reserving a book takes less time than finding a seat in the reading room."
        />

        <div className="relative mt-14">
          {/* Dashed line joining the steps on wide screens */}
          <div
            className="absolute top-8 right-[16%] left-[16%] hidden border-t-2 border-dashed border-primary-200 md:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="text-center">
                <Reveal delay={i * 0.15}>
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-white font-display text-2xl font-bold text-primary-600 shadow-lg ring-4 shadow-primary-600/10 ring-primary-50">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-muted">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
