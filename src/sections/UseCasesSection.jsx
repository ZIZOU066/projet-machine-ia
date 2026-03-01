import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function UseCasesSection({ useCases }) {
  return (
    <section id="cas-usage" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Social proof / cas d’usage"
          title="Pensé pour des profils exigeants"
          description="Des cas concrets où Aeke apporte un vrai gain de temps, sans effet gadget."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-panel px-6 py-5 text-sm leading-relaxed text-slate shadow-soft sm:text-base">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
