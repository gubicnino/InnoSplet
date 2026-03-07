import { Star } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'

const testimonials = [
  {
    quote:
      'Odlično sodelovanje! InnoSplet je hitro rešil vse moje zahteve in poskrbel, da je bila naša nova spletna stran res super.',
    name: 'Luka Činč',
    role: 'Lastnik',
    company: 'Kamnoseštvo L & L Jaklovič d.o.o.',
    initials: 'LČ',
  },
  {
    quote:
      'Top izkušnja od začetka do konca. Ekipa je presegla vsa moja pričakovanja, komunikacija je bila hitra in jasna, končna spletna stran pa je vrhunska, pregledna in profesionalna.',
    name: 'Denis Tumbul',
    role: 'Lastnik',
    company: 'EA22 d.o.o.',
    initials: 'DT',
  },
  {
    quote:
      'Spletna stran se mi zdi zelo dobra in profesionalno izdelana. Z rezultatom sem res zelo zadovoljen.',
    name: 'Domen Leskovec',
    role: 'Lastnik',
    company: 'Zdravstveni zavod Leskovec Koper',
    initials: 'DL',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Kaj pravijo naše stranke"
          subtitle="Zaupanje strank je naše najboljše potrdilo kakovosti dela."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="h-full">
              <div className="relative bg-surface p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col overflow-hidden">

                {/* Dekorativni narekovaj */}
                <div
                  aria-hidden="true"
                  className="absolute top-4 right-6 text-8xl font-extrabold leading-none text-primary/10 select-none pointer-events-none"
                >
                  {'\u201C'}
                </div>

                {/* 5 zvezdic */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Citat */}
                <p className="text-zinc-400 leading-relaxed flex-grow text-sm">
                  {'\u201C'}{testimonial.quote}{'\u201D'}
                </p>

                {/* Ločilna črta */}
                <div className="h-px bg-white/5 my-6" />

                {/* Avtor */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{testimonial.name}</p>
                    <p className="text-zinc-500 text-xs">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
