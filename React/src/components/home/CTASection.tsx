import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pripravljeni na nov projekt?
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Z veseljem prisluhnemo vašim idejam in jih spremenimo v digitalno izkušnjo, ki izstopa. Ko ste pripravljeni vi, smo pripravljeni tudi mi.
          </p>
          <Button href="/contact" size="lg" className="px-10">
            Pošljite povpraševanje
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
