import { BookOpen } from 'lucide-react'

const sizes = {
  sm: { box: 'h-40 w-28', title: 'text-sm', author: 'text-[10px]' },
  md: { box: 'h-52 w-36', title: 'text-base', author: 'text-xs' },
}

// A book cover drawn with CSS, so no image files are needed.
export default function BookCover({ title, author, cover, size = 'md', className = '' }) {
  const s = sizes[size]

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-l-sm rounded-r-lg bg-linear-to-br p-4 pl-6 text-white shadow-xl shadow-slate-900/20 ${cover} ${s.box} ${className}`}
    >
      {/* Spine shadow on the left edge */}
      <div className="absolute inset-y-0 left-0 w-2.5 bg-black/20" />
      <div className="absolute inset-y-0 left-2.5 w-px bg-white/30" />
      {/* Soft light circle for depth */}
      <div className="absolute -top-8 -right-8 size-24 rounded-full bg-white/15" />

      <BookOpen className="relative size-5 opacity-80" aria-hidden="true" />
      <div className="relative">
        <p className={`font-display leading-tight font-bold ${s.title}`}>{title}</p>
        <p className={`mt-1 tracking-wide uppercase opacity-80 ${s.author}`}>{author}</p>
      </div>
    </div>
  )
}
