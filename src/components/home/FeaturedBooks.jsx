import { books } from '../../data/books.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import BookCard from './BookCard.jsx'

export default function FeaturedBooks() {
  return (
    <section id="books" className="scroll-mt-16 bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Books"
          title="Popular with readers this week"
          description="Hand-picked titles our members keep coming back for. Reserve yours before they are gone."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books
            .filter((book) => book.featured)
            .map((book, i) => (
              <Reveal key={book.id} delay={i * 0.1} className="h-full">
                <BookCard {...book} />
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  )
}
