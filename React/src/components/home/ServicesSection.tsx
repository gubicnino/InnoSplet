import { Code, Palette, Zap } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Spletne aplikacije po meri',
    description:
      'Prilagojene rešitve, zgrajene od začetka, ki ustrezajo vašim poslovnim potrebam in delovnim procesom. Brez gotovih predlog.',
  },
  {
    icon: <Palette className="w-8 h-8 text-secondary" />,
    title: 'Sodobna UI/UX zasnova',
    description:
      'Intuitivni, lepi vmesniki, ki jih bodo vaši uporabniki oboževali in jim bodo vaši konkurenti zavidali. Oblikovanje, ki prepriča.',
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-500" />,
    title: 'Optimizacija in hitrost',
    description:
      'Bliskovito hitre aplikacije z optimizirano kodo. Vsaka milisekunda šteje za boljšo uporabniško izkušnjo in SEO.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-32  relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Naš pristop"
          subtitle="Tehnična odličnost in pozornost na detajle v vsakem projektu."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="h-full">
              <div className="bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="bg-zinc-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
