import { MotionConfig } from 'framer-motion'
import { Toaster } from 'sonner'
import useScrollToHash from '../../hooks/useScrollToHash.js'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

// Wraps every page with the shared navbar, footer, and toast container.
export default function Layout({ children }) {
  useScrollToHash()

  return (
    // reducedMotion="user" turns off animations for people who ask their OS for less motion
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Offset keeps toasts below the sticky navbar */}
        <Toaster position="top-right" offset={{ top: 80 }} mobileOffset={{ top: 72 }} richColors closeButton />
      </div>
    </MotionConfig>
  )
}
