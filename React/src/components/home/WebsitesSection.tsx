import { Check, Globe, ShoppingCart, Sparkles } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'

const features = [
  'Sodobni, responzivni dizajn',
  'Bliskovito hitro nalaganje',
  'SEO optimizirane strani',
  'Mobilno prilagojene rešitve',
  'Varno plačilno procesiranje',
  'Enostavno upravljanje vsebine',
]

const solutions = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Poslovne spletne strani',
    description: 'Profesionalne strani, ki predstavljajo vašo blagovno znamko in pritegnejo prave stranke.',
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'Spletne trgovine',
    description: 'Zmogljive spletne trgovine z vsem, kar potrebujete za uspešno spletno prodajo.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Spletne aplikacije',
    description: 'Kompleksne, interaktivne aplikacije prilagojene vašim specifičnim poslovnim procesom.',
  },
]

export function WebsitesSection() {
  return (
    <section className="py-32 to-surface/30 relative ">
      {/* Decorative elements */}
 

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <AnimatedSection>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Naša specializacija
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Od ideje do
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {' '}spletne uspešnice
                </span>
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Gradimo rešitve, ki ne služijo samo kot 
                vizitke, ampak kot močna poslovna orodja. Vsak projekt obravnavamo 
                celovito – od strategije in dizajna do razvoja in lansiranja.
              </p>

              <p className="text-zinc-400 leading-relaxed">
                Ali potrebujete preprosto predstavitveno stran za nov posel ali kompleksno 
                spletno trgovino z integracijami? Zasnovali bomo rešitev, ki bo rasla skupaj 
                z vašim podjetjem in prinašala merljive rezultate.
              </p>

              {/* Features checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-zinc-300">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - Solution cards */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold group"
                >
                  Začnimo z vašim projektom
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}