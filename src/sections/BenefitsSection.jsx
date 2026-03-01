import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function BenefitsSection({ items }) {
  return (
    <section id="benefices" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Bénéfices"
          title="Une expérience claire pour garder le contrôle de vos journées"
          description="Aeke vous fait gagner du temps sans ajouter de complexité. Vous voyez vite ce qui compte, et vous exécutez mieux."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-line bg-panel p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
