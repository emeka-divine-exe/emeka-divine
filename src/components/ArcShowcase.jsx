import { motion } from 'framer-motion'
import { showcaseImages } from '../data/content'

/*
 * Creates the curved / arched appearance.
 *
 * The middle card stays almost straight.
 * Cards further from the middle rotate and move vertically
 * to create the arc.
 */
function getArcStyle(index, total) {
  const middle = (total - 1) / 2
  const distance = index - middle

  const rotate = distance * 8
  const yOffset = Math.pow(Math.abs(distance), 1.15) * 18

  return {
    rotate,
    yOffset,
  }
}

export default function ArcShowcase() {
  const total = showcaseImages.length

  /*
   * Two identical sets are enough for a seamless infinite loop.
   *
   * We animate from 0 -> -50%.
   * Because the track contains two identical sets,
   * -50% equals exactly one complete set.
   */
  const loopedImages = [...showcaseImages, ...showcaseImages]

  return (
    <section className="w-full bg-bg py-24 md:py-32 overflow-hidden">
      {/* =========================
          INFINITE ARC SHOWCASE
      ========================== */}
      <div className="relative w-full h-[330px] md:h-[430px] mb-20">
        <motion.div
          className="
            absolute
            left-1/2
            top-4
            flex
            items-start
            gap-6
            md:gap-10
            w-max
          "
          style={{
            /*
             * Start from the left edge of the viewport,
             * while keeping the whole track centered.
             */
            transform: 'translateX(-50%)',
          }}
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {loopedImages.map((img, i) => {
            const { rotate, yOffset } = getArcStyle(
              i % total,
              total
            )

            return (
              <motion.div
                key={`${img.src}-${i}`}
                style={{
                  rotate,
                  y: yOffset,
                }}
                className="
                  shrink-0
                  w-[190px]
                  h-[245px]

                  sm:w-[210px]
                  sm:h-[270px]

                  md:w-[245px]
                  md:h-[315px]

                  lg:w-[275px]
                  lg:h-[350px]

                  rounded-[22px]
                  md:rounded-[28px]

                  overflow-hidden
                  border
                  border-cream/10
                  bg-black/20
                  shadow-2xl
                "
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Optional soft fade on both sides.
            This makes cards appear to enter/leave
            the viewport naturally. */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-16
            md:w-32
            bg-gradient-to-r
            from-bg
            to-transparent
            z-10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            w-16
            md:w-32
            bg-gradient-to-l
            from-bg
            to-transparent
            z-10
          "
        />
      </div>

      {/* =========================
          HEADING
      ========================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          max-w-xl
          mx-auto
          text-center
          flex
          flex-col
          items-center
          gap-4
          px-6
        "
      >
        <h2
          className="
            font-display
            font-black
            text-3xl
            md:text-4xl
            text-cream
            leading-tight
          "
        >
          A Glimpse Into My Design World
        </h2>

        <p
          className="
            text-cream/70
            text-sm
            md:text-base
            leading-relaxed
          "
        >
          A selection of logos, brand identities, and graphic
          design work — a taste of the visual side of what I do.
        </p>
      </motion.div>
    </section>
  )
}
