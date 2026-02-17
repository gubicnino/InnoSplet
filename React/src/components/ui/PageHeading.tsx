import { motion } from 'framer-motion'

interface PageHeadingProps {
  title: string
  align?: 'left' | 'center'
  className?: string
}

export function PageHeading({
  title,
  align = 'center',
  className = '',
}: PageHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className} py-24 px-4 md:px-6 lg:px-8 bg-primary`} >
      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
      >
        {title}
      </motion.h2>
    </div>
  )
}
