import { useMemo, useState } from 'react'

const compareRows = [
  {
    label: 'Investissement',
    gym: { text: 'À perte (Abo mensuel)', value: 30 },
    coach: { text: 'Hors de prix', value: 60 },
    nex: { text: 'Unique & Rentabilisé', value: 98 },
  },
  {
    label: 'Temps',
    gym: { text: 'Trajets quotidiens', value: 30 },
    coach: { text: 'Planning contraint', value: 60 },
    nex: { text: 'Dispo 24/7', value: 98 },
  },
  {
    label: 'Suivi',
    gym: { text: 'Standard', value: 30 },
    coach: { text: 'Premium', value: 60 },
    nex: { text: 'IA Ultra-personnalisée', value: 98 },
  },
]

export default function App() {
  const [dark, setDark] = useState(true)

  const t = useMemo(() => {
    if (dark) {
      return {
        page: 'bg-[#09090B] text-white',
        card: 'bg-white/5 border-white/10',
        soft: 'text-[#9CA3AF]',
        line: 'border-white/10',
        barTrack: 'bg-white/10',
        input: 'bg-black/30 border-white/15 text-white placeholder:text-white/45',
        header: 'bg-black/40 border-white/15 text-white',
      }
    }
    return {
      page: 'bg-[#F5F7FB] text-[#111827]',
      card: 'bg-white border-black/10 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
      soft: 'text-[#4B5563]',
      line: 'border-black/10',
      barTrack: 'bg-slate-200',
      input: 'bg-white border-black/15 text-[#111827] placeholder:text-slate-500',
      header: 'bg-white/85 border-black/10 text-[#111827]',
    }
  }, [dark])

  return (
    <div className={`min-h-screen font-[Inter] ${t.page}`}>
      <header className="fixed top-4 z-50 w-full px-3">
        <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2 backdrop-blur-xl ${t.header}`}>
          <a href="#top" className="text-sm font-black tracking-[0.2em]">NEXGYM ONE</a>
          <nav className="hidden items-center gap-2 md:flex">
            {[
              ['Bénéfices', '#benefices'],
              ['Régularité', '#regularite'],
              ['Comment ça marche', '#etapes'],
              ['Comparatif', '#comparatif'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="rounded-full border border-current/15 px-3 py-2 text-xs font-semibold">{label}</a>
            ))}
            <button
              type="button"
              onClick={() => setDark((v) => !v)}
              className="rounded-full border border-[#2563EB] bg-[#2563EB] px-3 py-2 text-xs font-bold text-white"
            >
              {dark ? 'Light' : 'Dark'}
            </button>
          </nav>
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="md:hidden rounded-full border border-[#2563EB] bg-[#2563EB] px-3 py-2 text-xs font-bold text-white"
          >
            {dark ? '☀' : '☾'}
          </button>
        </div>
      </header>

      <main id="top" className="mx-auto w-[min(1140px,92%)] pt-28">
        {/* SECTION 1 HERO */}
        <section className="py-24 text-center md:py-[120px]">
          <p className="mx-auto inline-flex rounded-full border border-[#2563EB] bg-[#2563EB]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB] shadow-[0_0_24px_rgba(37,99,235,0.35)]">
            ACCÈS PRIORITAIRE • SÉRIE LIMITÉE
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
            LA PERFORMANCE HAUT NIVEAU.
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              DIRECTEMENT CHEZ VOUS.
            </span>
          </h1>
          <p className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${t.soft}`}>
            NEXGYM ONE transforme votre intérieur en espace d'entraînement premium. 100kg de résistance numérique, coaching par Intelligence Artificielle et 0 abonnement mensuel.
          </p>
          <div className="mt-8">
            <a href="#footer-cta" className="inline-block rounded-xl bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:animate-pulse">
              REJOINDRE LA LISTE D'ATTENTE
            </a>
            <p className={`mt-3 text-sm ${t.soft}`}>Gratuit • Sans engagement</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <img src="/assets/nexgym/hero-premium-interior.jpg" alt="NEXGYM ONE" className="h-[420px] w-full object-cover sm:h-[560px]" />
          </div>
        </section>

        {/* SECTION 2 BENEFICES */}
        <section id="benefices" className="py-24 md:py-[120px]">
          <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">LA TECHNOLOGIE AU SERVICE DE VOTRE CORPS.</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className={`rounded-2xl border p-6 ${t.card}`}>
              <h3 className="text-lg font-extrabold uppercase">100 KG DE RÉSISTANCE NUMÉRIQUE</h3>
              <p className={`mt-3 text-sm leading-relaxed ${t.soft}`}>Oubliez la fonte. Un réglage au gramme près, directement sur l'écran tactile 4K, pour un recrutement musculaire optimal.</p>
            </article>
            <article className={`rounded-2xl border p-6 ${t.card}`}>
              <h3 className="text-lg font-extrabold uppercase">COACHING IA EN TEMPS RÉEL</h3>
              <p className={`mt-3 text-sm leading-relaxed ${t.soft}`}>L'intelligence artificielle analyse votre posture et corrige vos mouvements en direct pour des séances 100% sécurisées.</p>
            </article>
            <article className={`rounded-2xl border p-6 ${t.card}`}>
              <h3 className="text-lg font-extrabold uppercase">0.5m² D'EMPRISE AU SOL</h3>
              <p className={`mt-3 text-sm leading-relaxed ${t.soft}`}>Une salle de sport complète qui se replie en 3 secondes pour devenir un élégant miroir design.</p>
            </article>
          </div>
        </section>

        {/* SECTION 3 FEATURE HIGHLIGHT */}
        <section id="regularite" className="py-24 md:py-[120px]">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <img src="/assets/nexgym/lifestyle-home-setup.jpg" alt="NEXGYM dans un intérieur" className="h-[420px] w-full rounded-2xl object-cover" />
            <div>
              <h2 className="text-3xl font-black uppercase sm:text-5xl">LE LUXE DE LA RÉGULARITÉ.</h2>
              <p className={`mt-4 text-base leading-relaxed ${t.soft}`}>Votre espace est prêt en permanence. Gardez le rythme sans perdre de temps, avec une qualité d'exécution constante.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['DESIGN SIGNATURE', 'MISE EN ROUTE RAPIDE', 'PROGRESSION MESURABLE'].map((tag) => (
                  <span key={tag} className={`rounded-full border px-3 py-2 text-xs font-semibold ${t.card}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 COMMENT CA MARCHE */}
        <section id="etapes" className="py-24 md:py-[120px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className={`rounded-2xl border p-6 ${t.card}`}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2563EB]">1. INSCRIPTION VIP</p>
              <p className={`mt-3 text-sm leading-relaxed ${t.soft}`}>Rejoignez la liste d'attente pour verrouiller votre réduction de pré-lancement.</p>
            </article>
            <article className={`rounded-2xl border p-6 ${t.card}`}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2563EB]">2. ACCÈS PRIORITAIRE</p>
              <p className={`mt-3 text-sm leading-relaxed ${t.soft}`}>Vous serez alerté 48h avant le grand public pour valider votre configuration.</p>
            </article>
            <article className={`rounded-2xl border p-6 ${t.card}`}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2563EB]">3. LIVRAISON PREMIUM</p>
              <p className={`mt-3 text-sm leading-relaxed ${t.soft}`}>Installez votre NEXGYM ONE en 5 minutes et commencez votre transformation.</p>
            </article>
          </div>
        </section>

        {/* SECTION 5 COMPARATIF BARS */}
        <section id="comparatif" className="py-24 md:py-[120px]">
          <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">POURQUOI NEXGYM ONE SE DÉMARQUE</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className={`rounded-2xl border p-6 ${t.card}`}>
              <h3 className="text-lg font-extrabold">Salle de sport</h3>
              {compareRows.map((r) => (
                <div key={r.label} className="mt-4">
                  <p className={`text-xs font-semibold uppercase ${t.soft}`}>{r.label} — {r.gym.text}</p>
                  <div className={`mt-2 h-2 rounded-full ${t.barTrack}`}><div className="h-2 rounded-full bg-[#6B7280]" style={{ width: `${r.gym.value}%` }} /></div>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl border p-6 ${t.card}`}>
              <h3 className="text-lg font-extrabold">Coach Personnel</h3>
              {compareRows.map((r) => (
                <div key={r.label} className="mt-4">
                  <p className={`text-xs font-semibold uppercase ${t.soft}`}>{r.label} — {r.coach.text}</p>
                  <div className={`mt-2 h-2 rounded-full ${t.barTrack}`}><div className="h-2 rounded-full bg-[#6B7280]" style={{ width: `${r.coach.value}%` }} /></div>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl border-2 border-[#2563EB] p-6 ${t.card}`}>
              <h3 className="text-lg font-extrabold">NEXGYM ONE</h3>
              {compareRows.map((r) => (
                <div key={r.label} className="mt-4">
                  <p className={`text-xs font-semibold uppercase ${t.soft}`}>{r.label} — {r.nex.text}</p>
                  <div className={`mt-2 h-2 rounded-full ${t.barTrack}`}><div className="h-2 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500" style={{ width: `${r.nex.value}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 FAQ */}
        <section id="faq" className="py-24 md:py-[120px]">
          <div className="grid gap-3">
            {[
              ['Quand les livraisons sont-elles prévues ?', 'Les premières unités sont attribuées par vagues.Les inscrits sont prioritaires.'],
              ["L'inscription engage-t-elle un paiement ?", 'Non. 100% gratuite et sans engagement.'],
              ['Y a-t-il un abonnement mensuel ?', 'Non. NEXGYM ONE est un investissement unique. Tout est inclus.'],
              ['Quel espace faut-il prévoir ?', 'Moins de 0.5m² au sol une fois replié.'],
            ].map(([q, a]) => (
              <details key={q} className={`rounded-2xl border p-4 ${t.card}`}>
                <summary className="cursor-pointer font-bold">{q}</summary>
                <p className={`mt-2 text-sm ${t.soft}`}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* SECTION 7 FOOTER CTA */}
        <section id="footer-cta" className="py-24 md:py-[120px]">
          <div className={`rounded-3xl border p-6 sm:p-10 ${t.card}`}>
            <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">REJOIGNEZ LA LISTE D'ATTENTE</h2>
            <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <input className={`rounded-xl border px-4 py-3 text-sm ${t.input}`} placeholder="Prénom" required />
              <input className={`rounded-xl border px-4 py-3 text-sm sm:col-span-2 ${t.input}`} placeholder="Email" type="email" required />
              <button type="button" className="rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white sm:col-span-2">
                SÉCURISER MA PLACE
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
