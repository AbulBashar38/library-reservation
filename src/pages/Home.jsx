import CtaBanner from '../components/home/CtaBanner.jsx'
import FeaturedBooks from '../components/home/FeaturedBooks.jsx'
import Hero from '../components/home/Hero.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import Services from '../components/home/Services.jsx'
import Stats from '../components/home/Stats.jsx'
import PageTransition from '../components/ui/PageTransition.jsx'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Services />
      <FeaturedBooks />
      <HowItWorks />
      <CtaBanner />
    </PageTransition>
  )
}
