import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router does not scroll to #hash links on its own.
// On every navigation this scrolls to the matching section, or to the top if there is no hash.
export default function useScrollToHash() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    // The section may not exist yet while the page transition is running, so retry for a moment.
    let attempts = 0
    let timer
    const scroll = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      else if (attempts++ < 20) timer = setTimeout(scroll, 50)
    }
    scroll()

    return () => clearTimeout(timer)
  }, [hash, key])
}
