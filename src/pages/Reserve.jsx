import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ReservationForm from '../components/reserve/ReservationForm.jsx'
import ReservationSuccess from '../components/reserve/ReservationSuccess.jsx'
import ReserveHeader from '../components/reserve/ReserveHeader.jsx'
import Container from '../components/ui/Container.jsx'
import PageTransition from '../components/ui/PageTransition.jsx'
import { findBook } from '../data/books.js'

export default function Reserve() {
  // "Reserve" buttons on the Home page link to /reserve?book=<id>, so pre-select that book
  const [searchParams] = useSearchParams()
  const defaultBook = findBook(searchParams.get('book'))?.id ?? ''

  // null while the form is being filled in; the submitted data once it succeeds
  const [reservation, setReservation] = useState(null)

  const handleSuccess = (data) => {
    setReservation(data)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <PageTransition>
      <ReserveHeader />
      <Container className="relative z-10 -mt-16 pb-24">
        <AnimatePresence mode="wait">
          {reservation ? (
            <motion.div key="success" exit={{ opacity: 0, y: -16 }}>
              <ReservationSuccess data={reservation} onNewReservation={() => setReservation(null)} />
            </motion.div>
          ) : (
            <motion.div key="form" exit={{ opacity: 0, y: -16 }}>
              <ReservationForm defaultBook={defaultBook} onSuccess={handleSuccess} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </PageTransition>
  )
}
