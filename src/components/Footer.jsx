import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-white/50 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Aeke. Tous droits réservés.</p>
        <p>Programme accès anticipé • Waitlist gratuite</p>
      </Container>
    </footer>
  )
}
