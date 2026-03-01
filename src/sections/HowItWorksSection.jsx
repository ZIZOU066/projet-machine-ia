import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function HowItWorksSection({ steps }) {
  return (
    <section id="fonctionnement" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Comment ça marche"
          title="Trois étapes, zéro friction"
          description="De l’intention au résultat, tout est pensé pour être lisible, rapide et actionnable."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-3xl border border-line bg-panel p-7 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mint">{step.title}</p>
              <p className="mt-5 text-base leading-relaxed text-slate">{step.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
