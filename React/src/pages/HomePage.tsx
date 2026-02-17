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
      
      <div className="relative isolate">
        {/* Dekorativni elementi - ne vplivajo na interakcijo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Glavni blur krogi */}
          <div className="absolute top-32 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl" />
          
          {/* Dodatni barvni akcenti */}
          <div className="absolute top-[1200px] left-1/3 w-[450px] h-[450px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-[1600px] right-1/4 w-80 h-80 bg-indigo-500/12 rounded-full blur-3xl" />
          
          {/* Manjši highlight krogi */}
          <div className="absolute top-[400px] right-[15%] w-64 h-64 bg-primary/25 rounded-full blur-2xl" />
          <div className="absolute top-[1000px] left-[10%] w-72 h-72 bg-secondary/20 rounded-full blur-2xl" />
        </div>
        <WebsitesSection />
        <ServicesSection />
        <WhyUsSection />
        <ReferencesPreview />
      </div>
      <CTASection />
    </>
  )
}
