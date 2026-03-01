import { useState } from 'react'
import Container from '../components/Container'

export default function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section id="acces-anticipe" className="pb-24 pt-20 sm:pb-28 sm:pt-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric/20 to-transparent p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Waitlist uniquement</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Réservez votre accès anticipé à Aeke</h2>
          <p className="mt-4 max-w-2xl text-white/75">
            Pas de carte bancaire. Pas d’engagement. Juste une place prioritaire pour tester Aeke avant l’ouverture publique.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              required
              placeholder="Prénom"
              className="rounded-xl border border-white/15 bg-midnight/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email pro"
              className="rounded-xl border border-white/15 bg-midnight/80 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-electric focus:outline-none"
            />
            <button className="rounded-xl bg-electric px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              Rejoindre
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-mint">Merci, vous êtes sur la waitlist. On vous contacte en priorité.</p>
          )}
        </div>
      </Container>
    </section>
  )
}
