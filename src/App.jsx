import { useMemo, useState } from 'react'

const menuItems = [
  ['Produit', '#hero'],
  ['Bénéfices', '#benefices'],
  ['Comparatif', '#comparatif'],
  ['Waitlist', '#waitlist'],
]

const proofBadges = ['100kg résistance', '0.5m² au sol', '24/7 à domicile', '0 abonnement']

const performanceGallery = [
  {
    src: '/assets/nexgym/performance-athlete-1.jpg',
    alt: 'Athlète en effort de force avec résistance intelligente',
    title: 'Force progressive',
    text: 'Résistance digitale jusqu’à 100kg pour développer puissance et contrôle sans surcharger votre espace.',
  },
  {
    src: '/assets/nexgym/performance-athlete-2.jpg',
    alt: 'Athlète en effort cardio et conditionnement',
    title: 'Cardio intelligent',
    text: 'Séances rythmées et adaptatives pour maintenir un haut niveau d’intensité sans déplacement.',
  },
  {
    src: '/assets/nexgym/performance-athlete-woman-new.jpg',
    alt: 'Athlète en mouvement pour mobilité et contrôle',
    title: 'Mobilité utile',
    text: 'Travail des amplitudes et du gainage pour mieux bouger au quotidien, avec plus de fluidité.',
  },
  {
    src: '/assets/nexgym/performance-detail-footwork.jpg',
    alt: 'Travail de pieds et récupération active',
    title: 'Récupération active',
    text: 'Programmes guidés pour enchaîner entraînement et récupération sans casser votre rythme.',
  },
]

const benefits = [
  {
    title: 'Un setup premium chez vous',
    text: 'NEXGYM ONE s’intègre dans 0.5m² et transforme instantanément votre intérieur en espace d’entraînement.',
  },
  {
    title: 'Disponibilité totale',
    text: 'Vous vous entraînez quand vous voulez, 24/7, sans trajets ni dépendance aux horaires d’une salle.',
  },
  {
    title: 'Coût maîtrisé',
    text: 'Un achat, pas d’abonnement mensuel. Vous investissez dans votre performance, pas dans des frais récurrents.',
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
            imageOverlay: 'bg-gradient-to-t from-black/75 via-black/30 to-transparent',
            featured: 'border-[#86a3ff] bg-[#8ea6ff]/12 shadow-[0_0_0_1px_rgba(154,180,255,0.35),0_18px_40px_rgba(80,105,255,0.18)]',
            fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(111,126,255,0.3),transparent_44%),radial-gradient(circle_at_0%_50%,rgba(145,0,255,0.2),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(0,212,255,0.18),transparent_36%)]',
          }
        : {
            root: 'bg-[#f5f7ff] text-[#0a0f1f]',
            shell: 'border-black/10 bg-white/95',
            shellSoft: 'border-black/10 bg-white',
            chip: 'border-black/15 bg-white/90 text-[#0a0f1f]',
            menuPanel: 'border-black/15 bg-white text-[#0a0f1f] shadow-[0_16px_40px_rgba(15,23,42,0.16)]',
            menuItem: 'border-black/10 bg-[#f7f9ff] hover:bg-white text-[#0a0f1f]',
            muted: 'text-slate-700',
            soft: 'text-slate-500',
            strong: 'text-indigo-700',
            cta: 'bg-[#0a0f1f] text-white hover:bg-black',
            ghost: 'border-black/20 hover:border-black/40',
            imageOverlay: 'bg-gradient-to-t from-[#0a0f1f]/55 via-[#0a0f1f]/8 to-transparent',
            featured: 'border-[#5f7dff] bg-[#eef2ff] shadow-[0_0_0_1px_rgba(95,125,255,0.28),0_16px_30px_rgba(95,125,255,0.15)]',
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
            <a href="#top" className="text-sm font-black tracking-[0.14em] sm:text-base">
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
                Réserver ma priorité
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
                <a
                  href="#waitlist"
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-bold transition ${theme.cta}`}
                >
                  Réserver ma priorité
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 pb-16 pt-28 sm:pt-32">
        <section className="mx-auto w-[min(1120px,94%)] text-center" id="hero">
          <h1 className="mx-auto max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Votre salle premium.
            <span className={`block ${theme.strong}`}>Sans quitter la maison.</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.12em] sm:text-base ${theme.muted}`}>
            NEXGYM ONE revient bientôt. Rejoignez la waitlist privée pour un accès prioritaire au prochain lancement.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#waitlist" className={`rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide sm:text-base ${theme.cta}`}>
              Rejoindre la waitlist
            </a>
            <a href="#comparatif" className={`rounded-full border px-7 py-3 text-sm font-black uppercase tracking-wide sm:text-base ${theme.ghost}`}>
              Voir pourquoi NEXGYM
            </a>
          </div>

          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] sm:gap-3">
            {proofBadges.map((badge) => (
              <span key={badge} className={`rounded-full border px-3 py-2 ${theme.shellSoft}`}>
                {badge}
              </span>
            ))}
          </div>

          <article className={`relative mt-10 overflow-hidden rounded-[2.2rem] border ${theme.shell}`}>
            <img
              src="/assets/nexgym/hero-premium-interior.jpg"
              alt="Machine NEXGYM ONE dans un intérieur premium"
              className="h-[420px] w-full object-cover sm:h-[530px]"
            />
            <div className={`absolute inset-0 ${theme.imageOverlay}`} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">NEXGYM ONE</p>
              <h2 className="mt-3 max-w-xl text-2xl font-black uppercase leading-tight sm:text-4xl">
                Un seul système pour entraîner force, cardio, mobilité et récupération.
              </h2>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-14 w-[min(1120px,94%)]" id="benefices">
          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.title} className={`rounded-[1.6rem] border p-6 ${theme.shell}`}>
                <h3 className="text-lg font-black uppercase">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#waitlist" className={`rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide ${theme.cta}`}>
              Obtenir l’accès prioritaire
            </a>
            <span className={`self-center text-xs font-semibold uppercase tracking-[0.12em] ${theme.soft}`}>
              Waitlist uniquement · aucune vente immédiate
            </span>
          </div>
        </section>

        <section className="mx-auto mt-14 w-[min(1120px,94%)]" id="performance">
          <article className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shell}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">Entraînement complet</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">4 piliers. 1 machine. Aucun compromis.</h2>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.08em] ${theme.muted}`}>
              Chaque bloc ci-dessous répond à un objectif différent, sans répéter la même promesse.
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

        <section id="comparatif" className="mx-auto mt-16 w-[min(1120px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shellSoft}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">Comparatif réel</p>
            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Pourquoi NEXGYM ONE prend l’avantage</h3>
            <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
              Même objectif: progresser. Mais sans subir contraintes de déplacements, d’abonnements ou de planning figé.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className={`rounded-2xl border p-5 ${theme.shell}`}>
                <h4 className="text-lg font-black uppercase">Salle de sport</h4>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                  Matériel mutualisé, pics d’affluence, horaires imposés et abonnement mensuel.
                </p>
              </article>

              <article className={`rounded-2xl border p-5 ${theme.shell}`}>
                <h4 className="text-lg font-black uppercase">Coach personnel</h4>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                  Encadrement fort, mais coût élevé et dépendance à des créneaux bloqués.
                </p>
              </article>

              <article className={`relative rounded-2xl border-2 p-5 ${theme.featured}`}>
                <span className="absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#5f7dff] text-sm font-black text-white">
                  ✓
                </span>
                <h4 className="text-lg font-black uppercase">NEXGYM ONE</h4>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                  Jusqu’à 100kg de résistance, 0.5m² d’espace, accès 24/7 à domicile, 0 abonnement mensuel.
                </p>
                <p className="mt-4 rounded-xl border border-[#6e8dff]/45 bg-[#6e8dff]/12 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#8ea6ff]">
                  Résumé: niveau premium + liberté totale + coût sous contrôle.
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#waitlist" className={`rounded-full px-6 py-3 text-sm font-black uppercase tracking-wide ${theme.cta}`}>
                Je veux mon accès prioritaire
              </a>
              <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${theme.soft}`}>
                Place limitée au prochain drop
              </span>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto mt-16 w-[min(760px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-10 ${theme.shell}`}>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-violet-400">Waitlist privée</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-5xl">Prenez votre place maintenant.</h2>
            <p className={`mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed ${theme.muted}`}>
              Vous recevez l’info de lancement en priorité. Aucun paiement aujourd’hui, aucun spam.
            </p>

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
              Usage unique: vous prévenir avant l’ouverture publique.
            </p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 pb-10 pt-2">
        <div className={`mx-auto flex w-[min(1120px,94%)] flex-col items-center justify-between gap-3 rounded-2xl border px-4 py-5 text-center sm:flex-row sm:text-left ${theme.shellSoft}`}>
          <p className={`text-xs font-semibold uppercase tracking-[0.1em] ${theme.soft}`}>
            NEXGYM ONE · Waitlist FR · lancement en préparation
          </p>
          <a href="#waitlist" className={`rounded-full px-5 py-2 text-xs font-black uppercase tracking-wide ${theme.cta}`}>
            Sécuriser ma priorité
          </a>
        </div>
      </footer>
    </div>
  )
}
