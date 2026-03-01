import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function UseCasesSection({ useCases }) {
  return (
    <section id="cas-usage" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Cas d’usage"
          title="Pensé pour le quotidien réel"
          description="Que vous soyez solo ou en équipe, Aeke s’adapte à votre rythme de travail." 
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/80 sm:text-base">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
