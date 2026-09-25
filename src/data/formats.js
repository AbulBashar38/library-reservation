import { Book, BookOpen, TabletSmartphone } from 'lucide-react'

// Book formats a member can choose in the reservation form.
export const formats = [
  { value: 'hardcover', label: 'Hardcover', icon: Book },
  { value: 'paperback', label: 'Paperback', icon: BookOpen },
  { value: 'ebook', label: 'E-book', icon: TabletSmartphone },
]
