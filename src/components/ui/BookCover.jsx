const sizes = {
  sm: 'h-40 w-28',
  md: 'h-52 w-36',
}

// A book cover image with a subtle spine shadow so it looks like a real book.
export default function BookCover({ title, author, image, size = 'md', className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-l-sm rounded-r-lg bg-slate-200 shadow-xl shadow-slate-900/25 ${sizes[size]} ${className}`}
    >
      <img
        src={image}
        alt={`Cover of ${title} by ${author}`}
        loading="lazy"
        className="size-full object-cover"
      />
      {/* Spine shadow and highlight on the left edge */}
      <div className="absolute inset-y-0 left-0 w-2.5 bg-linear-to-r from-black/30 to-transparent" aria-hidden="true" />
      <div className="absolute inset-y-0 left-2.5 w-px bg-white/30" aria-hidden="true" />
    </div>
  )
}
