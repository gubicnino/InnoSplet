import ColorBends from '../components/ColorBends'
import { CTASection } from '../components/home/CTASection'
import { HeroSection } from '../components/home/HeroSection'
import { ReferencesPreview } from '../components/home/ReferencesPreview'
import { ServicesSection } from '../components/home/ServicesSection'
import { WebsitesSection } from '../components/home/WebsitesSection'
import { WhyUsSection } from '../components/home/WhyUsSection'


export function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="absolute inset-0 opacity-40">
        <ColorBends
          rotation={20}
          speed={0.4}
          colors={["#3b82f6","#06b6d4"]}
          transparent
          autoRotate={0}
          scale={3}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={1}
          noise={0}
        />
      </div>
      
      <WebsitesSection />
      <ServicesSection />
      <WhyUsSection />
      <ReferencesPreview />
      <CTASection />
    </>
  )
}
