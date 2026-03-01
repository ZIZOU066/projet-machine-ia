import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Container from './Container'

export default function Header({ navLinks }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/80 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="text-lg font-bold tracking-tight text-white">
            AEKE<span className="text-electric">.beta</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/75 transition hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href="#acces-anticipe"
              className="rounded-full bg-electric px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Rejoindre la waitlist
            </a>
          </nav>

          <button
            className="inline-flex rounded-xl border border-white/15 p-2 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#acces-anticipe"
                className="mt-2 rounded-xl bg-electric px-4 py-3 text-center text-sm font-semibold text-white"
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
