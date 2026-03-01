import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Container from './Container'

export default function Header({ navLinks }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-pearl/90 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="text-lg font-semibold tracking-tight text-ink">
            AEKE<span className="text-electric">.beta</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate transition hover:text-ink">
                {item.label}
              </a>
            ))}
            <a
              href="#acces-prioritaire"
              className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Rejoindre la waitlist
            </a>
          </nav>

          <button
            className="inline-flex rounded-xl border border-line bg-panel p-2 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-4 rounded-2xl border border-line bg-panel p-4 shadow-soft md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate hover:bg-pearl hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#acces-prioritaire"
                className="mt-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Rejoindre la waitlist
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
