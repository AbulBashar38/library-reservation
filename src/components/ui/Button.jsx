import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 ' +
  'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ' +
  'disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-primary-600/40',
  secondary:
    'border border-slate-300 bg-white text-ink shadow-sm hover:border-primary-300 hover:text-primary-700',
  ghost: 'text-primary-700 hover:bg-primary-50',
  light: 'bg-white text-primary-700 shadow-lg hover:bg-primary-50',
  outlineLight: 'border border-white/40 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

// One button style for the whole app.
// Pass `to` for an in-app link, `href` for an external link, or neither for a <button>.
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
