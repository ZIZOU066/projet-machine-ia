import { useMemo, useState } from 'react'

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useMemo(() => {
    if (isDark) {
      return {
        bg: 'bg-[#0B0C10]',
        surface: 'bg-[#1F2937] border-[#374151]',
        text: 'text-white',
        muted: 'text-[#9CA3AF]',
        chip: 'bg-[#111827]/90 border-[#374151] text-white',
        input: 'bg-[#111827] border-[#374151] text-white placeholder:text-[#9CA3AF]',
        shadow: 'shadow-none',
      }
    }
    return {
      bg: 'bg-[#F9FAFB]',
      surface: 'bg-white border-[#E5E7EB]',
      text: 'text-[#111827]',
      muted: 'text-[#4B5563]',
      chip: 'bg-white/90 border-[#E5E7EB] text-[#111827]',
      input: 'bg-white border-[#D1D5DB] text-[#111827] placeholder:text-[#6B7280]',
      shadow: 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
    }
  }, [isDark])

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      <header className="fixed top-4 z-50 w-full px-3">
        <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur ${theme.chip}`}>
          <a href="#top" className="text-sm font-extrabold tracking-[0.18em]">NEXGYM ONE</a>

          <nav className="hidden items-center gap-2 md:flex">
            <a href="#benefices" className="rounded-full px-3 py-2 text-xs font-semibold">Bénéfices</a>
            <a href="#showcase" className="rounded-full px-3 py-2 text-xs font-semibold">Produit</a>
            <a href="#comparatif" className="rounded-full px-3 py-2 text-xs font-semibold">Comparatif</a>
            <a href="#cta" className="rounded-full px-3 py-2 text-xs font-semibold">S’inscrire</a>
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              className="rounded-full border border-[#2563EB] px-3 py-2 text-xs font-semibold text-[#2563EB]"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              className="rounded-full border border-[#2563EB] px-3 py-2 text-xs font-semibold text-[#2563EB]"
            >
              {isDark ? '☀' : '☾'}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[#2563EB] text-[#2563EB]"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`mx-auto mt-2 max-w-6xl rounded-2xl border p-2 md:hidden ${theme.surface} ${theme.shadow}`}>
            {[
              ['Bénéfices', '#benefices'],
              ['Produit', '#showcase'],
              ['Comparatif', '#comparatif'],
              ['S’inscrire', '#cta'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top" className="mx-auto w-[min(1140px,94%)] pt-28">
        {/* SECTION 1: HERO */}
        <section className="py-24 text-center md:py-28">
          <p className="mx-auto inline-flex rounded-full border border-[#2563EB] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
            ACCÈS PRIORITAIRE - SÉRIE LIMITÉE
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
            LA PERFORMANCE HAUT NIVEAU. DIRECTEMENT CHEZ VOUS.
          </h1>
          <p className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${theme.muted}`}>
            NEXGYM ONE transforme votre intérieur en espace d'entraînement premium avec un guidage intelligent et des résultats mesurables.
          </p>
          <div className="mt-8">
            <a href="#cta" className="inline-block rounded-xl bg-[#2563EB] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
              REJOINDRE LA LISTE D'ATTENTE
            </a>
            <p className={`mt-3 text-sm ${theme.muted}`}>Gratuit - Sans engagement</p>
          </div>
        </section>

        {/* SECTION 2: BENEFICES */}
        <section id="benefices" className="py-24 md:py-28">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className={`rounded-2xl border p-6 ${theme.surface} ${theme.shadow}`}>
              <h3 className="text-lg font-extrabold uppercase">ÉQUIPEMENT COMPLET</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                Jusqu'à 100 kg de résistance numérique. Remplace une salle entière dans un espace minimaliste.
              </p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.surface} ${theme.shadow}`}>
              <h3 className="text-lg font-extrabold uppercase">COACHING INTELLIGENT</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                L'IA analyse votre posture en temps réel et adapte vos séances pour des résultats optimaux.
              </p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.surface} ${theme.shadow}`}>
              <h3 className="text-lg font-extrabold uppercase">GAIN DE TEMPS</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                Entraînez-vous quand vous voulez, sans trajets. Prêt en moins d'une minute.
              </p>
            </article>
          </div>
        </section>

        {/* SECTION 4: IMAGE SHOWCASE */}
        <section id="showcase" className="py-24 md:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-[#2563EB]/40">
            <img
              src="/assets/nexgym/lifestyle-home-setup.jpg"
              alt="NEXGYM ONE"
              className="h-[420px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="text-2xl font-extrabold uppercase text-white sm:text-4xl">0.5m² au sol. 100% de vos objectifs.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPARATIF SIMPLE */}
        <section id="comparatif" className="py-24 md:py-28">
          <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">POURQUOI NEXGYM ONE FAIT LA DIFFÉRENCE</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className={`rounded-2xl border p-7 ${theme.surface} ${theme.shadow}`}>
              <h3 className="text-xl font-extrabold">Solution classique</h3>
              <p className={`mt-3 text-base leading-relaxed ${theme.muted}`}>
                Abonnements mensuels coûteux, temps de trajet, matériel souvent occupé.
              </p>
            </div>
            <div className={`rounded-2xl border-2 border-[#2563EB] p-7 ${theme.surface} ${theme.shadow}`}>
              <h3 className="text-xl font-extrabold">NEXGYM ONE</h3>
              <p className={`mt-3 text-base leading-relaxed ${theme.muted}`}>
                Achat unique sans abonnement, disponible 24/7 chez vous, suivi ultra-personnalisé par IA.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FOOTER / CTA */}
        <section id="cta" className="py-24 md:py-28">
          <div className={`rounded-3xl border p-6 sm:p-10 ${theme.surface} ${theme.shadow}`}>
            <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">SOYEZ PARMI LES PREMIERS.</h2>
            <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <input className={`rounded-xl border px-4 py-3 text-sm ${theme.input}`} placeholder="Prénom" required />
              <input className={`rounded-xl border px-4 py-3 text-sm sm:col-span-2 ${theme.input}`} placeholder="Email" type="email" required />
              <button type="button" className="rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white sm:col-span-2">
                REJOINDRE LA LISTE D'ATTENTE
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
