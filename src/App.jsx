import { useMemo, useState } from 'react'

const images = Array.from({ length: 10 }, (_, i) => `/assets/nexgym-${String(i + 1).padStart(2, '0')}.jpg`)

const pourquoiItems = [
  {
    title: 'Coaching IA en temps réel',
    text: 'NEXGYM ONE analyse chaque mouvement, corrige la posture et adapte automatiquement la résistance pour maximiser les résultats.',
  },
  {
    title: 'Résultats sans perte de temps',
    text: 'Des séances courtes et ultra efficaces conçues pour les agendas chargés. Vous progressez même avec 25 minutes par jour.',
  },
  {
    title: 'Design premium, compact, silencieux',
    text: 'Une machine élégante pensée pour la maison: qualité studio, finition haut de gamme, encombrement minimal.',
  },
]

const features = [
  'Résistance intelligente pilotée par IA',
  'Bibliothèque de sessions guidées multi-objectifs',
  'Suivi précis de la progression et des performances',
  'Interface intuitive et expérience immersive',
  'Mises à jour logicielles continues',
  'Accompagnement premium après livraison',
]

const faqs = [
  {
    q: 'Quand NEXGYM ONE sera-t-il à nouveau disponible ?',
    a: 'Le prochain réassort est en préparation. Les inscrits à la liste d’attente seront prévenus avant l’annonce publique.',
  },
  {
    q: 'L’inscription implique-t-elle un paiement ?',
    a: 'Non. Aucun paiement, aucun engagement. Vous réservez simplement votre priorité d’accès au retour en stock.',
  },
  {
    q: 'Est-ce adapté aux débutants ?',
    a: 'Oui. L’IA ajuste niveau, intensité et progression selon votre profil, que vous débutiez ou que vous soyez déjà sportif.',
  },
  {
    q: 'Puis-je l’utiliser dans un appartement ?',
    a: 'Oui. NEXGYM ONE est conçue pour être compacte et silencieuse, idéale pour une utilisation domestique premium.',
  },
]

const compareRows = [
  {
    label: 'Personnalisation en temps réel',
    gym: 'Limitée',
    coach: 'Excellente',
    nexgym: 'IA adaptative 24/7',
  },
  {
    label: 'Coût mensuel',
    gym: '€€',
    coach: '€€€€',
    nexgym: 'Rentable sur la durée',
  },
  {
    label: 'Disponibilité',
    gym: 'Horaires fixes',
    coach: 'Sur rendez-vous',
    nexgym: 'À domicile, quand vous voulez',
  },
  {
    label: 'Qualité du suivi',
    gym: 'Autonome',
    coach: 'Très élevée',
    nexgym: 'Analyse continue + data',
  },
]

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-current/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80">
        {kicker}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm/7 opacity-80 sm:text-base">{subtitle}</p>
    </div>
  )
}

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const theme = useMemo(
    () =>
      isDark
        ? {
            root: 'bg-[#07090f] text-white',
            surface: 'border-white/10 bg-white/[0.03]',
            pill: 'border-white/15 bg-black/50',
            muted: 'text-white/70',
            soft: 'text-white/55',
            cta: 'bg-white text-black hover:bg-white/90',
            ctaGhost: 'border-white/20 hover:border-white/40',
            bgFx:
              'bg-[radial-gradient(circle_at_8%_10%,rgba(90,108,255,0.32),transparent_33%),radial-gradient(circle_at_85%_10%,rgba(44,196,255,0.15),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.15),transparent_45%)]',
          }
        : {
            root: 'bg-[#f3f6fb] text-[#0f172a]',
            surface: 'border-black/10 bg-white/90',
            pill: 'border-black/15 bg-white/80',
            muted: 'text-slate-700',
            soft: 'text-slate-500',
            cta: 'bg-[#0f172a] text-white hover:bg-black',
            ctaGhost: 'border-black/20 hover:border-black/40',
            bgFx:
              'bg-[radial-gradient(circle_at_8%_10%,rgba(79,70,229,0.2),transparent_33%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.14),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.1),transparent_45%)]',
          },
    [isDark],
  )

  return (
    <div className={`min-h-screen ${theme.root} transition-colors duration-300`}>
      <div className={`pointer-events-none fixed inset-0 ${theme.bgFx}`} />

      <header className="sticky top-4 z-50 mx-auto w-[min(1120px,94%)]">
        <div className={`rounded-full border px-3 py-2 backdrop-blur-2xl sm:px-5 ${theme.pill}`}>
          <div className="flex items-center justify-between">
            <a href="#top" className="text-sm font-semibold tracking-[0.14em] sm:text-base">
              NEXGYM
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {[
                ['Pourquoi', '#pourquoi'],
                ['Comparatif', '#comparatif'],
                ['Fonctionnalités', '#features'],
                ['FAQ', '#faq'],
              ].map(([label, href]) => (
                <a key={label} href={href} className={`rounded-full border px-4 py-2 text-xs font-medium ${theme.ctaGhost}`}>
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold ${theme.ctaGhost}`}
              >
                {isDark ? 'Light' : 'Dark'}
              </button>
              <a href="#waitlist" className={`rounded-full px-4 py-2 text-xs font-semibold ${theme.cta}`}>
                Rejoindre la liste d’attente
              </a>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsDark((v) => !v)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold ${theme.ctaGhost}`}
              >
                {isDark ? 'Light' : 'Dark'}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className={`grid h-9 w-9 place-items-center rounded-full border ${theme.ctaGhost}`}
                aria-label="Ouvrir le menu"
              >
                <span className="text-lg leading-none">≡</span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-3 grid gap-2 md:hidden">
              {[
                ['Pourquoi NEXGYM ONE', '#pourquoi'],
                ['Comparatif', '#comparatif'],
                ['Fonctionnalités clés', '#features'],
                ['FAQ', '#faq'],
                ['Rejoindre la liste d’attente', '#waitlist'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl border px-4 py-3 text-sm ${theme.surface}`}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <main id="top" className="relative z-10 pb-20">
        <section className="mx-auto grid w-[min(1120px,94%)] gap-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200">
              Rupture de stock · Victime de son succès
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              NEXGYM ONE.
              <br />
              Votre salle IA premium, à la maison.
            </h1>
            <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${theme.muted}`}>
              L’expérience fitness nouvelle génération : coaching intelligent, résistance adaptative et résultats mesurables.
              Notre prochain stock revient bientôt. Inscrivez-vous maintenant pour passer en priorité.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className={`rounded-full px-6 py-3 text-sm font-semibold sm:text-base ${theme.cta}`}>
                Rejoindre la liste d’attente
              </a>
              <span className={`text-xs sm:text-sm ${theme.soft}`}>Aucun paiement · Aucun engagement · Accès prioritaire</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <img src={images[0]} alt="NEXGYM ONE vue principale" className="h-64 w-full rounded-3xl object-cover sm:h-80" />
            <img src={images[1]} alt="Détail design NEXGYM" className="h-64 w-full rounded-3xl object-cover sm:mt-8 sm:h-80" />
            <img src={images[2]} alt="Session d’entraînement intelligente" className="h-64 w-full rounded-3xl object-cover sm:h-80" />
            <img src={images[3]} alt="Interface premium NEXGYM ONE" className="h-64 w-full rounded-3xl object-cover sm:mt-8 sm:h-80" />
          </div>
        </section>

        <section id="pourquoi" className="mx-auto mt-24 w-[min(1120px,94%)]">
          <SectionTitle
            kicker="Pourquoi NEXGYM ONE"
            title="Plus qu’une machine: un vrai partenaire de progression"
            subtitle="Conçue pour celles et ceux qui veulent un standard premium, sans compromis entre performance, confort et design."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pourquoiItems.map((item) => (
              <article key={item.title} className={`rounded-3xl border p-6 ${theme.surface}`}>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="comparatif" className="mx-auto mt-24 w-[min(1120px,94%)]">
          <SectionTitle
            kicker="Comparatif"
            title="Salle classique, coach perso, ou NEXGYM ONE ?"
            subtitle="Quand on compare objectivement, NEXGYM ONE combine flexibilité, personnalisation et rentabilité long terme."
          />

          <div className={`mt-10 overflow-hidden rounded-3xl border ${theme.surface}`}>
            <div className="grid grid-cols-4 border-b border-current/10 p-4 text-[11px] font-semibold uppercase tracking-[0.15em] sm:text-xs">
              <div>Critères</div>
              <div>Salle de sport</div>
              <div>Coach perso</div>
              <div>NEXGYM ONE</div>
            </div>
            {compareRows.map((row) => (
              <div key={row.label} className={`grid grid-cols-4 p-4 text-xs sm:text-sm ${theme.muted}`}>
                <div className="font-semibold">{row.label}</div>
                <div>{row.gym}</div>
                <div>{row.coach}</div>
                <div className="font-semibold">{row.nexgym}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto mt-24 grid w-[min(1120px,94%)] gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionTitle
              kicker="Fonctionnalités clés"
              title="Chaque détail pensé pour une expérience premium"
              subtitle="Du hardware à l’IA, tout est conçu pour vous offrir une sensation de coaching haut niveau, chez vous."
            />
            <ul className="mt-8 grid gap-3">
              {features.map((feature) => (
                <li key={feature} className={`rounded-2xl border px-4 py-3 text-sm ${theme.surface}`}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.slice(4, 10).map((img, idx) => (
              <img
                key={img}
                src={img}
                alt={`Visuel NEXGYM ONE ${idx + 5}`}
                className={`h-40 w-full rounded-2xl object-cover sm:h-52 ${idx % 2 === 1 ? 'sm:translate-y-8' : ''}`}
              />
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto mt-24 w-[min(900px,94%)]">
          <SectionTitle
            kicker="FAQ"
            title="Des réponses claires, avant votre inscription"
            subtitle="Transparence totale: vous gardez le contrôle et vous décidez au moment du retour en stock."
          />

          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className={`group rounded-2xl border p-5 ${theme.surface}`}>
                <summary className="cursor-pointer list-none text-sm font-semibold sm:text-base">{item.q}</summary>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="waitlist" className="mx-auto mt-24 w-[min(760px,94%)]">
          <div className={`rounded-[2rem] border p-6 sm:p-10 ${theme.surface}`}>
            <SectionTitle
              kicker="Liste d’attente prioritaire"
              title="Soyez parmi les premiers informés du retour"
              subtitle="Remplissez ce formulaire. Vous recevrez en avant-première l’accès au prochain stock NEXGYM ONE."
            />

            <form className="mt-10 grid gap-4 sm:grid-cols-2">
              {[['Nom', 'nom', 'Votre nom'], ['Prénom', 'prenom', 'Votre prénom']].map(([label, name, placeholder]) => (
                <label key={name} className="text-sm font-medium">
                  {label}
                  <input
                    type="text"
                    name={name}
                    required
                    placeholder={placeholder}
                    className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none ${theme.surface}`}
                  />
                </label>
              ))}

              <label className="text-sm font-medium sm:col-span-2">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="vous@email.com"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none ${theme.surface}`}
                />
              </label>

              <label className="text-sm font-medium sm:col-span-2">
                Téléphone
                <input
                  type="tel"
                  name="telephone"
                  required
                  placeholder="Votre numéro"
                  className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none ${theme.surface}`}
                />
              </label>

              <button type="submit" className={`mt-2 rounded-full px-6 py-3 text-sm font-semibold sm:col-span-2 ${theme.cta}`}>
                Rejoindre la liste d’attente
              </button>

              <p className={`text-center text-xs sm:col-span-2 ${theme.soft}`}>
                En validant, vous acceptez d’être contacté uniquement pour les infos de disponibilité NEXGYM ONE.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
