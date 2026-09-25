import Reveal from './Reveal.jsx'

// Small label + big title + optional description, used at the top of each section.
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wider text-primary-600 uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </Reveal>
  )
}
