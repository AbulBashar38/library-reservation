import Field from './Field.jsx'
import { controlClasses, describedBy } from './styles.js'

// A textarea with a live "used / max" character counter.
export default function TextArea({ id, label, hint, error, registration, length, maxLength, className, ...props }) {
  const nearLimit = length > maxLength * 0.9

  return (
    <Field id={id} label={label} hint={hint} error={error} className={className}>
      <div className="relative">
        <textarea
          id={id}
          rows={4}
          className={`${controlClasses(error)} resize-y pb-7`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          {...registration}
          {...props}
        />
        <span
          className={`pointer-events-none absolute right-3 bottom-2.5 text-xs ${
            length > maxLength ? 'font-semibold text-rose-600' : nearLimit ? 'text-amber-600' : 'text-slate-400'
          }`}
        >
          {length}/{maxLength}
        </span>
      </div>
    </Field>
  )
}
