import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function BenefitsSection({ items }) {
  return (
    <section id="benefices" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Bénéfices"
          title="Conçu pour les gens qui veulent un vrai levier, pas un gadget"
          description="Aeke combine intelligence contextuelle, vitesse d’exécution et expérience premium pour transformer vos journées."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
