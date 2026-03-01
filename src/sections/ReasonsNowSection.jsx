import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

export default function ReasonsNowSection({ items }) {
  return (
    <section id="pourquoi-maintenant" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Pourquoi maintenant"
          title="Un retour attendu, une fenêtre à ne pas manquer"
          description="Le prochain stock sera limité. S’inscrire maintenant, c’est sécuriser votre priorité sur un produit premium encore rare en France."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line bg-panel p-7 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
