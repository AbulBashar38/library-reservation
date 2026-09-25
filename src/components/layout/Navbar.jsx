import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/navigation.js'
import useScrolled from '../../hooks/useScrolled.js'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const location = useLocation()

  // NavLink can't tell hash links apart, so compare path + hash ourselves.
  const current = location.pathname + location.hash
  const isActive = (to) => current === to
  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg'
          : 'border-b border-transparent bg-white/60 backdrop-blur-md'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main">
          <Logo onClick={close} />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link.to) ? 'text-primary-700' : 'text-slate-600 hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary-600"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button to="/reserve" size="sm">
              Reserve a Book <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Hamburger toggle (small screens only) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-lg text-ink transition hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-200 lg:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      to={link.to}
                      onClick={close}
                      className={`block rounded-lg px-3 py-3 font-medium transition-colors ${
                        isActive(link.to)
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Button to="/reserve" onClick={close} className="mt-4 w-full">
                Reserve a Book <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
