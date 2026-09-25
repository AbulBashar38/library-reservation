// Dates from <input type="date"> are strings like "2026-10-05".
// These helpers work with that format in the user's local time zone.

export function toISODate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function today() {
  return toISODate(new Date())
}

export function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00`)
  date.setDate(date.getDate() + days)
  return toISODate(date)
}

export function daysBetween(start, end) {
  const ms = new Date(`${end}T00:00:00`) - new Date(`${start}T00:00:00`)
  return Math.round(ms / (1000 * 60 * 60 * 24))
}

export function formatDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
