import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import HeroSection from './components/HeroSection.jsx'
import FeatureSection from './components/FeatureSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import TeamSection from './components/TeamSection'

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeatureSection />
      <InfoSection />
      <TeamSection />
      <Footer />
    </main>
  )
}

export default App