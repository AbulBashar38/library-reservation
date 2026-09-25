import { ChevronDown } from 'lucide-react'
import Field from './Field.jsx'
import { controlClasses, describedBy } from './styles.js'

export default function SelectInput({ id, label, required, hint, error, registration, placeholder, options, className }) {
  return (
    <Field id={id} label={label} required={required} hint={hint} error={error} className={className}>
      <div className="relative">
        <select
          id={id}
          className={`${controlClasses(error)} appearance-none pr-10`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, error, hint)}
          {...registration}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-slate-400"
          aria-hidden="true"
        />
      </div>
    </Field>
  )
}
