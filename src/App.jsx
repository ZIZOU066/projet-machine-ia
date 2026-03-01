import { useMemo, useState } from 'react'

const menuItems = [
  ['Impact', '#impact'],
  ['Lifestyle', '#lifestyle'],
  ['Performance', '#performance'],
  ['Comparatif', '#comparatif'],
]

const performanceGallery = [
  {
    src: '/assets/nexgym/performance-athlete-1.jpg',
    alt: 'Athlète en effort de tirage avec résistance intelligente',
  },
  {
    src: '/assets/nexgym/performance-athlete-2.jpg',
    alt: 'Athlète en sprint avec suivi biomécanique',
  },
  {
    src: '/assets/nexgym/file_275---1ff9b3da-16b0-441b-aa37-2930485dbc88.jpg',
    alt: 'Athlète en séance premium avec NEXGYM ONE',
  },
  {
    src: '/assets/nexgym/performance-detail-footwork.jpg',
    alt: 'Travail de pieds avec capteur de résistance',
  },
]

const comparisonRows = [
  {
    criterion: 'Coût annuel',
    gym: '≈ 1 100 € / an',
    coach: '≈ 4 800 € / an',
    nexgym: 'Paiement unique + usage illimité',
  },
  {
    criterion: 'Flexibilité horaire',
    gym: 'Horaires imposés + trajets',
    coach: 'Créneaux à réserver',
    nexgym: 'Disponible 24/7 chez vous',
  },
  {
    criterion: 'Suivi personnalisé',
    gym: 'Programme standard',
    coach: 'Excellent, mais dépend du planning',
    nexgym: 'Guidage IA en direct, à chaque session',
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
                Rejoindre la waitlist
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
                {[...menuItems, ["Waitlist", '#waitlist']].map(([label, href]) => (
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
            Waitlist privée · Première série bientôt complète
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            NEXGYM ONE, la machine premium qui remplace la salle à domicile.
          </h1>
          <p className={`mx-auto mt-5 max-w-3xl text-sm font-semibold sm:text-lg ${theme.muted}`}>
            Entraînez-vous quand vous voulez, avec un guidage intelligent, sans trajet et sans compromis sur les résultats.
          </p>

          <p className="mx-auto mt-6 inline-flex max-w-2xl items-center justify-center rounded-2xl border border-rose-400/50 bg-rose-500/10 px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-rose-300 sm:text-sm">
            Rupture en cours · Prochain retour stock réservé aux inscrits waitlist
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#waitlist" className={`rounded-full px-8 py-3 text-sm font-black uppercase tracking-wide sm:text-base ${theme.cta}`}>
              Rejoindre la waitlist maintenant
            </a>
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
                Votre standard performance, installé chez vous.
              </h2>
            </div>
          </article>
        </section>

        <section className="mx-auto mt-14 grid w-[min(1100px,94%)] gap-4" id="lifestyle">
          <article className={`grid overflow-hidden rounded-[2rem] border md:grid-cols-[1.1fr,1fr] ${theme.shell}`}>
            <img
              src="/assets/nexgym/lifestyle-home-setup.jpg"
              alt="NEXGYM ONE dans une salle lifestyle à domicile"
              className="h-full min-h-[300px] w-full object-cover"
            />
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">Performance athlète</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Résistance intelligente. Résultats visibles.</h2>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.1em] ${theme.muted}`}>
              Chaque répétition est guidée, mesurée et optimisée en live.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {performanceGallery.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-2xl border border-current/10">
                  <img src={item.src} alt={item.alt} className="h-64 w-full object-cover object-center" />
                </figure>
              ))}
            </div>
          </article>
        </section>

        <section id="comparatif" className="mx-auto mt-16 w-[min(1100px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shellSoft}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-400">Comparatif business</p>
            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Salle, coach ou NEXGYM ONE : où est le meilleur ROI ?</h3>

            <div className="mt-8 overflow-hidden rounded-2xl border border-current/10">
              <div className="grid grid-cols-4 text-[10px] font-black uppercase tracking-[0.12em] sm:text-xs">
                <div className={`border-b border-r border-current/10 p-3 ${theme.shell}`}>Critère</div>
                <div className={`border-b border-r border-current/10 p-3 ${theme.shell}`}>Salle</div>
                <div className={`border-b border-r border-current/10 p-3 ${theme.shell}`}>Coach</div>
                <div className={`border-b p-3 ${theme.featured}`}>NEXGYM ONE</div>
              </div>

              {comparisonRows.map((row) => (
                <div key={row.criterion} className="grid grid-cols-4 text-[11px] font-semibold sm:text-sm">
                  <div className="border-b border-r border-current/10 p-3 font-bold uppercase tracking-[0.08em]">{row.criterion}</div>
                  <div className="border-b border-r border-current/10 p-3">{row.gym}</div>
                  <div className="border-b border-r border-current/10 p-3">{row.coach}</div>
                  <div className={`border-b p-3 ${theme.featured}`}>{row.nexgym}</div>
                </div>
              ))}
            </div>

            <p className={`mt-6 text-sm font-bold uppercase tracking-[0.08em] ${theme.muted}`}>
              Pour un profil exigeant avec peu de temps, NEXGYM ONE gagne: coût maîtrisé, liberté totale et suivi constant sans dépendre d'horaires externes.
            </p>
          </div>
        </section>

        <section id="waitlist" className="mx-auto mt-16 w-[min(760px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-10 ${theme.shell}`}>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-violet-400">Accès prioritaire</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-5xl">Prenez votre place sur la waitlist.</h2>

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
                Rejoindre la waitlist
              </button>
            </form>

            <p className={`mt-4 text-center text-xs font-semibold uppercase tracking-[0.1em] ${theme.soft}`}>
              Sans paiement. Un seul usage: vous prévenir avant l'ouverture publique.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
