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
    <section id="waitlist" className="pb-24 pt-20 sm:pb-28 sm:pt-24">
      <Container>
        <div className="rounded-[2rem] border border-line bg-panel p-7 shadow-soft sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate">Accès prioritaire quand le stock revient</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Rejoignez maintenant la liste prioritaire
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate">
            C’est gratuit, sans paiement et sans engagement. Vous serez parmi les premiers informés dès la réouverture.
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
              placeholder="Email"
              className="rounded-xl border border-line bg-pearl px-4 py-3 text-sm text-ink placeholder:text-slate/80 focus:border-electric focus:outline-none"
            />
            <button className="rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              Demander mon accès prioritaire
            </button>
          </form>

          {submitted && <p className="mt-4 text-sm text-mint">Parfait, vous êtes sur la liste prioritaire. On vous contacte dès le retour.</p>}
        </div>
      </Container>
    </section>
  )
}
