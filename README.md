# Library Book Reservation System

A small, frontend-only web app for reserving library books. It has two connected pages: a landing page that introduces the library, and a reservation form where a visitor can request a book.

This is an individual lab assignment for the **Information System Design and Software Engineering Lab** course. The goal is to turn a system's user requirements into a working, responsive UI.

> **No backend.** Everything runs in the browser. Submitted form data is only shown on screen and is not saved anywhere.

---

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev/) | Building the UI from components |
| [React Router DOM](https://reactrouter.com/) | Moving between the Home and Reservation pages without a page reload |
| [Tailwind CSS](https://tailwindcss.com/) | Styling and responsive layout with utility classes |
| [Framer Motion](https://motion.dev/) | Page transitions, scroll reveals, and hover and tap animations |
| [React Hook Form](https://react-hook-form.com/) | Managing form state, submission, and reset |
| [Zod](https://zod.dev/) | Defining the validation rules as a single schema |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | Connecting the Zod schema to React Hook Form |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications for success and error messages |
| [Lucide React](https://lucide.dev/) | Icons for cards, the navbar, and the footer |
| [Vite](https://vitejs.dev/) | Development server and production build |

---

## UI and Design

The UI is designed to look clean, modern, and polished, not just to meet the requirements.

- **Consistent design system**: one colour palette, one type scale, and consistent spacing and rounded corners, all set in the Tailwind config.
- **Clear visual hierarchy**: a bold hero heading, a solid primary button, an outlined secondary button, and cards with soft shadows.
- **Smooth animations** with Framer Motion:
  - pages fade and slide in when the route changes
  - the hero text and buttons animate in on first load
  - cards fade up one after another as they scroll into view
  - buttons and cards respond to hover and tap
  - the mobile menu slides open and closed
  - error messages animate in below their fields
- **Friendly feedback**: toast notifications confirm a successful reservation or warn when the form has errors.
- **Accessible**: form fields have labels, errors are linked to their inputs with `aria-describedby`, buttons have visible focus rings, and colours have enough contrast.

---

## Pages

### Page 1: Home (`/`)

Introduces the library to a first-time visitor.

- **Navigation bar**: at least 4 links (Home, Books, About, Reserve), one of which goes to the Reservation page. On small screens the links collapse into a hamburger menu that opens and closes when tapped.
- **Hero section**: a heading, a short description of the service, and two call-to-action buttons:
  - **Reserve a Book**, the primary button, which goes to the Reservation page
  - **Learn More**, the secondary button, which scrolls to the content section
- **Content section**: at least 3 cards, such as featured books or library services. Each card has an image or icon, a title, a short description, and a button.
- **Footer**: the library's contact details (address, email, phone) and social media links with icons.

### Page 2: Reservation Form (`/reserve`)

Collects a book reservation request from the user.

**Planned fields (at least 7 fields, at least 5 input types):**

| Field | Input type |
| --- | --- |
| Full Name | `text` |
| Email | `email` |
| Phone Number | `tel` |
| Library Card / Student ID | `text` |
| Book Title | `select` (dropdown) |
| Number of Copies | `number` |
| Pickup Date | `date` |
| Return Date | `date` |
| Preferred Format | `radio` (Hardcover / Paperback / E-book) |
| Additional Notes | `textarea` |
| Agree to Library Terms | `checkbox` |

**Client-side validation** (defined in one Zod schema and applied through React Hook Form):

- **Required fields**: every required field must be filled in.
- **Email format**: the email must be a valid address, such as `name@example.com`.
- **Pattern / length rule**: the phone number must match a set format, such as 11 digits for a Bangladeshi mobile number. The notes field has a maximum length.
- **Cross-field rule**: the Return Date must be after the Pickup Date. This is checked with Zod's `.refine()`, and the error is shown under the Return Date field.

**Behaviour:**

- An error message appears **directly below the field** it belongs to, not in a single alert box. Invalid fields also get a red border.
- **Submit** checks every field.
  - If any field is invalid, an error toast appears and the field errors are shown.
  - If all fields are valid, a success toast appears and a summary card of the entered data animates in on screen.
- **Reset** clears all fields and error messages using React Hook Form's `reset()`.

> Toasts are extra feedback only. The required per-field error messages are always shown next to their fields.

---

## Responsive Design

The layout adapts to mobile, tablet, and desktop screens using Tailwind's responsive breakpoints (`sm`, `md`, `lg`):

- The navbar shows a hamburger toggle on small screens.
- The cards stack in one column on mobile and sit side by side on larger screens.
- The form fields stack on mobile and use a two-column grid on wider screens.

---

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 18 or newer, and npm.

```bash
# Clone the repository
git clone <repository-url>
cd library-reservation

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL printed in the terminal, usually `http://localhost:5173`.

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## Assignment Requirements Checklist

### Page 1 Checklist

- [ ] Navbar with at least 4 links, including a link to Page 2
- [ ] Navbar collapses into a hamburger menu on small screens
- [ ] Hero section with a heading, a description, and primary and secondary CTA buttons
- [ ] At least 3 cards, each with an image or icon, a title, a description, and a button
- [ ] Footer with contact info and social links

### Page 2 Checklist

- [ ] At least 7 fields using at least 5 different input types
- [ ] Required-field validation
- [ ] Email format validation
- [ ] Pattern or length validation
- [ ] Cross-field validation
- [ ] Error messages shown next to each field
- [ ] Submit and Reset buttons
- [ ] Success message or data summary after a valid submission

### Extras

- [ ] Framer Motion animations (page transitions, scroll reveals, hover effects)
- [ ] React Hook Form + Zod validation
- [ ] Toast notifications with Sonner

---

## Author

**Basar**, Information System Design and Software Engineering Lab (individual assignment)
