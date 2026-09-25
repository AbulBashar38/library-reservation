import { Library } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label="LibReserve home">
      <span className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-primary-500 to-primary-700 text-white shadow-md shadow-primary-600/30">
        <Library className="size-5" aria-hidden="true" />
      </span>
      <span className={`font-display text-xl font-bold ${light ? 'text-white' : 'text-ink'}`}>
        Lib<span className={light ? 'text-primary-200' : 'text-primary-600'}>Reserve</span>
      </span>
    </Link>
  )
}
