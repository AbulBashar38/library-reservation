import Field from './Field.jsx'
import { controlClasses, describedBy } from './styles.js'

// Used for text, email, tel, number, and date inputs.
// `registration` is the object returned by React Hook Form's register('fieldName').
export default function TextInput({
  id,
  label,
  required,
  hint,
  error,
  icon: Icon,
  registration,
  className,
  ...inputProps
}) {
  return (
    <Field id={id} label={label} required={required} hint={hint} error={error} className={className}>
      <div className="relative">
        {Icon && (
          <Icon
            className={`pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 ${error ? 'text-rose-400' : 'text-slate-400'}`}
            aria-hidden="true"
          />
        )}
        <input
          id={id}
          className={controlClasses(error, Boolean(Icon))}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          {...registration}
          {...inputProps}
        />
      </div>
    </Field>
  )
}
