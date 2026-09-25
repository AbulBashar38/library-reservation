// The library catalogue. Books with `featured: true` are shown on the Home page;
// every book appears in the reservation form's dropdown.
// `image` points to a cover image in public/covers (covers from the Open Library Covers API).
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
    image: '/covers/midnight-library.jpg',
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
    image: '/covers/atomic-habits.jpg',
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
    image: '/covers/sapiens.jpg',
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
    image: '/covers/clean-code.jpg',
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
    image: '/covers/mockingbird.jpg',
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
    image: '/covers/brief-history-of-time.jpg',
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
    image: '/covers/alchemist.jpg',
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
    image: '/covers/deep-work.jpg',
  },
]

export const findBook = (id) => books.find((book) => book.id === id)
