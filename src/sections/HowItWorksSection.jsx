import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function HowItWorksSection({ steps }) {
  return (
    <section id="fonctionnement" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Fonctionnement"
          title="Simple en apparence, puissant à l’usage"
          description="Trois étapes pour passer d’une intention à un résultat concret, sans friction." 
        />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.13em] text-mint">{step.title}</p>
              <p className="mt-4 text-base text-white/80">{step.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
