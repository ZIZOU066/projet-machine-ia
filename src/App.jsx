import { useMemo, useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(true)

  const theme = useMemo(
    () =>
      dark
        ? {
            bg: 'bg-[#0B0C10]',
            card: 'bg-[#1F2937] border-[#374151]',
            text: 'text-white',
            muted: 'text-[#9CA3AF]',
            page: 'bg-[#0B0C10]'
          }
        : {
            bg: 'bg-[#F9FAFB]',
            card: 'bg-white border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]',
            text: 'text-[#111827]',
            muted: 'text-[#4B5563]',
            page: 'bg-[#FFFFFF]'
          },
    [dark],
  )

  return (
    <div className={`min-h-screen ${theme.page} ${theme.text} font-[Inter]`}>
      <div className="fixed right-4 top-4 z-50">
        <button
          onClick={() => setDark((v) => !v)}
          className="rounded-lg border border-[#2563EB] bg-[#2563EB] px-3 py-2 text-xs font-bold text-white"
        >
          {dark ? 'LIGHT' : 'DARK'}
        </button>
      </div>

      <main className="mx-auto w-[min(1120px,92%)] py-20 sm:py-[120px]">
        {/* SECTION 1: HERO */}
        <section className="text-center py-20 sm:py-[120px]">
          <p className="inline-flex rounded-full border border-[#2563EB] px-4 py-1 text-[11px] font-bold tracking-[0.18em] text-[#2563EB] uppercase">
            ACCÈS PRIORITAIRE - SÉRIE LIMITÉE
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
            LA PERFORMANCE HAUT NIVEAU. DIRECTEMENT CHEZ VOUS.
          </h1>
          <p className={`mx-auto mt-6 max-w-3xl text-base leading-relaxed ${theme.muted}`}>
            NEXGYM ONE transforme votre intérieur en espace d'entraînement premium avec un guidage intelligent et des résultats mesurables.
          </p>
          <div className="mt-8">
            <button className="rounded-xl bg-[#2563EB] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white">
              REJOINDRE LA LISTE D'ATTENTE
            </button>
            <p className={`mt-3 text-sm ${theme.muted}`}>Gratuit - Sans engagement</p>
          </div>
        </section>

        {/* SECTION 2: BÉNÉFICES */}
        <section className="py-20 sm:py-[120px]" id="benefices">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className={`rounded-2xl border p-6 ${theme.card}`}>
              <h3 className="text-lg font-extrabold uppercase">ÉQUIPEMENT COMPLET</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                Jusqu'à 100 kg de résistance numérique. Remplace une salle entière dans un espace minimaliste.
              </p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.card}`}>
              <h3 className="text-lg font-extrabold uppercase">COACHING INTELLIGENT</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                L'IA analyse votre posture en temps réel et adapte vos séances pour des résultats optimaux.
              </p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.card}`}>
              <h3 className="text-lg font-extrabold uppercase">GAIN DE TEMPS</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>
                Entraînez-vous quand vous voulez, sans trajets. Prêt en moins d'une minute.
              </p>
            </article>
          </div>
        </section>

        {/* SECTION 4: IMAGE SHOWCASE */}
        <section className="py-20 sm:py-[120px]" id="showcase">
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
        <section className="py-20 sm:py-[120px]" id="comparatif">
          <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">POURQUOI NEXGYM ONE FAIT LA DIFFÉRENCE</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className={`rounded-2xl border p-7 ${theme.card}`}>
              <h3 className="text-xl font-extrabold">Solution classique</h3>
              <p className={`mt-3 text-base leading-relaxed ${theme.muted}`}>
                Abonnements mensuels coûteux, temps de trajet, matériel souvent occupé.
              </p>
            </div>
            <div className={`rounded-2xl border-2 border-[#2563EB] p-7 ${theme.card}`}>
              <h3 className="text-xl font-extrabold">NEXGYM ONE</h3>
              <p className={`mt-3 text-base leading-relaxed ${theme.muted}`}>
                Achat unique sans abonnement, disponible 24/7 chez vous, suivi ultra-personnalisé par IA.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FOOTER / CTA */}
        <section className="py-20 sm:py-[120px]" id="cta">
          <div className={`rounded-3xl border p-6 sm:p-10 ${theme.card}`}>
            <h2 className="text-center text-3xl font-black uppercase sm:text-5xl">SOYEZ PARMI LES PREMIERS.</h2>
            <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <input className={`rounded-xl border px-4 py-3 text-sm ${theme.card} ${theme.text}`} placeholder="Prénom" required />
              <input className={`rounded-xl border px-4 py-3 text-sm sm:col-span-2 ${theme.card} ${theme.text}`} placeholder="Email" type="email" required />
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
