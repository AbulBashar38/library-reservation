import Field from './Field.jsx'

// A radio group where each option looks like a selectable card.
// The real <input type="radio"> is visually hidden but still handles keyboard and screen readers.
export default function RadioCards({ name, label, required, error, registration, options, selected }) {
  return (
    <Field id={name} error={error}>
      <fieldset aria-describedby={error ? `${name}-error` : undefined}>
        <legend className="mb-1.5 block text-sm font-medium text-ink">
          {label}
          {required && <span className="ml-0.5 text-rose-500">*</span>}
        </legend>
        <div className="grid grid-cols-3 gap-3">
          {options.map(({ value, label: optionLabel, icon: Icon }) => {
            const checked = selected === value
            return (
              <label
                key={value}
                className={`relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border px-2 py-4 text-center text-sm font-medium transition has-focus-visible:ring-4 has-focus-visible:ring-primary-100 ${
                  checked
                    ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
                    : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400'
                }`}
              >
                <input type="radio" value={value} className="sr-only" {...registration} />
                <Icon className="size-5" aria-hidden="true" />
                {optionLabel}
                {checked && (
                  <span className="absolute top-2 right-2 size-2 rounded-full bg-primary-600" aria-hidden="true" />
                )}
              </label>
            )
          })}
        </div>
      </fieldset>
    </Field>
  )
}
