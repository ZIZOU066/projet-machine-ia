import Header from './components/Header'
import Footer from './components/Footer'
import FaqSection from './sections/FaqSection'
import HeroSection from './sections/HeroSection'
import PriorityAccessSection from './sections/PriorityAccessSection'
import PremiumTargetsSection from './sections/PremiumTargetsSection'
import ReasonsNowSection from './sections/ReasonsNowSection'
import WaitlistSection from './sections/WaitlistSection'
import { navLinks, objections, premiumTargets, prioritySteps, reasonsNow } from './data/content'

export default function App() {
  return (
    <div className="min-h-screen bg-pearl text-ink">
      <Header navLinks={navLinks} />
      <main>
        <HeroSection />
        <ReasonsNowSection items={reasonsNow} />
        <PriorityAccessSection steps={prioritySteps} />
        <PremiumTargetsSection items={premiumTargets} />
        <FaqSection faq={objections} />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  )
}
