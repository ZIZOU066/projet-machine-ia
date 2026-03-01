import Container from '../components/Container'
import FaqItem from '../components/FaqItem'
import SectionTitle from '../components/SectionTitle'

export default function FaqSection({ faq }) {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Les réponses utiles avant de rejoindre l’accès anticipé"
          description="On va à l’essentiel: disponibilité, coût, profils concernés et fonctionnement de la waitlist."
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
