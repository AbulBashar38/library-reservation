// The library catalogue. Books with `featured: true` are shown on the Home page;
// every book appears in the reservation form's dropdown.
// `cover` holds the Tailwind gradient classes used to draw each book cover.
export const books = [
  {
    id: 'midnight-library',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fiction',
    featured: true,
    rating: 4.6,
    copies: 3,
    description:
      'Between life and death there is a library, and every book offers a chance to try another life you could have lived.',
    cover: 'from-indigo-600 via-violet-600 to-purple-500',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    featured: true,
    rating: 4.8,
    copies: 5,
    description:
      'A practical guide to building good habits and breaking bad ones through tiny changes that add up to remarkable results.',
    cover: 'from-amber-400 via-orange-500 to-rose-500',
  },
  {
    id: 'sapiens',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    featured: true,
    rating: 4.7,
    copies: 2,
    description:
      'A brief history of humankind, from the first humans to walk the earth to the breakthroughs of the modern age.',
    cover: 'from-emerald-500 via-teal-500 to-cyan-600',
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Technology',
    featured: true,
    rating: 4.5,
    copies: 0,
    description:
      'A handbook of agile software craftsmanship that teaches you to write code that is easy to read, change, and maintain.',
    cover: 'from-sky-500 via-blue-600 to-indigo-700',
  },
  {
    id: 'mockingbird',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    featured: false,
    rating: 4.8,
    copies: 4,
    description: 'A story of justice and growing up in a small Southern town, told through the eyes of young Scout Finch.',
    cover: 'from-stone-600 via-stone-700 to-neutral-800',
  },
  {
    id: 'brief-history-of-time',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Science',
    featured: false,
    rating: 4.6,
    copies: 2,
    description: 'From the Big Bang to black holes, a clear introduction to the biggest questions about our universe.',
    cover: 'from-slate-800 via-indigo-900 to-violet-900',
  },
  {
    id: 'alchemist',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    featured: false,
    rating: 4.4,
    copies: 6,
    description: 'A young shepherd travels from Spain to Egypt in search of treasure, and finds his purpose along the way.',
    cover: 'from-yellow-500 via-amber-600 to-orange-700',
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Self-help',
    featured: false,
    rating: 4.5,
    copies: 1,
    description: 'Rules for focused success in a distracted world, and how to train your mind to concentrate deeply.',
    cover: 'from-red-600 via-rose-700 to-pink-800',
  },
]

export const findBook = (id) => books.find((book) => book.id === id)
