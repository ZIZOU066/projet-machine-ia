import Container from '../components/Container'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-line bg-panel px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate">
            Victime de son succès · actuellement indisponible
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Retour très bientôt.
            <br className="hidden sm:block" />
            Inscrivez-vous pour passer prioritaire.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Notre prochaine vague arrive bientôt. Rejoignez la waitlist maintenant pour être contacté en priorité dès le retour du stock.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#acces-anticipe"
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Rejoindre la liste prioritaire
            </a>
            <a
              href="#pourquoi-maintenant"
              className="rounded-full border border-line bg-panel px-7 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Pourquoi nous rejoindre maintenant
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
