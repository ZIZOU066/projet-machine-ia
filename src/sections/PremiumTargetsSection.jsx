import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function PremiumTargetsSection({ items }) {
  return (
    <section id="pour-qui" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Profils qui nous rejoignent"
          title="Une communauté premium, discrète et exigeante"
          description="Des univers où la qualité perçue, la crédibilité et l’expérience client font toute la différence."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-panel px-6 py-5 text-sm leading-relaxed text-slate shadow-soft sm:text-base">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
