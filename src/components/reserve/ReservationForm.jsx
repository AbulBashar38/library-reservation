import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { IdCard, LoaderCircle, Mail, Phone, RotateCcw, Send, User } from 'lucide-react'
import { useForm, useWatch } from 'react-hook-form'
import { toast } from 'sonner'
import { books, findBook } from '../../data/books.js'
import { formats } from '../../data/formats.js'
import {
  emptyReservation,
  MAX_COPIES,
  MAX_LOAN_DAYS,
  MAX_PICKUP_AHEAD_DAYS,
  NOTES_MAX,
  reservationSchema,
} from '../../schemas/reservationSchema.js'
import { addDays, today } from '../../utils/date.js'
import Checkbox from '../form/Checkbox.jsx'
import RadioCards from '../form/RadioCards.jsx'
import SelectInput from '../form/SelectInput.jsx'
import TextArea from '../form/TextArea.jsx'
import TextInput from '../form/TextInput.jsx'
import Button from '../ui/Button.jsx'
import BookPreview from './BookPreview.jsx'
import FormSection from './FormSection.jsx'

const bookOptions = books.map((book) => ({
  value: book.id,
  label: `${book.title} by ${book.author}${book.copies === 0 ? ' (waitlist)' : ''}`,
}))

// Pretend to send the reservation to a server.
const fakeRequest = () => new Promise((resolve) => setTimeout(resolve, 1200))

// A short reference code such as "LR-K3F9QZ", built from the current time.
const createReference = () => `LR-${Date.now().toString(36).toUpperCase().slice(-6)}`

export default function ReservationForm({ defaultBook = '', onSuccess }) {
  const defaultValues = { ...emptyReservation, book: defaultBook }

  const {
    register,
    handleSubmit,
    reset,
    control,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reservationSchema),
    defaultValues,
    // Check a field when the user leaves it, then re-check on every change after that
    mode: 'onTouched',
  })

  // Live values for the preview sidebar, the character counter, and the date limits
  const [book, copies, format, pickupDate, returnDate, notes] = useWatch({
    control,
    name: ['book', 'copies', 'format', 'pickupDate', 'returnDate', 'notes'],
  })

  const onValid = async (data) => {
    await fakeRequest()
    const reference = createReference()
    const title = findBook(data.book).title
    toast.success('Reservation confirmed!', {
      description: `${title} is reserved for you. Reference: ${reference}`,
    })
    onSuccess({ ...data, reference })
  }

  const onInvalid = (fieldErrors) => {
    const count = Object.keys(fieldErrors).length
    toast.error(`Please fix ${count} field${count === 1 ? '' : 's'}`, {
      description: 'Check the messages under the highlighted fields.',
    })
  }

  const onReset = () => {
    reset(defaultValues)
    toast.info('The form has been cleared')
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit(onValid, onInvalid)}
        onReset={(e) => {
          e.preventDefault()
          onReset()
        }}
        // Turn off the browser's own validation bubbles so our messages are used instead
        noValidate
        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:col-span-2"
      >
        <FormSection step={1} title="Your details" description="So we know who is collecting the book.">
          <TextInput
            id="fullName"
            label="Full name"
            required
            icon={User}
            placeholder="e.g. Ayesha Rahman"
            autoComplete="name"
            registration={register('fullName')}
            error={errors.fullName?.message}
            className="sm:col-span-2"
          />
          <TextInput
            id="email"
            type="email"
            label="Email address"
            required
            icon={Mail}
            placeholder="name@example.com"
            autoComplete="email"
            registration={register('email')}
            error={errors.email?.message}
          />
          <TextInput
            id="phone"
            type="tel"
            label="Phone number"
            required
            icon={Phone}
            placeholder="01712345678"
            autoComplete="tel"
            inputMode="numeric"
            hint="11 digits, starting with 01"
            registration={register('phone')}
            error={errors.phone?.message}
          />
          <TextInput
            id="cardNumber"
            label="Library card number"
            required
            icon={IdCard}
            placeholder="LIB-12345"
            hint="Printed on the front of your library card"
            registration={register('cardNumber')}
            error={errors.cardNumber?.message}
            className="sm:col-span-2"
          />
        </FormSection>

        <FormSection step={2} title="Book details" description="Pick the book and how you would like it.">
          <SelectInput
            id="book"
            label="Book"
            required
            placeholder="Select a book…"
            options={bookOptions}
            registration={register('book')}
            error={errors.book?.message}
            className="sm:col-span-2"
          />
          <TextInput
            id="copies"
            type="number"
            label="Number of copies"
            required
            min={1}
            max={MAX_COPIES}
            hint={`1 to ${MAX_COPIES} copies`}
            // valueAsNumber makes React Hook Form return a number instead of a string
            registration={register('copies', { valueAsNumber: true })}
            error={errors.copies?.message}
          />
          <div className="hidden sm:block" />
          <div className="sm:col-span-2">
            <RadioCards
              name="format"
              label="Preferred format"
              required
              options={formats}
              selected={format}
              registration={register('format')}
              error={errors.format?.message}
            />
          </div>
        </FormSection>

        <FormSection step={3} title="Pickup and return" description="Choose when you will collect and return it.">
          <TextInput
            id="pickupDate"
            type="date"
            label="Pickup date"
            required
            min={today()}
            max={addDays(today(), MAX_PICKUP_AHEAD_DAYS)}
            hint={`Within the next ${MAX_PICKUP_AHEAD_DAYS} days`}
            registration={register('pickupDate', {
              // If a return date is already filled in, re-check it against the new pickup date
              onChange: () => getValues('returnDate') && trigger('returnDate'),
            })}
            error={errors.pickupDate?.message}
          />
          <TextInput
            id="returnDate"
            type="date"
            label="Return date"
            required
            min={pickupDate ? addDays(pickupDate, 1) : today()}
            max={pickupDate ? addDays(pickupDate, MAX_LOAN_DAYS) : undefined}
            hint={`After pickup, up to ${MAX_LOAN_DAYS} days later`}
            registration={register('returnDate')}
            error={errors.returnDate?.message}
          />
          <TextArea
            id="notes"
            label="Additional notes"
            placeholder="Anything we should know? e.g. I will be collecting after 5 PM."
            hint="Optional"
            maxLength={NOTES_MAX}
            length={notes?.length ?? 0}
            registration={register('notes')}
            error={errors.notes?.message}
            className="sm:col-span-2"
          />
          <div className="sm:col-span-2">
            <Checkbox id="terms" registration={register('terms')} error={errors.terms?.message}>
              I agree to the library terms and will return the book on or before the return date.{' '}
              <span className="text-rose-500">*</span>
            </Checkbox>
          </div>
        </FormSection>

        {/* Actions */}
        <div className="flex flex-col-reverse gap-3 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-center text-xs text-muted sm:text-left">
            Fields marked <span className="text-rose-500">*</span> are required.
          </p>
          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <Button type="reset" variant="secondary" disabled={isSubmitting}>
              <RotateCcw className="size-4" aria-hidden="true" />
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting} className="min-w-44">
              {isSubmitting ? (
                <>
                  <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                  Reserving…
                </>
              ) : (
                <>
                  <Send className="size-4" aria-hidden="true" />
                  Submit Reservation
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.form>

      <BookPreview
        bookId={book}
        copies={copies}
        format={format}
        pickupDate={pickupDate}
        returnDate={returnDate}
      />
    </div>
  )
}
