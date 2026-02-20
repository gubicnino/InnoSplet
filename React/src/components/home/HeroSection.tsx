import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-6 lg:px-8 pt-10">
      {/* ColorBends Background */}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Sprejemamo nove projekte
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Gradimo digitalne izkušnje, ki{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            spodbujajo rast
          </span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          InnoSplet pomaga malim in srednje velikim podjetjem pri razvoju sodobnih,
          visoko zmogljivih spletnih aplikacij — pravočasno in v okviru proračuna.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="/contact"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Pošljite povpraševanje
          </Button>
          <Button href="/references" variant="secondary" size="lg">
            Oglejte si naše delo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
