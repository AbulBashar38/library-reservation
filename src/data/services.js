import { CalendarCheck, PackageCheck, Search } from 'lucide-react'

// Service cards shown in the "Services" section of the Home page.
export const services = [
  {
    icon: Search,
    title: 'Browse the Catalogue',
    description:
      'Search over 12,000 books across fiction, science, history, and technology, and check live availability before you visit.',
    cta: 'Explore books',
    to: '/#books',
  },
  {
    icon: CalendarCheck,
    title: 'Reserve Online',
    description:
      'Pick a book, choose your pickup date, and reserve it in under a minute. No queues and no phone calls.',
    cta: 'Reserve now',
    to: '/reserve',
  },
  {
    icon: PackageCheck,
    title: 'Quick Pickup',
    description:
      'Your book is held at the front desk for 48 hours. Show your library card and you are out the door in seconds.',
    cta: 'See how',
    to: '/#how-it-works',
  },
]

export const steps = [
  {
    title: 'Find a book',
    description: 'Browse featured titles or search the catalogue for the book you want.',
  },
  {
    title: 'Fill in the form',
    description: 'Enter your details, choose a pickup and return date, and submit.',
  },
  {
    title: 'Pick it up',
    description: 'Collect your book from the front desk within 48 hours of your pickup date.',
  },
]

export const stats = [
  { value: '12,000+', label: 'Books in catalogue' },
  { value: '3,500+', label: 'Active members' },
  { value: '48 hrs', label: 'Reservation hold' },
  { value: '4.9/5', label: 'Member rating' },
]
