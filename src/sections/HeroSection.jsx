import Container from '../components/Container'
import heroVisual from '../assets/images/hero-device.svg'

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-radial pb-20 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.17em] text-mint">
              Accès anticipé privé
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Votre copilote IA premium pour gagner des heures chaque semaine.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Aeke centralise vos priorités, prépare vos actions et vous aide à exécuter plus vite — sans complexité technique.
              Rejoignez la waitlist et obtenez un accès prioritaire dès l’ouverture.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#acces-anticipe"
                className="rounded-full bg-electric px-7 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Rejoindre la waitlist
              </a>
              <a
                href="#fonctionnement"
                className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Voir comment ça marche
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[36px] bg-electric/20 blur-3xl" />
            <img src={heroVisual} alt="Interface premium Aeke" className="w-full rounded-[28px] border border-white/10 shadow-glow" />
          </div>
        </div>
      </Container>
    </section>
  )
}
