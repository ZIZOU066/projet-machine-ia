import { useMemo, useState } from 'react'

const menuItems = [
  ['Le produit', '#impact'],
  ['Pourquoi ça marche', '#lifestyle'],
  ['Résultats', '#performance'],
  ['Comparatif', '#comparatif'],
]

const performanceGallery = [
  {
    src: '/assets/nexgym/performance-athlete-1.jpg',
    alt: 'Athlète en effort de force avec résistance intelligente',
    title: 'Force fonctionnelle',
    text: 'Construisez puissance et stabilité avec une résistance précise et progressive.',
  },
  {
    src: '/assets/nexgym/performance-athlete-2.jpg',
    alt: 'Athlète en effort cardio et conditionnement',
    title: 'Cardio & conditionnement',
    text: 'Augmentez votre endurance avec des séances dynamiques adaptées à votre rythme.',
  },
  {
    src: '/assets/nexgym/performance-athlete-woman-new.jpg',
    alt: 'Athlète en mouvement pour mobilité et contrôle',
    title: 'Mobilité & contrôle',
    text: 'Améliorez vos amplitudes et la qualité de mouvement au quotidien.',
  },
  {
    src: '/assets/nexgym/performance-detail-footwork.jpg',
    alt: 'Travail de pieds et récupération active',
    title: 'Récupération active',
    text: 'Travaillez avec précision et réduisez le risque de blessure grâce au guidage IA.',
  },
]



const comparisonCards = [
  {
    title: 'Salle de sport',
    subtitle: 'Abonnement + trajets',
    metrics: [
      { label: 'Coût annuel', value: 58, hint: '≈ 1 100 €/an' },
      { label: 'Flexibilité', value: 42, hint: 'Horaires imposés' },
      { label: 'Suivi personnalisé', value: 36, hint: 'Souvent générique' },
    ],
  },
  {
    title: 'Coach personnel',
    subtitle: 'Ultra encadré, moins scalable',
    metrics: [
      { label: 'Coût annuel', value: 22, hint: '≈ 4 800 €/an' },
      { label: 'Flexibilité', value: 68, hint: 'Rendez-vous à bloquer' },
      { label: 'Suivi personnalisé', value: 95, hint: 'Très élevé' },
    ],
  },
  {
    title: 'NEXGYM ONE',
    subtitle: 'Setup premium à domicile',
    featured: true,
    metrics: [
      { label: 'Coût annuel', value: 86, hint: 'Maîtrisé sur la durée' },
      { label: 'Flexibilité', value: 96, hint: 'Quand vous voulez' },
      { label: 'Suivi personnalisé', value: 88, hint: 'IA guidée en direct' },
    ],
  },
]

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useMemo(
    () =>
      isDark
        ? {
            root: 'bg-[#06070a] text-white',
            shell: 'border-white/15 bg-white/[0.04]',
            shellSoft: 'border-white/10 bg-white/[0.03]',
            chip: 'border-white/15 bg-black/45 text-white',
            menuPanel: 'border-white/20 bg-[#0d1018]/95 text-white shadow-[0_18px_45px_rgba(0,0,0,0.5)]',
            menuItem: 'border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white',
            muted: 'text-white/70',
            soft: 'text-white/50',
            strong: 'text-[#a4adff]',
            cta: 'bg-white text-black hover:bg-white/90',
            ghost: 'border-white/20 hover:border-white/40',
            imageOverlay: 'bg-gradient-to-t from-black/75 via-black/30 to-transparent',
            barTrack: 'bg-white/10',
            barFill: 'bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400',
            featured: 'border-indigo-300/50 bg-indigo-400/10',
            fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(111,126,255,0.3),transparent_44%),radial-gradient(circle_at_0%_50%,rgba(145,0,255,0.2),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(0,212,255,0.18),transparent_36%)]',
          }
        : {
            root: 'bg-[#f5f7ff] text-[#0a0f1f]',
            shell: 'border-black/10 bg-white/95',
            shellSoft: 'border-black/10 bg-white',
            chip: 'border-black/15 bg-white/85 text-[#0a0f1f]',
            menuPanel: 'border-black/15 bg-white text-[#0a0f1f] shadow-[0_16px_40px_rgba(15,23,42,0.16)]',
            menuItem: 'border-black/10 bg-[#f7f9ff] hover:bg-white text-[#0a0f1f]',
            muted: 'text-slate-700',
            soft: 'text-slate-500',
            strong: 'text-indigo-700',
            cta: 'bg-[#0a0f1f] text-white hover:bg-black',
            ghost: 'border-black/20 hover:border-black/40',
            imageOverlay: 'bg-gradient-to-t from-[#0a0f1f]/55 via-[#0a0f1f]/8 to-transparent',
            barTrack: 'bg-slate-200',
            barFill: 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500',
            featured: 'border-indigo-400/40 bg-indigo-50',
            fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.24),transparent_44%),radial-gradient(circle_at_0%_50%,rgba(124,58,237,0.14),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(6,182,212,0.14),transparent_36%)]',
          },
    [isDark],
  )

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${theme.root}`}>
      <div className={`pointer-events-none fixed inset-0 ${theme.fx}`} />

      <header className="fixed top-3 z-50 mx-auto flex w-full justify-center px-3 sm:top-4">
        <div className={`w-full max-w-6xl rounded-2xl border px-3 py-2 shadow-xl backdrop-blur-2xl sm:rounded-full sm:px-5 ${theme.chip}`}>
          <div className="flex items-center justify-between gap-2">
            <a href="#top" className="text-sm font-black tracking-[0.18em] sm:text-base">
              NEXGYM ONE
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {menuItems.map(([label, href]) => (
                <a key={label} href={href} className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${theme.ghost}`}>
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${theme.ghost}`}
              >
                {isDark ? 'Light' : 'Dark'}
              </button>
              <a href="#waitlist" className={`rounded-full px-4 py-2 text-xs font-bold transition ${theme.cta}`}>
                Rejoindre la liste d'attente
              </a>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${theme.ghost}`}
              >
                {isDark ? '☀' : '☾'}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className={`relative grid h-10 w-10 place-items-center rounded-full border transition ${theme.ghost}`}
                aria-expanded={menuOpen}
                aria-label="Ouvrir le menu"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <span className={`absolute h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`} />
              </button>
            </div>
          </div>

          <div
            className={`grid transition-all duration-300 ease-out md:hidden ${
              menuOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className={`grid gap-2 rounded-2xl border p-2 ${theme.menuPanel}`}>
                {[...menuItems, ["Liste d'attente", '#waitlist']].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${theme.menuItem}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 pb-20 pt-28 sm:pt-32">
        <section className="mx-auto w-[min(1100px,94%)] text-center" id="impact">
          <p className="inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-fuchsia-300">
            Waitlist privée · Stock limité
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            La performance haut niveau.
            <span className={`block ${theme.strong}`}>Directement chez vous.</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] sm:text-base ${theme.muted}`}>
            NEXGYM ONE revient bientôt. Inscrivez-vous pour être informé en priorité.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#waitlist" className={`rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide sm:text-base ${theme.cta}`}>
              Rejoindre la liste d'attente
            </a>
            <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme.soft}`}>
              Sans paiement · Sans engagement
            </span>
          </div>

          <article className={`relative mt-12 overflow-hidden rounded-[2.2rem] border ${theme.shell}`}>
            <img
              src="/assets/nexgym/hero-premium-interior.jpg"
              alt="Machine NEXGYM ONE dans un intérieur premium"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className={`absolute inset-0 ${theme.imageOverlay}`} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">NEXGYM ONE</p>
              <h2 className="mt-3 max-w-xl text-2xl font-black uppercase leading-tight sm:text-4xl">
                L'objet fitness qui upgrade instantanément votre intérieur.
              </h2>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-14 grid w-[min(1100px,94%)] gap-4" id="lifestyle">
          <article className={`grid overflow-hidden rounded-[2rem] border md:grid-cols-[1.1fr,1fr] ${theme.shell}`}>
            <div className="relative h-full min-h-[300px] w-full">
              <img
                src="/assets/nexgym/lifestyle-home-setup.jpg"
                alt="NEXGYM ONE dans une salle lifestyle à domicile"
                className="h-full min-h-[300px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-400">Lifestyle / home setup</p>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Zéro trajet. Zéro friction.</h2>
              <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.1em] ${theme.muted}`}>
                Votre setup devient un espace d'entraînement premium, prêt en 10 secondes.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.16em]">
                {['Design signature', 'Encombrement réduit', 'Prêt chaque jour'].map((item) => (
                  <span key={item} className={`rounded-full border px-3 py-2 ${theme.shellSoft}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-14 w-[min(1100px,94%)]" id="performance">
          <article className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shell}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">One System. Four Training Pillars</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">4 piliers pour progresser plus vite, sans compromis.</h2>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.1em] ${theme.muted}`}>
              Un seul système pour la force, le cardio, la mobilité et la récupération.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {performanceGallery.map((item) => (
                <figure key={item.src} className={`overflow-hidden rounded-2xl border ${theme.shellSoft}`}>
                  <img src={item.src} alt={item.alt} className="h-56 w-full object-cover sm:h-64" />
                  <figcaption className="p-4">
                    <p className="text-sm font-black uppercase tracking-[0.08em]">{item.title}</p>
                    <p className={`mt-2 text-xs leading-relaxed ${theme.muted}`}>{item.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        </section>

        <section id="comparatif" className="mx-auto mt-16 w-[min(1100px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shellSoft}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">Comparatif express</p>
            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Le premium se voit en 3 métriques.</h3>
            <p className={`mt-3 text-xs font-semibold uppercase tracking-[0.1em] sm:text-sm ${theme.muted}`}>
              Plus la barre est haute, plus l'option est avantageuse pour votre quotidien.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {comparisonCards.map((option) => (
                <article
                  key={option.title}
                  className={`rounded-2xl border p-5 transition ${theme.shell} ${option.featured ? theme.featured : ''}`}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-400">{option.subtitle}</p>
                  <h4 className="mt-2 text-xl font-black uppercase">{option.title}</h4>

                  <div className="mt-5 space-y-4">
                    {option.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="mb-1 flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.12em]">
                          <span className={theme.muted}>{metric.label}</span>
                          <span>{metric.value}%</span>
                        </div>
                        <div className={`h-2.5 w-full overflow-hidden rounded-full ${theme.barTrack}`}>
                          <div className={`h-full rounded-full ${theme.barFill}`} style={{ width: `${metric.value}%` }} />
                        </div>
                        <p className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${theme.soft}`}>{metric.hint}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto mt-16 w-[min(760px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-10 ${theme.shell}`}>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-violet-400">Accès prioritaire</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-5xl">Prenez votre place.</h2>

            <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="prenom"
                required
                placeholder="Prénom"
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none ${theme.shellSoft}`}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none ${theme.shellSoft}`}
              />

              <button type="submit" className={`rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide sm:col-span-2 ${theme.cta}`}>
                Rejoindre la liste d'attente
              </button>
            </form>

            <p className={`mt-4 text-center text-xs font-semibold uppercase tracking-[0.1em] ${theme.soft}`}>
              Un seul usage: vous prévenir avant tout le monde.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
