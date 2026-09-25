import { AnimatePresence, motion } from 'framer-motion'
import { CircleAlert } from 'lucide-react'

// Label + input + hint or error message.
// The error sits directly under its own input and animates in and out.
export default function Field({ id, label, required, hint, error, className = '', children }) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
          {label}
          {required && <span className="ml-0.5 text-rose-500">*</span>}
        </label>
      )}

      {children}

      <AnimatePresence mode="wait" initial={false}>
        {error ? (
          <motion.p
            key="error"
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="mt-1.5 flex items-start gap-1.5 text-sm text-rose-600"
          >
            <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {error}
          </motion.p>
        ) : (
          hint && (
            <motion.p
              key="hint"
              id={`${id}-hint`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="mt-1.5 text-xs text-muted"
            >
              {hint}
            </motion.p>
          )
        )}
      </AnimatePresence>
    </div>
  )
}
