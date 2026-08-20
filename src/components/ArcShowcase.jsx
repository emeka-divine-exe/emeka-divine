import { motion } from 'framer-motion'
import { showcaseImages } from '../data/content'

/*
 * Each card has a fixed position in the arc.
 *
 * The center card is straight.
 * Cards progressively rotate and move vertically
 * as they move away from the center.
 */
function getArcStyle(index, total) {
  const center = (total - 1) / 2
  const distance = index - center
  const normalizedDistance =
    center === 0 ? 0 : distance / center

  return {
    rotate: normalizedDistance * 9,
    y: Math.abs(normalizedDistance) ** 1.35 * 55,
  }
}

function CardSet() {
  const total = showcaseImages.length

  return (
    <div className="flex shrink-0 items-start gap-[5vw] md:gap-10">
      {showcaseImages.map((img, index) => {
        const { rotate, y } = getArcStyle(index, total)

        return (
          <motion.div
            key={`${img.src}-${index}`}
            style={{
              rotate,
              y,
            }}
            className="
              shrink-0

              /* Mobile */
              w-[29vw]
              h-[38vw]
              max-w-[145px]
              max-h-[190px]

              /* Tablet */
              sm:w-[190px]
              sm:h-[245px]

              /* Desktop */
              md:w-[235px]
              md:h-[305px]

              lg:w-[270px]
              lg:h-[350px]

              overflow-hidden
              rounded-[18px]
              md:rounded-[24px]

              border
              border-cream/10

              bg-black/20
              shadow-2xl

              will-change-transform
            "
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default function ArcShowcase() {
  return (
    <section className="w-full bg-bg py-24 md:py-32 overflow-hidden">
      {/* =========================================
          ARC GALLERY
      ========================================== */}

      <div
        className="
          relative
          w-full

          h-[280px]
          sm:h-[330px]
          md:h-[390px]
          lg:h-[430px]

          mb-16
          md:mb-24

          overflow-hidden
        "
      >
        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-20
            w-[8vw]
            min-w-[30px]
            bg-gradient-to-r
            from-bg
            to-transparent
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-20
            w-[8vw]
            min-w-[30px]
            bg-gradient-to-l
            from-bg
            to-transparent
          "
        />

        {/*
         * The two CardSets are identical.
         *
         * Because the outer track has NO gap between the
         * two sets, moving exactly -50% gives us a seamless
         * infinite loop.
         */}
        <motion.div
          className="
            absolute
            left-1/2
            top-0
            flex
            w-max
            items-start
          "
          initial={{ x: '-50%' }}
          animate={{
            x: [
              '-50%',
              'calc(-50% - 50%)',
            ],
          }}
          transition={{
            duration: 26,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <CardSet />
          <CardSet />
        </motion.div>
      </div>

      {/* =========================================
          HEADING
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          max-w-xl
          mx-auto
          px-6

          flex
          flex-col
          items-center
          gap-4

          text-center
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
