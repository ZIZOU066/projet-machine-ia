import { useEffect, useState } from 'react'

const benefices = [
  {
    titre: 'Coach IA qui corrige chaque répétition',
    texte:
      'La machine analyse votre posture en temps réel, ajuste la résistance et vous guide à la voix pour progresser plus vite, sans vous blesser.',
  },
  {
    titre: 'Programme intelligent, même quand vous manquez de temps',
    texte:
      'Séances de 20 à 45 minutes optimisées selon votre objectif: perte de gras, tonification ou performance.',
  },
  {
    titre: 'Un équipement premium, compact et silencieux',
    texte:
      'Design salon-compatible, matériaux haut de gamme, stabilité maximale et capteurs précis pour un usage quotidien.',
  },
]

const etapes = [
  {
    titre: '1. Vous définissez votre objectif',
    texte: 'Niveau, temps disponible, zone à travailler: la machine crée un plan sur mesure dès la première session.',
  },
  {
    titre: '2. L’IA pilote votre entraînement',
    texte: 'Résistance adaptative, corrections instantanées et rythme personnalisé pendant toute la séance.',
  },
  {
    titre: '3. Vous suivez des résultats concrets',
    texte: 'Progression visible semaine après semaine avec indicateurs simples, clairs et motivants.',
  },
]

const raisons = [
  {
    titre: 'Priorité sur la prochaine vague de stock',
    texte: 'Les inscrits passent avant l’ouverture publique lors du retour en disponibilité.',
  },
  {
    titre: 'Infos de retour en temps réel',
    texte: 'Vous recevez en avant-première les dates de réassort et les créneaux de livraison.',
  },
  {
    titre: 'Accès aux démonstrations privées',
    texte: 'Invitations à des démos exclusives pour voir la machine en action avant tout le monde.',
  },
]

const faqs = [
  {
    q: 'Quel sera le prix final de la machine ?',
    r: 'Le tarif final sera communiqué avant la réouverture des ventes. L’inscription n’engage à aucun paiement et vous laisse totalement libre.',
  },
  {
    q: 'Quand la machine sera-t-elle de retour ?',
    r: 'La production est en cours de relance. Les inscrits à la liste d’attente recevront les dates exactes avant l’annonce publique.',
  },
  {
    q: 'Puis-je faire confiance à la qualité du produit ?',
    r: 'Oui. La machine est conçue pour un usage intensif à domicile, avec composants premium, suivi logiciel continu et support dédié.',
  },
]

function SectionTitle({ badge, titre, sousTitre }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
        {badge}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{titre}</h2>
      <p className="mt-4 text-base text-zinc-300 sm:text-lg">{sousTitre}</p>
    </div>
  )
}

function Card({ titre, texte }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:bg-white/[0.06]">
      <h3 className="text-lg font-semibold text-white">{titre}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{texte}</p>
    </article>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_90%_15%,rgba(14,116,144,0.15),transparent_40%)]" />

      <header className="sticky top-5 z-40 mx-auto w-[min(1100px,92%)]">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-zinc-900/70 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-6">
          <a href="#top" className="text-sm font-semibold tracking-wide text-white sm:text-base">
            Aeke Motion IA
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#waitlist" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-white/40 hover:text-white sm:inline-flex">
              Rejoindre la liste d’attente
            </a>
            <button
              type="button"
              onClick={() => setIsDark((v) => !v)}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10 sm:px-4 sm:text-sm"
              aria-label="Basculer le thème Dark ou Light"
            >
              Dark / Light
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10 pb-20">
        <section className="mx-auto grid w-[min(1100px,92%)] gap-10 pt-16 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Rupture de stock • Victime de son succès
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              La machine de sport avec IA intégrée qui remplace un coach à domicile.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Aeke Motion IA combine résistance intelligente, analyse de mouvement et coaching en direct pour des séances ultra efficaces. Notre dernière série est épuisée. Le prochain retour arrive bientôt: inscrivez-vous pour être prioritaire.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:scale-[1.01] hover:bg-zinc-100 sm:text-base"
              >
                Rejoindre la liste d’attente
              </a>
              <p className="text-sm text-zinc-400">Aucun paiement. Aucune précommande. Juste un accès prioritaire.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/[0.04] to-transparent p-6 shadow-2xl shadow-black/30">
            <div className="aspect-[4/5] rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_40%_20%,rgba(129,140,248,0.35),transparent_48%),linear-gradient(150deg,#18181b_5%,#0f172a_45%,#111827_100%)] p-6">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">Console IA embarquée</p>
                  <p className="mt-2 text-sm text-zinc-200">Correction posturale instantanée • Résistance adaptative • Progression pilotée</p>
                </div>
                <div className="rounded-xl border border-emerald-300/25 bg-emerald-400/10 p-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-emerald-200">Retour bientôt</p>
                  <p className="mt-1 text-sm font-medium text-white">Inscription prioritaire ouverte</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 w-[min(1100px,92%)]">
          <SectionTitle
            badge="Pourquoi ce produit"
            titre="Trois bénéfices qui changent réellement vos entraînements"
            sousTitre="Une expérience premium pensée pour obtenir plus de résultats en moins de temps."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefices.map((item) => (
              <Card key={item.titre} {...item} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-[min(1100px,92%)]">
          <SectionTitle
            badge="Comment ça fonctionne"
            titre="Simple, guidé, précis"
            sousTitre="Trois étapes claires pour transformer chaque séance en progrès mesurable."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {etapes.map((item) => (
              <Card key={item.titre} {...item} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-[min(1100px,92%)]">
          <SectionTitle
            badge="Pourquoi s’inscrire maintenant"
            titre="Ne manquez pas le prochain retour"
            sousTitre="Votre inscription vous place dans la file prioritaire avant la prochaine ouverture publique."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {raisons.map((item) => (
              <Card key={item.titre} {...item} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-[min(900px,92%)]">
          <SectionTitle
            badge="FAQ"
            titre="Réponses aux questions clés"
            sousTitre="Transparence totale avant votre inscription à la liste d’attente."
          />
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-indigo-300/45 open:bg-white/[0.06]"
              >
                <summary className="cursor-pointer list-none text-base font-medium text-white marker:hidden">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.r}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="waitlist" className="mx-auto mt-24 w-[min(760px,92%)]">
          <div className="rounded-[2rem] border border-white/15 bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
            <SectionTitle
              badge="Liste d’attente prioritaire"
              titre="Réservez votre accès au prochain stock"
              sousTitre="Complétez ce formulaire pour recevoir en priorité les informations de disponibilité."
            />

            <form className="mt-10 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-zinc-200">
                Nom
                <input
                  type="text"
                  name="nom"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-indigo-300/60 focus:outline-none"
                  placeholder="Votre nom"
                />
              </label>
              <label className="text-sm text-zinc-200">
                Prénom
                <input
                  type="text"
                  name="prenom"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-indigo-300/60 focus:outline-none"
                  placeholder="Votre prénom"
                />
              </label>
              <label className="text-sm text-zinc-200 sm:col-span-2">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-indigo-300/60 focus:outline-none"
                  placeholder="vous@email.com"
                />
              </label>
              <label className="text-sm text-zinc-200 sm:col-span-2">
                Téléphone
                <input
                  type="tel"
                  name="telephone"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-indigo-300/60 focus:outline-none"
                  placeholder="Votre numéro"
                />
              </label>

              <button
                type="submit"
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:scale-[1.01] hover:bg-zinc-100 sm:text-base"
              >
                Rejoindre la liste d’attente
              </button>

              <p className="sm:col-span-2 text-center text-xs text-zinc-400">
                En vous inscrivant, vous acceptez de recevoir uniquement les informations liées au retour en stock et aux démonstrations.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
