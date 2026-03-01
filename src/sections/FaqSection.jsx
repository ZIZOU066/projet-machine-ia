import Container from '../components/Container'
import FaqItem from '../components/FaqItem'
import SectionTitle from '../components/SectionTitle'

export default function FaqSection({ faq }) {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Les réponses essentielles avant de rejoindre la waitlist"
          description="Objectif: vous donner un cadre clair, crédible et rassurant en quelques secondes."
        />
        <div className="space-y-4">
          {faq.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </Container>
    </section>
  )
}
