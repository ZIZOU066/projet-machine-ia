import Container from '../components/Container'
import FaqItem from '../components/FaqItem'
import SectionTitle from '../components/SectionTitle'

export default function FaqSection({ faq }) {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow="FAQ" title="Les réponses avant votre inscription" />
        <div className="space-y-4">
          {faq.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </Container>
    </section>
  )
}
