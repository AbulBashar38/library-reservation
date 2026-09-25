import { z } from 'zod'
import { findBook } from '../data/books.js'
import { formats } from '../data/formats.js'
import { daysBetween, today } from '../utils/date.js'

export const MAX_COPIES = 3
export const MAX_LOAN_DAYS = 21
export const MAX_PICKUP_AHEAD_DAYS = 30
export const NOTES_MAX = 300

// Rules for each field on its own.
const fields = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, 'Full name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be 50 characters or fewer')
    .regex(/^[A-Za-z.' -]+$/, 'Name can only contain letters, spaces, dots, and apostrophes'),

  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email, like name@example.com'),

  // Bangladeshi mobile number: 11 digits starting with 013–019
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .regex(/^01[3-9]\d{8}$/, 'Enter an 11-digit mobile number, like 01712345678'),

  // Library card number: "LIB-" followed by 5 digits
  cardNumber: z
    .string()
    .trim()
    .min(1, 'Library card number is required')
    .regex(/^LIB-\d{5}$/i, 'Card number must look like LIB-12345'),

  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters'),

  confirmPassword: z.string().min(1, 'Please confirm your password'),

  book: z
    .string()
    .min(1, 'Please choose a book')
    .refine((id) => findBook(id), 'Please choose a book from the list'),

  // An empty number input becomes NaN, which fails z.number() with the message below
  copies: z
    .number({ error: 'Enter how many copies you need' })
    .int('Copies must be a whole number')
    .min(1, 'You need at least 1 copy')
    .max(MAX_COPIES, `You can reserve up to ${MAX_COPIES} copies`),

  pickupDate: z
    .string()
    .min(1, 'Pickup date is required')
    .refine((date) => date >= today(), 'Pickup date cannot be in the past')
    .refine(
      (date) => daysBetween(today(), date) <= MAX_PICKUP_AHEAD_DAYS,
      `Pickup must be within ${MAX_PICKUP_AHEAD_DAYS} days from today`,
    ),

  returnDate: z.string().min(1, 'Return date is required'),

  format: z.enum(
    formats.map((f) => f.value),
    { error: 'Choose a format' },
  ),

  notes: z.string().trim().max(NOTES_MAX, `Notes must be ${NOTES_MAX} characters or fewer`),

  terms: z.literal(true, { error: 'You must accept the library terms' }),
})

// Only run the date comparisons once both dates are filled in.
const datesFilled = (payload) =>
  fields.pick({ pickupDate: true, returnDate: true }).safeParse(payload.value).success

// Only compare the passwords once both have been typed.
const passwordsFilled = (payload) => Boolean(payload.value?.password && payload.value?.confirmPassword)

// Cross-field rules: they compare two fields, so they sit on the whole object.
// Without `when`, Zod would skip them until every other field was valid.
export const reservationSchema = fields
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
    when: passwordsFilled,
  })
  .refine((data) => data.returnDate > data.pickupDate, {
    message: 'Return date must be after the pickup date',
    path: ['returnDate'],
    when: datesFilled,
  })
  .refine((data) => daysBetween(data.pickupDate, data.returnDate) <= MAX_LOAN_DAYS, {
    message: `You can borrow a book for at most ${MAX_LOAN_DAYS} days`,
    path: ['returnDate'],
    when: datesFilled,
  })

export const emptyReservation = {
  fullName: '',
  email: '',
  phone: '',
  cardNumber: '',
  password: '',
  confirmPassword: '',
  book: '',
  copies: 1,
  pickupDate: '',
  returnDate: '',
  format: 'paperback',
  notes: '',
  terms: false,
}
