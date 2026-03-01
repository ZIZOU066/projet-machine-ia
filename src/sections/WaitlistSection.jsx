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
        <div className="rounded-[2rem] border border-line bg-panel p-7 shadow-soft sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate">Accès anticipé uniquement</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Rejoignez la waitlist Aeke et passez en priorité sur les prochaines vagues d’invitation
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            Inscription gratuite, sans paiement. Vous recevez les infos de lancement et votre fenêtre d’accès anticipé.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 sm:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              required
              placeholder="Prénom"
              className="rounded-xl border border-line bg-pearl px-4 py-3 text-sm text-ink placeholder:text-slate/80 focus:border-electric focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email pro"
              className="rounded-xl border border-line bg-pearl px-4 py-3 text-sm text-ink placeholder:text-slate/80 focus:border-electric focus:outline-none"
            />
            <button className="rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Demander mon accès
            </button>
          </form>

          {submitted && <p className="mt-4 text-sm text-mint">Parfait, vous êtes sur la waitlist. On revient vers vous rapidement.</p>}
        </div>
      </Container>
    </section>
  )
}
