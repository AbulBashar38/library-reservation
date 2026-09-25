import { motion } from 'framer-motion'

// Fades its children up the first time they scroll into view.
// `delay` lets cards in a grid appear one after another.
export default function Reveal({ delay = 0, className = '', children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
