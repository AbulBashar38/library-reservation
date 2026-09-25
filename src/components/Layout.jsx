import { Toaster } from 'sonner'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

// Wraps every page with the shared navbar, footer, and toast container.
export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="top-right" richColors closeButton />
    </div>
  )
}
