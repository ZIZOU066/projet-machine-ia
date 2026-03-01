import { useMemo, useState } from 'react'

const menuItems = [
  ['Impact', '#impact'],
  ['Shift', '#shift'],
  ['Preuve', '#preuve'],
  ['Comparatif', '#comparatif'],
]

const compareRows = [
  { label: 'Temps', old: 'Trajets + attente', one: '25 min. Chez vous.' },
  { label: 'Suivi', old: 'Approx.', one: 'IA en direct' },
  { label: 'Motivation', old: 'Variable', one: 'Rituels guidés' },
  { label: 'Style', old: 'Basique', one: 'Objet premium' },
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
            muted: 'text-white/70',
            soft: 'text-white/50',
            strong: 'text-[#a4adff]',
            cta: 'bg-white text-black hover:bg-white/90',
            ghost: 'border-white/20 hover:border-white/40',
            fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(111,126,255,0.3),transparent_44%),radial-gradient(circle_at_0%_50%,rgba(145,0,255,0.2),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(0,212,255,0.18),transparent_36%)]',
          }
        : {
            root: 'bg-[#f5f7ff] text-[#0a0f1f]',
            shell: 'border-black/10 bg-white/95',
            shellSoft: 'border-black/10 bg-white',
            chip: 'border-black/15 bg-white/80 text-[#0a0f1f]',
            muted: 'text-slate-700',
            soft: 'text-slate-500',
            strong: 'text-indigo-700',
            cta: 'bg-[#0a0f1f] text-white hover:bg-black',
            ghost: 'border-black/20 hover:border-black/40',
            fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.24),transparent_44%),radial-gradient(circle_at_0%_50%,rgba(124,58,237,0.14),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(6,182,212,0.14),transparent_36%)]',
          },
    [isDark],
  )

  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${theme.root}`}>
      <div className={`pointer-events-none fixed inset-0 ${theme.fx}`} />

      <header className="fixed top-4 z-50 mx-auto flex w-full justify-center px-3">
        <div className={`w-full max-w-6xl rounded-full border px-3 py-2 backdrop-blur-2xl sm:px-5 ${theme.chip}`}>
          <div className="flex items-center justify-between gap-2">
            <a href="#top" className="text-sm font-black tracking-[0.2em] sm:text-base">
              NEXGYM ONE
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {menuItems.map(([label, href]) => (
                <a key={label} href={href} className={`rounded-full border px-4 py-2 text-xs font-semibold ${theme.ghost}`}>
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold ${theme.ghost}`}
              >
                {isDark ? 'Light' : 'Dark'}
              </button>
              <a href="#waitlist" className={`rounded-full px-4 py-2 text-xs font-bold ${theme.cta}`}>
                Rejoindre la liste d'attente
              </a>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold ${theme.ghost}`}
              >
                {isDark ? '☀' : '☾'}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className={`grid h-9 w-9 place-items-center rounded-full border ${theme.ghost}`}
                aria-label="Menu"
              >
                <span className="text-lg leading-none">≡</span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-3 grid gap-2 md:hidden">
              {[...menuItems, ["Liste d'attente", '#waitlist']].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium ${theme.shell}`}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main id="top" className="relative z-10 pb-20 pt-28">
        <section className="mx-auto w-[min(1100px,94%)] text-center" id="impact">
          <p className="inline-flex rounded-full border border-fuchsia-400/40 bg-fuchsia-400/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-fuchsia-300">
            Waitlist privée · Stock limité
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Le futur du training.
            <span className={`block ${theme.strong}`}>Maintenant chez vous.</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] sm:text-base ${theme.muted}`}>
            Fin des excuses. Fin des pertes de temps.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#waitlist" className={`rounded-full px-7 py-3 text-sm font-black uppercase tracking-wide sm:text-base ${theme.cta}`}>
              Rejoindre la liste d'attente
            </a>
            <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${theme.soft}`}>
              Sans paiement · Sans engagement
            </span>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {['1 machine', '0 compromis', '100% vous'].map((stat) => (
              <div key={stat} className={`rounded-3xl border px-5 py-7 text-xl font-extrabold uppercase ${theme.shell}`}>
                {stat}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-14 grid w-[min(1100px,94%)] gap-4" id="shift">
          <article className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shell}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-400">Problème</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">La salle vous vole du temps.</h2>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.1em] ${theme.muted}`}>
              Trajets. Files. Horaires. Motivation cassée.
            </p>
          </article>

          <article className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shell}`} id="preuve">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">Transformation</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">NEXGYM ONE recentre tout sur vous.</h2>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.1em] ${theme.muted}`}>
              IA live. Résistance intelligente. Sessions courtes.
            </p>
          </article>

          <article className={`rounded-[2rem] border p-6 sm:p-8 ${theme.shell}`}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-lime-400">Preuve</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Vous tenez le rythme.</h2>
            <p className={`mt-4 text-sm font-semibold uppercase tracking-[0.1em] ${theme.muted}`}>
              Plus régulier. Plus net. Plus premium.
            </p>
          </article>
        </section>

        <section id="comparatif" className="mx-auto mt-16 w-[min(900px,94%)]">
          <div className={`overflow-hidden rounded-[2rem] border ${theme.shellSoft}`}>
            <div className="grid grid-cols-3 border-b border-current/10 p-4 text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs">
              <span>Critère</span>
              <span>Ancien monde</span>
              <span>NEXGYM ONE</span>
            </div>
            {compareRows.map((row) => (
              <div key={row.label} className={`grid grid-cols-3 p-4 text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm ${theme.muted}`}>
                <span className="font-black text-current">{row.label}</span>
                <span>{row.old}</span>
                <span className="font-black text-current">{row.one}</span>
              </div>
            ))}
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
