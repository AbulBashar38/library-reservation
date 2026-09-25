import { services } from '../../data/services.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to borrow smarter"
          description="From finding the right book to picking it up, LibReserve makes every step quick and simple."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1} className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
