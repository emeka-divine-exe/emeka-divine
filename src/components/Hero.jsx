import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/content'
import heroBg from '../assets/images/hero-bg.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* Full-bleed background photo */}
      <div className="relative w-full h-[85vh] min-h-[560px] overflow-hidden">
        <img
          src={heroBg}
          alt={`Portrait of ${profile.fullName}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />

        {/* Content layered on top of photo */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-10 max-w-3xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 self-start text-xs tracking-wide px-4 py-2 rounded-full border border-cream/20 bg-bg/40 backdrop-blur-sm text-cream/90 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Available for Work
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="font-body font-bold text-2xl md:text-3xl text-cream leading-tight mb-3"
          >
            {profile.heroTagline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="text-cream/80 text-sm md:text-base leading-relaxed mb-6 max-w-md"
          >
            {profile.heroSubcopy}
          </motion.p>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            href="#projects"
            className="inline-flex items-center gap-2 self-start bg-accent text-bg font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            See my works
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.a>
        </div>
      </div>

      {/* Giant wordmark, sits below the photo */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display uppercase text-cream text-center leading-none py-8 md:py-12 px-4"
        style={{ fontSize: 'clamp(56px, 15vw, 180px)', letterSpacing: '-0.03em' }}
      >
        {profile.name}
      </motion.h2>
    </section>
  )
}
