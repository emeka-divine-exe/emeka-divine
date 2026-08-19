import { motion } from 'framer-motion'
import { profile, stats } from '../data/content'
import aboutWorkspace from '../assets/images/about-workspace.png'

export default function About() {
  return (
    <section id="about" className="w-full bg-bg px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5"
        >
          <span className="text-xs tracking-widest uppercase text-accent font-semibold">
            About Me
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-cream leading-tight">
            Crafting Meaningful Designs & Intuitive Digital Experiences
          </h2>
          <p className="text-cream/80 text-sm md:text-base leading-relaxed">
            {profile.aboutParagraph}
          </p>
        </motion.div>

        {/* Image side, with floating stat badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img
            src={aboutWorkspace}
            alt={`${profile.fullName} at his workspace`}
            className="w-full rounded-2xl object-cover"
          />

          {/* Floating stat card */}
          <div className="absolute -bottom-5 -right-3 md:-right-6 bg-surface border border-cream/10 rounded-xl px-5 py-4 shadow-lg">
            <p className="font-display font-black text-2xl text-accent leading-none">
              {stats[0].value}
            </p>
            <p className="text-xs text-cream/70 mt-1 whitespace-nowrap">
              {stats[0].label}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
