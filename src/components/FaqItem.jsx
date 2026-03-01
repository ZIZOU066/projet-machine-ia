import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-medium text-white sm:text-base">{question}</span>
        <ChevronDown className={`h-4 w-4 text-white/70 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-relaxed text-white/70 sm:text-base">{answer}</p>}
    </article>
  )
}
