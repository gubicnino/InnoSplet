import { Clock, Cpu, Handshake, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getProjects } from '../../services/api';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SectionHeading } from '../ui/SectionHeading';

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: 'Zanesljiva dostava',
    description:
      'Izpolnjujemo roke. Vsak projekt vsebuje jasne mejnike in transparentno komunikacijo.',
  },
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: 'Zmogljivost na prvem mestu',
    description:
      'Bliščeče hitre aplikacije, optimizirane za hitrost, SEO in uporabniško izkušnjo.',
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: 'Sodobna tehnologija',
    description:
      'Zgrajeno z najsodobnejšimi orodji, ki vas držijo pred konkurenco.',
  },
  {
    icon: <Handshake className="w-6 h-6 text-secondary" />,
    title: 'Predano partnerstvo',
    description:
      'Nismo le dobavitelji — smo vaš dolgoletni tehnološki partner, ki vlaga v vaš uspeh.',
  },
]

export function WhyUsSection() {
    const [stProjektov, setStProjektov] = useState<number>(7);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getProjects()
        .then(data => {
            setStProjektov(data.data.length);
            setLoading(false);  
        })
        .catch(error => {          
          console.error('Error:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Nalaganje...</div>;
  
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              title="Zakaj InnoSplet?"
              subtitle="Združujemo tehnično strokovnost s poslovnim razumevanjem za rezultate, ki štejejo."
              align="left"
              className="mb-8"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.3} className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-surface/50 aspect-square lg:aspect-auto lg:h-[600px] p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10 text-center">
                <div className="text-7xl font-bold text-white mb-2">100%</div>
                <div className="text-zinc-400 mb-8">Zadovoljstvo strank</div>
                <div className="text-7xl font-bold text-white mb-2">{stProjektov}+</div>
                <div className="text-zinc-400">Dostavljenih projektov</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
