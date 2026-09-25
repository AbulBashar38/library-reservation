import { NavLink } from 'react-router-dom'

// Placeholder: the full responsive navbar with a hamburger menu comes next.
export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="font-display text-xl font-bold text-primary-700">
          LibReserve
        </NavLink>
        <div className="flex gap-6 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reserve">Reserve</NavLink>
        </div>
      </nav>
    </header>
  )
}
