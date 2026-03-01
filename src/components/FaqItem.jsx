import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="rounded-2xl border border-line bg-panel shadow-soft">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-medium text-ink sm:text-base">{question}</span>
        <ChevronDown className={`h-4 w-4 text-slate transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="px-5 pb-6 text-sm leading-relaxed text-slate sm:px-6 sm:text-base">{answer}</p>}
    </article>
  )
}
