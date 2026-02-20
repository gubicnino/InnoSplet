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
      
      <div className="relative isolate  w-full pt-12 pb-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Dekorativni elementi - ne vplivajo na interakcijo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Glavni blur krogi */}
          <div className="absolute top-32 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-secondary/20 rounded-full blur-3xl" />
          
          {/* Dodatni barvni akcenti */}
          <div className="absolute top-[1200px] left-1/3 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-[1600px] right-1/4 w-[25vw] h-[25vw] max-w-[320px] max-h-[320px] bg-indigo-500/12 rounded-full blur-3xl" />
          
          {/* Manjši highlight krogi */}
          <div className="absolute top-[400px] right-[15%] w-[20vw] h-[20vw] max-w-[256px] max-h-[256px] bg-primary/25 rounded-full blur-2xl" />
          <div className="absolute top-[1000px] left-[10%] w-[22vw] h-[22vw] max-w-[288px] max-h-[288px] bg-secondary/20 rounded-full blur-2xl" />
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
