import { motion } from 'framer-motion'
import { showcaseImages } from '../data/content'

// Precompute each card's rotation + vertical offset based on its position
// in the original set, so the arc shape stays consistent even when the
// array is duplicated for the infinite scroll loop.
function getArcStyle(index, total) {
  const mid = (total - 1) / 2
  const distanceFromMid = index - mid
  const rotate = distanceFromMid * 9 // degrees per step away from center
  const yOffset = Math.abs(distanceFromMid) * 22 // pushes outer cards down, forming the arc
  return { rotate, yOffset }
}

export default function ArcShowcase() {
  const total = showcaseImages.length
  const loopedImages = [...showcaseImages, ...showcaseImages, ...showcaseImages]

  return (
    <section className="w-full bg-bg py-24 md:py-32 overflow-hidden">
      {/* Arc carousel — infinite horizontal scroll, cards rotated + offset to form the curve */}
      <div className="relative h-[220px] md:h-[280px] mb-16">
        <motion.div
          className="flex items-start absolute left-0 gap-6 md:gap-10"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {loopedImages.map((img, i) => {
            const { rotate, yOffset } = getArcStyle(i % total, total)
            return (
              <div
                key={i}
                style={{
                  transform: `rotate(${rotate}deg) translateY(${yOffset}px)`,
                }}
                className="shrink-0 w-[120px] h-[160px] md:w-[150px] md:h-[190px] rounded-xl overflow-hidden border border-cream/10 shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto text-center flex flex-col items-center gap-4 px-6"
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
