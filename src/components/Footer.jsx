import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-slate sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Aeke. Tous droits réservés.</p>
        <p>Waitlist prioritaire uniquement • Sans paiement</p>
      </Container>
    </footer>
  )
}
