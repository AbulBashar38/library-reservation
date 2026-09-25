import { Eye, EyeOff, Lock } from 'lucide-react'
import { useState } from 'react'
import Field from './Field.jsx'
import { controlClasses, describedBy } from './styles.js'

// A password field with a button that shows or hides what was typed.
export default function PasswordInput({ id, label, required, hint, error, registration, className, ...inputProps }) {
  const [visible, setVisible] = useState(false)

  return (
    <Field id={id} label={label} required={required} hint={hint} error={error} className={className}>
      <div className="relative">
        <Lock
          className={`pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 ${error ? 'text-rose-400' : 'text-slate-400'}`}
          aria-hidden="true"
        />
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          className={`${controlClasses(error, true)} pr-11`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          {...registration}
          {...inputProps}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:outline-none"
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </Field>
  )
}
