// Shared look for text inputs, selects, and textareas. Invalid fields get a red border.
export function controlClasses(error, withIcon = false) {
  return [
    'block w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm transition',
    'placeholder:text-slate-400 focus:ring-4 focus:outline-none',
    withIcon ? 'pl-10' : '',
    error
      ? 'border-rose-400 bg-rose-50/40 focus:border-rose-500 focus:ring-rose-100'
      : 'border-slate-300 hover:border-slate-400 focus:border-primary-500 focus:ring-primary-100',
  ].join(' ')
}

// Links the input to its error (or hint) text so screen readers read it out.
export function describedBy(id, error, hint) {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}
