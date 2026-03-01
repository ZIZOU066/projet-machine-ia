import { useEffect, useMemo, useState } from 'react'
import { t } from './i18n/translations'

const SPOTS_LEFT = 87

const performanceGallery = [
  {
    src: '/assets/nexgym/performance-athlete-1.jpg',
    altKey: 'strength',
    titleKey: 'strength',
    textKey: 'strengthText',
  },
  {
    src: '/assets/nexgym/performance-athlete-2.jpg',
    altKey: 'cardio',
    titleKey: 'cardio',
    textKey: 'cardioText',
  },
  {
    src: '/assets/nexgym/performance-athlete-woman-new.jpg',
    altKey: 'mobility',
    titleKey: 'mobility',
    textKey: 'mobilityText',
  },
  {
    src: '/assets/nexgym/performance-detail-footwork.jpg',
    altKey: 'recovery',
    titleKey: 'recovery',
    textKey: 'recoveryText',
  },
]

const LANG_OPTIONS = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

export default function App() {
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const T = useMemo(() => t[lang], [lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const theme = useMemo(
    () => ({
      root: 'bg-[#06070a] text-white',
      shell: 'border-white/12 bg-white/[0.04]',
      shellSoft: 'border-white/10 bg-white/[0.03]',
      muted: 'text-white/70',
      soft: 'text-white/50',
      strong: 'text-[#a4adff]',
      cta: 'bg-white text-black hover:bg-white/90',
      imageOverlay: 'bg-gradient-to-t from-black/80 via-black/25 to-transparent',
      featured: 'border-[#86a3ff] bg-[#8ea6ff]/10 shadow-[0_0_0_1px_rgba(154,180,255,0.3),0_18px_40px_rgba(80,105,255,0.15)]',
      fx: 'bg-[radial-gradient(circle_at_50%_0%,rgba(111,126,255,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(145,0,255,0.12),transparent_45%)]',
      input: 'border-white/20 bg-white/5 text-white placeholder-white/40 focus:border-white/40 focus:ring-2 focus:ring-white/20 outline-none',
    }),
    [],
  )

  const navLinks = [
    [T.nav.product, '#hero'],
    [T.nav.benefits, '#benefices'],
    [T.nav.forWho, '#pour-qui'],
    [T.nav.compare, '#comparatif'],
    [T.nav.faq, '#faq'],
  ]

  const faqItems = [
    [T.faq.q1, T.faq.a1],
    [T.faq.q2, T.faq.a2],
    [T.faq.q3, T.faq.a3],
    [T.faq.q4, T.faq.a4],
  ]

  return (
    <div className={`min-h-screen overflow-x-hidden ${theme.root}`}>
      <div className={`pointer-events-none fixed inset-0 ${theme.fx}`} aria-hidden />

      {/* Header: clean nav, no chips */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#06070a]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-lg font-bold tracking-[0.12em] text-white">
            NEXGYM ONE
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {label}
              </a>
            ))}

            <div className="ml-2 flex items-center gap-3">
              <div className="flex rounded-lg border border-white/15 bg-white/5 p-0.5">
                {LANG_OPTIONS.map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                      lang === code ? 'bg-white text-black' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="#waitlist"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-white/90"
              >
                {T.nav.cta}
              </a>
            </div>
          </nav>

          {/* Mobile: menu + lang + CTA */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex rounded-lg border border-white/15 bg-white/5 p-0.5">
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                    lang === code ? 'bg-white text-black' : 'text-white/70'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5"
              aria-expanded={menuOpen}
              aria-label="Menu"
            >
              <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-white transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0a0d14] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-bold text-black"
              >
                {T.nav.cta}
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10 pt-24 pb-20">
        {/* Hero */}
        <section className="mx-auto w-[min(1120px,94%)] text-center" id="hero">
          <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {T.hero.title}
            <span className={`mt-2 block ${theme.strong}`}>{T.hero.titleHighlight}</span>
          </h1>
          <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${theme.muted}`}>
            {T.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#waitlist"
              className={`rounded-full px-8 py-4 text-sm font-black uppercase tracking-wide transition ${theme.cta}`}
            >
              {T.hero.cta}
            </a>
          </div>

          <p className={`mt-4 text-sm font-semibold ${theme.strong}`}>{T.hero.fomo}</p>

          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider text-white/80">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{T.hero.badge1}</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{T.hero.badge2}</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{T.hero.badge3}</span>
          </div>

          <article className="relative mt-12 overflow-hidden rounded-3xl border border-white/12">
            <img
              src="/assets/nexgym/hero-premium-interior.jpg"
              alt="NEXGYM ONE in a premium interior"
              className="h-[380px] w-full object-cover sm:h-[500px]"
            />
            <div className={`absolute inset-0 ${theme.imageOverlay}`} />
            <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{T.hero.heroLabel}</p>
              <h2 className="mt-2 max-w-2xl text-2xl font-black uppercase leading-tight sm:text-4xl">
                {T.hero.heroTitle}
              </h2>
            </div>
          </article>
        </section>

        {/* Pour qui: particuliers, hôtels, yachts, résidences */}
        <section className="mx-auto mt-20 w-[min(1120px,94%)]" id="pour-qui">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{T.forWho.eyebrow}</p>
          <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-4xl">{T.forWho.title}</h2>
          <p className={`mx-auto mt-3 max-w-2xl text-center text-sm ${theme.muted}`}>{T.forWho.subtitle}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <div className="text-2xl">🏠</div>
              <h3 className="mt-3 text-lg font-black uppercase">{T.forWho.home}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${theme.muted}`}>{T.forWho.homeDesc}</p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <div className="text-2xl">🏨</div>
              <h3 className="mt-3 text-lg font-black uppercase">{T.forWho.hotels}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${theme.muted}`}>{T.forWho.hotelsDesc}</p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <div className="text-2xl">🛥️</div>
              <h3 className="mt-3 text-lg font-black uppercase">{T.forWho.yachts}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${theme.muted}`}>{T.forWho.yachtsDesc}</p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <div className="text-2xl">✨</div>
              <h3 className="mt-3 text-lg font-black uppercase">{T.forWho.residences}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${theme.muted}`}>{T.forWho.residencesDesc}</p>
            </article>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="mx-auto mt-20 w-[min(1120px,94%)]" id="benefices">
          <div className="grid gap-4 md:grid-cols-3">
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <h3 className="text-lg font-black uppercase">{T.benefits.title1}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.benefits.text1}</p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <h3 className="text-lg font-black uppercase">{T.benefits.title2}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.benefits.text2}</p>
            </article>
            <article className={`rounded-2xl border p-6 ${theme.shell}`}>
              <h3 className="text-lg font-black uppercase">{T.benefits.title3}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.benefits.text3}</p>
            </article>
          </div>
        </section>

        {/* 4 piliers */}
        <section className="mx-auto mt-20 w-[min(1120px,94%)]" id="performance">
          <article className={`rounded-2xl border p-6 sm:p-8 ${theme.shell}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{T.performance.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">{T.performance.title}</h2>
            <p className={`mt-3 text-sm ${theme.muted}`}>{T.performance.subtitle}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {performanceGallery.map((item, i) => (
                <figure key={i} className={`overflow-hidden rounded-xl border ${theme.shell}`}>
                  <img src={item.src} alt="" className="h-52 w-full object-cover sm:h-56" />
                  <figcaption className="p-4">
                    <p className="text-sm font-black uppercase">{T.performance[item.titleKey]}</p>
                    <p className={`mt-2 text-xs leading-relaxed ${theme.muted}`}>{T.performance[item.textKey]}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </article>
        </section>

        {/* Comparatif */}
        <section id="comparatif" className="mx-auto mt-20 w-[min(1120px,94%)]">
          <div className={`rounded-2xl border p-6 sm:p-8 ${theme.shell}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">{T.compare.eyebrow}</p>
            <h3 className="mt-3 text-3xl font-black uppercase sm:text-4xl">{T.compare.title}</h3>
            <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.compare.subtitle}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <article className={`rounded-xl border p-5 ${theme.shell}`}>
                <h4 className="text-lg font-black uppercase">{T.compare.gym}</h4>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.compare.gymText}</p>
              </article>
              <article className={`rounded-xl border p-5 ${theme.shell}`}>
                <h4 className="text-lg font-black uppercase">{T.compare.coach}</h4>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.compare.coachText}</p>
              </article>
              <article className={`relative rounded-xl border-2 p-5 ${theme.featured}`}>
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#5f7dff] text-sm font-bold text-white">✓</span>
                <h4 className="text-lg font-black uppercase">{T.compare.us}</h4>
                <p className={`mt-3 text-sm leading-relaxed ${theme.muted}`}>{T.compare.usText}</p>
                <p className="mt-4 rounded-lg border border-[#6e8dff]/40 bg-[#6e8dff]/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#a4adff]">
                  {T.compare.usSummary}
                </p>
              </article>
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href="#waitlist" className={`rounded-full px-8 py-3.5 text-sm font-black uppercase tracking-wide ${theme.cta}`}>
                {T.compare.cta}
              </a>
              <span className={`text-xs font-semibold uppercase tracking-wider ${theme.soft}`}>{T.compare.ctaHint}</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto mt-20 w-[min(720px,94%)]">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-violet-400">{T.faq.eyebrow}</p>
          <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-4xl">{T.faq.title}</h2>

          <div className="mt-8 space-y-2">
            {faqItems.map(([q, a], i) => (
              <div
                key={i}
                className={`rounded-xl border ${theme.shell} overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-bold uppercase"
                >
                  {q}
                  <span className="text-lg text-white/60" aria-hidden>{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className={`border-t border-white/10 px-5 py-4 text-sm leading-relaxed ${theme.muted}`}>
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist + FOMO */}
        <section id="waitlist" className="mx-auto mt-20 w-[min(640px,94%)]">
          <div className={`rounded-3xl border-2 border-[#86a3ff]/30 bg-[#0d1118] p-6 sm:p-10 ${theme.shell}`}>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-violet-400">{T.waitlist.eyebrow}</p>
            <h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-4xl">{T.waitlist.title}</h2>
            <p className={`mx-auto mt-3 max-w-md text-center text-sm ${theme.muted}`}>{T.waitlist.subtitle}</p>

            {/* FOMO band */}
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-center">
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center text-sm font-bold text-amber-200">
                {T.waitlist.fomo}
              </div>
              <p className={`text-center text-sm font-semibold ${theme.strong}`}>
                {SPOTS_LEFT} {T.waitlist.spots}
              </p>
            </div>

            <form className="mx-auto mt-8 grid max-w-md gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="prenom"
                required
                placeholder={T.waitlist.firstname}
                className={`w-full rounded-xl border px-4 py-3.5 text-sm transition ${theme.input}`}
              />
              <input
                type="email"
                name="email"
                required
                placeholder={T.waitlist.email}
                className={`w-full rounded-xl border px-4 py-3.5 text-sm transition ${theme.input}`}
              />
              <button type="submit" className={`rounded-full px-6 py-4 text-sm font-black uppercase tracking-wide ${theme.cta}`}>
                {T.waitlist.cta}
              </button>
            </form>

            <p className={`mt-4 text-center text-xs font-medium ${theme.soft}`}>{T.waitlist.hint}</p>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p className={`text-xs font-semibold uppercase tracking-wider ${theme.soft}`}>{T.footer.line}</p>
          <a href="#waitlist" className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase ${theme.cta}`}>
            {T.footer.cta}
          </a>
        </div>
      </footer>
    </div>
  )
}
