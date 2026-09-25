import { Link } from 'react-router-dom'
import { contactInfo, openingHours } from '../../data/contact.js'
import { navLinks } from '../../data/navigation.js'
import { socialLinks } from '../../data/social.js'
import Container from '../ui/Container.jsx'
import Logo from './Logo.jsx'

function FooterHeading({ children }) {
  return <h3 className="text-sm font-semibold tracking-wider text-white uppercase">{children}</h3>
}

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-ink text-slate-400">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + social links */}
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">
            Reserve books online and pick them up when it suits you. Your campus library, one click
            away.
          </p>
          <ul className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-white/5 text-slate-300 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white hover:ring-primary-600"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/reserve" className="transition hover:text-white">
                Reserve a Book
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="mt-4 space-y-4 text-sm">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex gap-3">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary-200" aria-hidden="true" />
                {href ? (
                  <a href={href} className="transition hover:text-white">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Opening hours */}
        <div>
          <FooterHeading>Opening Hours</FooterHeading>
          <ul className="mt-4 space-y-4 text-sm">
            {openingHours.map(({ icon: Icon, days, hours }) => (
              <li key={days} className="flex gap-3">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary-200" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-slate-200">{days}</span>
                  {hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} LibReserve. All rights reserved.</p>
          <p>Information System Design &amp; Software Engineering Lab</p>
        </Container>
      </div>
    </footer>
  )
}
