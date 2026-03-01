import Container from '../components/Container'
import heroVisual from '../assets/images/hero-device.svg'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-line bg-panel px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate">
              Programme accès anticipé
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              L’assistant IA sobre et premium pour exécuter plus, avec moins de bruit.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              Aeke clarifie vos priorités, structure vos actions et vous aide à avancer vite.
              Rejoignez la waitlist pour obtenir un accès anticipé avant l’ouverture publique.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#acces-anticipe"
                className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Rejoindre la waitlist
              </a>
              <a
                href="#fonctionnement"
                className="rounded-full border border-line bg-panel px-7 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Voir comment ça marche
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-7 -z-10 rounded-[34px] bg-electric/10 blur-3xl" />
            <img src={heroVisual} alt="Interface premium Aeke" className="w-full rounded-[28px] border border-line bg-panel p-2 shadow-glow" />
          </div>
        </div>
      </Container>
    </section>
  )
}
