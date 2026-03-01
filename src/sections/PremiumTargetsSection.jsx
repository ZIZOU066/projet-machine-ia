import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function PremiumTargetsSection({ items }) {
  return (
    <section id="pour-qui" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Pour qui"
          title="Des univers premium où chaque détail compte"
          description="Hôtels, yachts, villas ou accompagnement personnel: une signature élégante pour des lieux et des clients exigeants."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-line bg-panel px-6 py-5 text-sm leading-relaxed text-slate shadow-soft sm:text-base"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
