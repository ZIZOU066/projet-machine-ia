import { useEffect, useMemo, useState } from 'react'
import { Home, Building2, Ship, Building } from 'lucide-react'
import { t } from './i18n/translations'

const SPOTS_LEFT = 87

const performanceGallery = [
  { src: '/assets/nexgym/performance-athlete-1.jpg', titleKey: 'strength', textKey: 'strengthText' },
  { src: '/assets/nexgym/performance-athlete-2.jpg', titleKey: 'cardio', textKey: 'cardioText' },
  { src: '/assets/nexgym/performance-athlete-woman-new.jpg', titleKey: 'mobility', textKey: 'mobilityText' },
  { src: '/assets/nexgym/performance-detail-footwork.jpg', titleKey: 'recovery', textKey: 'recoveryText' },
]

const LANG_OPTIONS = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

const HERO_SLIDES = [
  '/assets/nexgymhero1.jpg',
  '/assets/nexgymhero2.jpg',
  '/assets/nexgymhero3.jpg',
  '/assets/nexgymhero4.jpg',
  '/assets/nexgymhero5.webp',
]
const HERO_SLIDE_DURATION = 5000

export default function App() {
  const [lang, setLang] = useState('fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [heroSlide, setHeroSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setHeroSlide((i) => (i + 1) % HERO_SLIDES.length)
    }, HERO_SLIDE_DURATION)
    return () => clearInterval(t)
  }, [])

  const T = useMemo(() => t[lang], [lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

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
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* Header — chip flottant, s'adapte au viewport sans overflow */}
      <header className="fixed left-0 right-0 top-3 z-[100] flex justify-center px-3 sm:top-4 sm:px-4">
        <div className="relative flex min-w-0 max-w-[calc(100vw-1.5rem)] items-center justify-between gap-2 rounded-full border border-white/15 bg-[var(--bg)]/80 px-3 py-2 shadow-xl backdrop-blur-xl sm:max-w-[calc(100vw-2rem)] sm:gap-3 sm:px-4 sm:py-2.5 md:gap-4 md:px-5 lg:gap-6">
          <a href="#top" className="font-display shrink-0 text-base font-bold tracking-tight text-[var(--text)] sm:text-lg">
            NEXGYM ONE
          </a>

          <nav className="hidden min-w-0 shrink items-center gap-3 overflow-x-auto md:flex md:gap-4 lg:gap-6 [scrollbar-width:thin]">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 whitespace-nowrap text-xs font-medium text-[var(--text-muted)] transition hover:text-[var(--text)] md:text-sm"
              >
                {label}
              </a>
            ))}
            <div className="ml-1 flex shrink-0 items-center gap-2 md:ml-2 md:gap-3">
              <div className="flex rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-0.5">
                {LANG_OPTIONS.map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition sm:px-3 sm:py-1.5 sm:text-xs ${
                      lang === code ? 'bg-[var(--cta-bg)] text-[var(--cta-text)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="#waitlist"
                className="shrink-0 whitespace-nowrap rounded-full bg-[var(--cta-bg)] px-3 py-2 text-xs font-bold text-[var(--cta-text)] transition hover:opacity-90 md:px-4 md:py-2.5 md:text-sm"
              >
                {T.nav.cta}
              </a>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <div className="flex rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] p-0.5">
              {LANG_OPTIONS.map(({ code, label }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                    lang === code ? 'bg-[var(--cta-bg)] text-[var(--cta-text)]' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 shrink-0 touch-manipulation flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--border)] active:opacity-80 sm:h-10 sm:w-10"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${menuOpen ? 'scale-0 opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-white/15 bg-[#0e1015] px-4 py-4 shadow-2xl md:hidden" role="dialog" aria-label="Menu de navigation">
              <div className="flex flex-col gap-0.5">
                {navLinks.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--text)] hover:bg-white/5"
                  >
                    {label}
                  </a>
                ))}
                <a href="#waitlist" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-[var(--cta-bg)] px-4 py-3 text-center text-sm font-bold text-[var(--cta-text)]">
                  {T.nav.cta}
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <main id="top" className="relative pb-24">
        {/* Hero — 100vh + slider auto */}
        <section id="hero" className="relative min-h-[100vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            {HERO_SLIDES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out"
                style={{ opacity: heroSlide === i ? 1 : 0 }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-transparent" />
          <div className="relative z-10 flex min-h-[100vh] flex-col justify-end p-6 pb-16 sm:p-10 sm:pb-20 lg:p-16">
              <h1 className="font-display max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {T.hero.title}
                <span className="mt-2 block text-[var(--accent)]">{T.hero.titleHighlight}</span>
              </h1>
              <p className="font-display mt-6 max-w-2xl text-2xl font-semibold leading-snug text-[var(--text)] sm:text-3xl">
                {T.hero.heroTitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#waitlist"
                  className="rounded-full bg-[var(--cta-bg)] px-10 py-4 text-base font-bold text-[var(--cta-text)] shadow-lg transition hover:opacity-90"
                >
                  {T.hero.cta}
                </a>
                <p className="text-base font-bold text-[var(--accent)]">{T.hero.fomo}</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <span className="rounded-full border-2 border-[var(--accent)]/40 bg-[var(--accent)]/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                  {T.hero.badge1}
                </span>
                <span className="rounded-full border-2 border-[var(--accent)]/40 bg-[var(--accent)]/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                  {T.hero.badge2}
                </span>
                <span className="rounded-full border-2 border-[var(--accent)]/40 bg-[var(--accent)]/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[var(--accent)]">
                  {T.hero.badge3}
                </span>
              </div>
            </div>
        </section>

        {/* Pour qui */}
        <section id="pour-qui" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="eyebrow text-center">{T.forWho.eyebrow}</p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold sm:text-4xl">
            {T.forWho.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
            {T.forWho.subtitle}
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: Home, title: T.forWho.home, desc: T.forWho.homeDesc },
              { Icon: Building2, title: T.forWho.hotels, desc: T.forWho.hotelsDesc },
              { Icon: Ship, title: T.forWho.yachts, desc: T.forWho.yachtsDesc },
              { Icon: Building, title: T.forWho.residences, desc: T.forWho.residencesDesc },
            ].map(({ Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-8 transition hover:border-[var(--border-strong)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Bénéfices */}
        <section id="benefices" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              [T.benefits.title1, T.benefits.text1],
              [T.benefits.title2, T.benefits.text2],
              [T.benefits.title3, T.benefits.text3],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/30 p-8"
              >
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 4 piliers — bento grid */}
        <section id="performance" className="px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">{T.performance.eyebrow}</p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              {T.performance.title}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-4">
              {/* Ligne 1: Force — image large (8) + texte (4) */}
              <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] sm:col-span-8">
                <img
                  src={performanceGallery[0].src}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="eyebrow text-[var(--accent)]">01</span>
                  <h3 className="font-display mt-1 text-xl font-bold text-[var(--text)] sm:text-2xl">
                    {T.performance[performanceGallery[0].titleKey]}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-6 sm:col-span-4">
                <p className="text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                  {T.performance[performanceGallery[0].textKey]}
                </p>
              </div>

              {/* Ligne 2: Cardio — texte (4) + image large (8) */}
              <div className="order-2 flex flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-6 sm:order-1 sm:col-span-4">
                <p className="text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                  {T.performance[performanceGallery[1].textKey]}
                </p>
              </div>
              <div className="group relative order-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] sm:order-2 sm:col-span-8">
                <img
                  src={performanceGallery[1].src}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="eyebrow text-[var(--accent)]">02</span>
                  <h3 className="font-display mt-1 text-xl font-bold text-[var(--text)] sm:text-2xl">
                    {T.performance[performanceGallery[1].titleKey]}
                  </h3>
                </div>
              </div>

              {/* Ligne 3: Mobilité — image large (8) + texte (4) */}
              <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] sm:col-span-8">
                <img
                  src={performanceGallery[2].src}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="eyebrow text-[var(--accent)]">03</span>
                  <h3 className="font-display mt-1 text-xl font-bold text-[var(--text)] sm:text-2xl">
                    {T.performance[performanceGallery[2].titleKey]}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-6 sm:col-span-4">
                <p className="text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                  {T.performance[performanceGallery[2].textKey]}
                </p>
              </div>

              {/* Ligne 4: Récupération — texte (4) + image large (8) */}
              <div className="flex flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-6 sm:col-span-4">
                <p className="text-base font-medium leading-relaxed text-[var(--text-muted)] sm:text-lg">
                  {T.performance[performanceGallery[3].textKey]}
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] sm:col-span-8">
                <img
                  src={performanceGallery[3].src}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="eyebrow text-[var(--accent)]">04</span>
                  <h3 className="font-display mt-1 text-xl font-bold text-[var(--text)] sm:text-2xl">
                    {T.performance[performanceGallery[3].titleKey]}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparatif — bento grid */}
        <section id="comparatif" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="eyebrow">{T.compare.eyebrow}</p>
          <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            {T.compare.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
            {T.compare.subtitle}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-12 sm:gap-4">
            {/* Ligne 1: Gym + Coach — deux cellules égales */}
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-6 sm:col-span-6">
              <h4 className="font-display text-lg font-bold">{T.compare.gym}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {T.compare.gymText}
              </p>
            </article>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]/50 p-6 sm:col-span-6">
              <h4 className="font-display text-lg font-bold">{T.compare.coach}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {T.compare.coachText}
              </p>
            </article>

            {/* Ligne 2: NEXGYM ONE — pleine largeur, mise en avant + CTA */}
            <article className="relative rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--accent-soft)] p-6 sm:col-span-12 sm:p-8">
              <span className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[var(--bg)]">
                ✓
              </span>
              <div className="mr-12 max-w-2xl">
                <h4 className="font-display text-xl font-bold sm:text-2xl">{T.compare.us}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {T.compare.usText}
                </p>
                <p className="mt-4 inline-block rounded-xl border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2.5 text-xs font-semibold text-[var(--accent)]">
                  {T.compare.usSummary}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="#waitlist"
                  className="rounded-full bg-[var(--cta-bg)] px-8 py-3.5 text-sm font-bold text-[var(--cta-text)] transition hover:opacity-90"
                >
                  {T.compare.cta}
                </a>
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-soft)]">
                  {T.compare.ctaHint}
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-2xl px-4 py-24 sm:px-6">
          <p className="eyebrow text-center">{T.faq.eyebrow}</p>
          <h2 className="font-display mt-3 text-center text-3xl font-bold sm:text-4xl">
            {T.faq.title}
          </h2>

          <div className="mt-12 space-y-3">
            {faqItems.map(([q, a], i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]/30">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-[var(--text)]"
                >
                  {q}
                  <span className="text-xl text-[var(--text-soft)]" aria-hidden>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-[var(--border)] px-6 py-5 text-sm leading-relaxed text-[var(--text-muted)]">
                    {a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mx-auto max-w-xl px-4 py-24 sm:px-6">
          <div className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--bg-elevated)] p-8 sm:p-12">
            <p className="eyebrow text-center">{T.waitlist.eyebrow}</p>
            <h2 className="font-display mt-3 text-center text-3xl font-bold sm:text-4xl">
              {T.waitlist.title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-[var(--text-muted)]">
              {T.waitlist.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <div className="rounded-xl border border-amber-500/25 bg-amber-500/10 px-5 py-4 text-center text-sm font-semibold text-amber-200">
                {T.waitlist.fomo}
              </div>
              <p className="text-center text-sm font-semibold text-[var(--accent)]">
                {SPOTS_LEFT} {T.waitlist.spots}
              </p>
            </div>

            <form className="mt-10 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="prenom"
                required
                placeholder={T.waitlist.firstname}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] placeholder-[var(--text-soft)] outline-none transition focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={T.waitlist.email}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] placeholder-[var(--text-soft)] outline-none transition focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--cta-bg)] py-4 text-sm font-bold text-[var(--cta-text)] transition hover:opacity-90"
              >
                {T.waitlist.cta}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-[var(--text-soft)]">
              {T.waitlist.hint}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]/30">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-12 sm:px-6">
          <div className="sm:col-span-5">
            <a href="#top" className="font-display text-lg font-bold tracking-tight text-[var(--text)]">
              NEXGYM ONE
            </a>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {T.footer.line}
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6 sm:col-span-4 sm:justify-center">
            <a href="mailto:contact@nexgym.com" className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text)]">
              {T.footer.contact}
            </a>
            <a href="#faq" className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text)]">
              {T.footer.faq}
            </a>
          </nav>
          <p className="text-xs text-[var(--text-soft)] sm:col-span-3 sm:text-right">
            {T.footer.legal}
          </p>
        </div>
      </footer>
    </div>
  )
}
