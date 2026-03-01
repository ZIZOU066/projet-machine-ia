import { useMemo, useState } from 'react'

const menuItems = [
  ['Produit', '#produit'],
  ['Bénéfices', '#benefices'],
  ['Comparatif', '#comparatif'],
  ['FAQ', '#faq'],
  ["S’inscrire", '#inscription'],
]

const benefits = [
  {
    title: 'Performance guidée en temps réel',
    description:
      "Résistance intelligente, coaching visuel et progression mesurée séance après séance.",
  },
  {
    title: 'Un design pensé pour l’intérieur',
    description:
      'Une pièce premium qui s’intègre naturellement à votre espace de vie, sans encombrement inutile.',
  },
  {
    title: 'Gain de temps au quotidien',
    description:
      'Entraînez-vous quand vous voulez, sans trajets, sans contraintes, avec un niveau d’exigence élevé.',
  },
]

const steps = [
  {
    title: '1. Vous rejoignez la liste d’attente',
    description: 'Vous réservez votre priorité et recevez les informations de disponibilité en avant-première.',
  },
  {
    title: '2. Vous validez votre configuration',
    description: 'Nous vous accompagnons sur la meilleure configuration selon vos objectifs et votre espace.',
  },
  {
    title: '3. Vous démarrez avec un cadre clair',
    description: 'Installation rapide, parcours guidé, et entraînements optimisés dès les premiers jours.',
  },
]

const comparisonCards = [
  {
    title: 'Salle de sport',
    subtitle: 'Abonnement + déplacements',
    metrics: [
      { label: 'Confort quotidien', value: 42, hint: 'Horaires et trajets à gérer' },
      { label: 'Suivi personnalisé', value: 38, hint: 'Souvent standardisé' },
      { label: 'Maîtrise du budget', value: 56, hint: 'Coûts récurrents' },
    ],
  },
  {
    title: 'Coach personnel',
    subtitle: 'Accompagnement premium',
    metrics: [
      { label: 'Confort quotidien', value: 68, hint: 'Planning à coordonner' },
      { label: 'Suivi personnalisé', value: 94, hint: 'Très poussé' },
      { label: 'Maîtrise du budget', value: 24, hint: 'Investissement élevé' },
    ],
  },
  {
    title: 'NEXGYM ONE',
    subtitle: 'Performance à domicile',
    featured: true,
    metrics: [
      { label: 'Confort quotidien', value: 96, hint: 'Disponible à tout moment' },
      { label: 'Suivi personnalisé', value: 88, hint: 'Guidage intelligent en direct' },
      { label: 'Maîtrise du budget', value: 86, hint: 'Valeur durable sur le long terme' },
    ],
  },
]

const faqs = [
  {
    question: 'Quand les prochaines livraisons sont-elles prévues ?',
    answer:
      'Les prochaines unités sont attribuées par vagues. Les personnes inscrites sont contactées en priorité selon leur ordre d’inscription.',
  },
  {
    question: 'L’inscription engage-t-elle un paiement ?',
    answer: 'Non. La liste d’attente est gratuite et sans engagement. Elle vous donne un accès prioritaire aux prochaines disponibilités.',
  },
  {
    question: 'NEXGYM ONE convient-il à tous les niveaux ?',
    answer:
      'Oui. Les programmes et niveaux de résistance s’adaptent à votre condition physique, du maintien en forme à la préparation avancée.',
  },
  {
    question: 'Quel espace faut-il prévoir ?',
    answer:
      'NEXGYM ONE est conçu pour s’intégrer dans un espace de vie moderne. Lors de votre accès prioritaire, nous vous guidons sur l’implantation idéale.',
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
            muted: 'text-white/72',
            soft: 'text-white/55',
            strong: 'text-[#a4adff]',
            cta: 'bg-white text-black hover:bg-white/90',
            ghost: 'border-white/20 hover:border-white/40',
            imageOverlay: 'bg-gradient-to-t from-black/75 via-black/35 to-transparent',
            barTrack: 'bg-white/10',
            barFill: 'bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400',
            featured: 'border-indigo-300/50 bg-indigo-400/10',
            fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(111,126,255,0.3),transparent_44%),radial-gradient(circle_at_0%_50%,rgba(145,0,255,0.2),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(0,212,255,0.18),transparent_36%)]',
            heading: 'text-white',
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
            heading: 'text-[#0a0f1f]',
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
                aria-label="Changer le thème"
              >
                {isDark ? 'Clair' : 'Sombre'}
              </button>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${theme.ghost}`}
                aria-label="Changer le thème"
              >
                {isDark ? 'Clair' : 'Sombre'}
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
                {menuItems.map(([label, href]) => (
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
        <section id="produit" className="mx-auto w-[min(1100px,94%)] text-center">
          <p className="inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-fuchsia-300">
            Accès prioritaire · Série limitée
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            La performance haut niveau.
            <span className={`block ${theme.strong}`}>Directement chez vous.</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl text-sm font-semibold tracking-[0.02em] sm:text-base ${theme.muted}`}>
            NEXGYM ONE transforme votre intérieur en espace d’entraînement premium avec un guidage intelligent et des résultats mesurables.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#inscription" className={`rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide sm:text-base ${theme.cta}`}>
              Rejoindre la liste d’attente
            </a>
            <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme.soft}`}>
              Gratuit · Sans engagement
            </span>
          </div>

          <article className={`relative mt-12 overflow-hidden rounded-[2.2rem] border ${theme.shell}`}>
            <img
              src="/assets/nexgym/hero-premium-interior.jpg"
              alt="NEXGYM ONE installé dans un intérieur moderne"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className={`absolute inset-0 ${theme.imageOverlay}`} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
              <h2 className="max-w-xl text-2xl font-black uppercase leading-tight sm:text-4xl">
                Un équipement d’exception, pensé pour les standards les plus élevés.
              </h2>
            </div>
          </article>
        </section>

        <section id="benefices" className="mx-auto mt-16 w-[min(1100px,94%)]">
          <div className="mb-8 text-center">
            <h2 className={`text-3xl font-black uppercase sm:text-5xl ${theme.heading}`}>Bénéfices</h2>
            <p className={`mx-auto mt-3 max-w-2xl text-sm sm:text-base ${theme.muted}`}>
              Une expérience complète qui combine exigence sportive, confort quotidien et esthétique premium.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className={`rounded-2xl border p-6 ${theme.shell}`}>
                <h3 className="text-xl font-black uppercase leading-tight">{benefit.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{benefit.description}</p>
              </article>
            ))}
          </div>

          <article className={`mt-6 grid overflow-hidden rounded-[2rem] border md:grid-cols-[1.1fr,1fr] ${theme.shell}`}>
            <img
              src="/assets/nexgym/lifestyle-home-setup.jpg"
              alt="NEXGYM ONE dans un espace de vie premium"
              className="h-full min-h-[300px] w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-black uppercase sm:text-4xl">Le luxe de la régularité</h3>
              <p className={`mt-4 text-sm leading-relaxed ${theme.muted}`}>
                Votre espace est prêt en permanence. Vous gardez le rythme, sans perdre de temps, avec une qualité d’exécution constante.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.16em]">
                {['Design signature', 'Mise en route rapide', 'Progression mesurable'].map((item) => (
                  <span key={item} className={`rounded-full border px-3 py-2 ${theme.shellSoft}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-16 w-[min(1100px,94%)]" id="comment-marche">
          <div className="mb-8 text-center">
            <h2 className={`text-3xl font-black uppercase sm:text-5xl ${theme.heading}`}>Comment ça marche</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className={`rounded-2xl border p-6 ${theme.shell}`}>
                <h3 className="text-lg font-black uppercase leading-tight">{step.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="comparatif" className="mx-auto mt-16 w-[min(1100px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shellSoft}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">Comparatif</p>
            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Pourquoi NEXGYM ONE se démarque</h3>
            <p className={`mt-3 text-sm ${theme.muted}`}>Lecture simple : plus la barre est élevée, plus l’avantage est fort.</p>

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

        <section id="faq" className="mx-auto mt-16 w-[min(920px,94%)]">
          <div className="mb-8 text-center">
            <h2 className={`text-3xl font-black uppercase sm:text-5xl ${theme.heading}`}>FAQ</h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((item) => (
              <article key={item.question} className={`rounded-2xl border p-5 sm:p-6 ${theme.shell}`}>
                <h3 className="text-base font-black uppercase sm:text-lg">{item.question}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="inscription" className="mx-auto mt-16 w-[min(760px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-10 ${theme.shell}`}>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-violet-400">Inscription prioritaire</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-5xl">Rejoignez la liste d’attente</h2>

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
                Rejoindre la liste d’attente
              </button>
            </form>

            <p className={`mt-4 text-center text-xs font-semibold uppercase tracking-[0.1em] ${theme.soft}`}>
              Nous vous contactons uniquement pour les ouvertures de disponibilité.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
