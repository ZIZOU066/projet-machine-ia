import Header from './components/Header'
import Footer from './components/Footer'
import BenefitsSection from './sections/BenefitsSection'
import FaqSection from './sections/FaqSection'
import HeroSection from './sections/HeroSection'
import HowItWorksSection from './sections/HowItWorksSection'
import UseCasesSection from './sections/UseCasesSection'
import WaitlistSection from './sections/WaitlistSection'
import { benefits, faq, navLinks, steps, useCases } from './data/content'

export default function App() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Header navLinks={navLinks} />
      <main>
        <HeroSection />
        <BenefitsSection items={benefits} />
        <HowItWorksSection steps={steps} />
        <UseCasesSection useCases={useCases} />
        <FaqSection faq={faq} />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  )
}
