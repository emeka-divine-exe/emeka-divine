import { motion } from 'framer-motion'
import { showcaseImages } from '../data/content'

export default function ArcShowcase() {
  const total = showcaseImages.length
  const spread = 64 // total degrees the fan spans
  const step = total > 1 ? spread / (total - 1) : 0
  const start = -spread / 2

  return (
    <section className="w-full bg-bg px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      {/* Desktop/tablet: fan/arc layout */}
      <div className="hidden md:block relative h-[280px] mb-16">
        {showcaseImages.map((img, i) => {
          const angle = start + step * i
          return (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 40, rotate: angle }}
              whileInView={{ opacity: 1, y: 0, rotate: angle }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, scale: 1.04, zIndex: 20 }}
              style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transformOrigin: 'bottom center',
                marginLeft: '-70px',
              }}
              className="w-[140px] h-[180px] rounded-xl overflow-hidden border border-cream/10 shadow-xl cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )
        })}
      </div>

      {/* Mobile: horizontal scroll strip, no rotation */}
      <div className="md:hidden flex gap-4 overflow-x-auto pb-4 mb-10 -mx-6 px-6 snap-x snap-mandatory">
        {showcaseImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="shrink-0 w-[130px] h-[170px] rounded-xl overflow-hidden border border-cream/10 snap-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto text-center flex flex-col items-center gap-4"
      >
        <h2 className="font-display font-black text-3xl md:text-4xl text-cream leading-tight">
          A Glimpse Into My Design World
        </h2>
        <p className="text-cream/70 text-sm md:text-base leading-relaxed">
          A selection of logos, brand identities, and graphic design work — a taste of the visual side of what I do.
        </p>
      </motion.div>
    </section>
  )
        }
