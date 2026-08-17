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
    <section
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(480px, 85dvh, 820px)',
      }}
      className="w-full flex items-center"
    >
      {/* Parent wrapper: full width, fits content, horizontally centered */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          {/* Div 1: badge + headline together */}
          <div className="flex flex-col gap-4">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 self-start text-xs tracking-wide px-4 py-2 rounded-full border border-cream/20 bg-bg/40 backdrop-blur-sm text-cream/90"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Available for Work
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="font-body font-bold text-3xl md:text-4xl text-cream leading-tight max-w-sm"
            >
              {profile.heroTagline}
            </motion.h1>
          </div>

          {/* Div 2: description + CTA button together */}
          <div className="flex flex-col gap-5 md:items-start md:max-w-sm">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="text-cream/80 text-sm md:text-base leading-relaxed"
            >
              {profile.heroSubcopy}
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-3 self-start bg-accent text-bg font-semibold text-sm pl-2 pr-6 py-2 rounded-full"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-cream text-bg">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
              See my works
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
