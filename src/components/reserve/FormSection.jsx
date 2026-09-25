// One numbered group of fields inside the reservation form.
export default function FormSection({ step, title, description, children }) {
  return (
    <section className="border-b border-slate-100 p-6 last:border-b-0 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-50 text-sm font-bold text-primary-700 ring-1 ring-primary-100">
          {step}
        </span>
        <div>
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          <p className="text-sm text-muted">{description}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">{children}</div>
    </section>
  )
}
