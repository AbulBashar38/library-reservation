import { Check } from 'lucide-react'
import Field from './Field.jsx'

export default function Checkbox({ id, error, registration, children }) {
  return (
    <Field id={id} error={error}>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
        <span className="relative mt-0.5 grid size-5 shrink-0 place-items-center">
          <input
            id={id}
            type="checkbox"
            className={`peer size-5 cursor-pointer appearance-none rounded-md border bg-white transition checked:border-primary-600 checked:bg-primary-600 focus-visible:ring-4 focus-visible:ring-primary-100 focus-visible:outline-none ${
              error ? 'border-rose-400' : 'border-slate-300'
            }`}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            {...registration}
          />
          <Check
            className="pointer-events-none absolute size-3.5 text-white opacity-0 transition peer-checked:opacity-100"
            strokeWidth={3}
            aria-hidden="true"
          />
        </span>
        <span>{children}</span>
      </label>
    </Field>
  )
}
