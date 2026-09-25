import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export const contactInfo = [
  { icon: MapPin, label: 'Central Library, 12 College Road, Dhaka 1000' },
  { icon: Mail, label: 'hello@libreserve.com', href: 'mailto:hello@libreserve.com' },
  { icon: Phone, label: '+880 1712 345678', href: 'tel:+8801712345678' },
]

export const openingHours = [
  { icon: Clock, days: 'Sat – Thu', hours: '9:00 AM – 8:00 PM' },
  { icon: Clock, days: 'Friday', hours: '2:00 PM – 6:00 PM' },
]
