import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { showcaseImages } from '../data/content'

/*
|--------------------------------------------------------------------------
| Responsive measurements
|--------------------------------------------------------------------------
*/

function useElementSize(ref) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const update = () => {
      const rect = element.getBoundingClientRect()

      setSize({
        width: rect.width,
        height: rect.height,
      })
    }

    update()

    const observer = new ResizeObserver(update)
    observer.observe(element)

    return () => observer.disconnect()
  }, [ref])

  return size
}

/*
|--------------------------------------------------------------------------
| Individual Arc Card
|--------------------------------------------------------------------------
|
| The important part:
|
| The card's Y position and rotation are calculated from its CURRENT
| horizontal position, not its original array index.
|
| This means the card continuously travels through the arc.
|--------------------------------------------------------------------------
*/

function ArcCard({
  image,
  baseX,
  trackX,
  viewportWidth,
  cardWidth,
  cardHeight,
  viewportCenter,
}) {
  const y = useTransform(trackX, (currentTrackX) => {
    if (!viewportWidth || !cardWidth) return 0

    const cardCenter =
      currentTrackX +
      baseX +
      cardWidth / 2

    const distance =
      cardCenter - viewportCenter

    /*
     * Controls the width of the arc.
     *
     * Larger value = flatter arc.
     * Smaller value = deeper arc.
     */
    const arcRadius =
      Math.max(220, viewportWidth * 0.72)

    const normalized =
      distance / arcRadius

    /*
     * Keep cards outside the viewport from creating
     * ridiculous vertical offsets.
     */
    const clamped =
      Math.max(-1.25, Math.min(1.25, normalized))

    /*
     * Center = 0
     * Outer cards move downward.
     */
    const depth =
      Math.max(
        55,
        Math.min(105, viewportWidth * 0.18)
      )

    return (
      Math.pow(Math.abs(clamped), 2) *
      depth
    )
  })

  const rotate = useTransform(trackX, (currentTrackX) => {
    if (!viewportWidth || !cardWidth) return 0

    const cardCenter =
      currentTrackX +
      baseX +
      cardWidth / 2

    const distance =
      cardCenter - viewportCenter

    const arcRadius =
      Math.max(220, viewportWidth * 0.72)

    const depth =
      Math.max(
        55,
        Math.min(105, viewportWidth * 0.18)
      )

    /*
     * Derivative of:
     *
     * y = depth * (x / radius)^2
     *
     * This gives us the tangent of the curve,
     * which produces the natural card rotation.
     */
    const slope =
      (2 * depth * distance) /
      (arcRadius * arcRadius)

    const angle =
      Math.atan(slope) *
      (180 / Math.PI)

    /*
     * Prevent extreme rotations outside the viewport.
     */
    return Math.max(-16, Math.min(16, angle))
  })

  return (
    <motion.div
      style={{
        x: baseX,
        y,
        rotate,
      }}
      className="
        absolute
        top-0
        left-0

        shrink-0
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
        src={image.src}
        alt={image.alt}
        draggable="false"
        className="
          block
          w-full
          h-full
          object-cover
          select-none
        "
      />
    </motion.div>
  )
}

/*
|--------------------------------------------------------------------------
| Arc Showcase
|--------------------------------------------------------------------------
*/

export default function ArcShowcase() {
  const viewportRef = useRef(null)
  const firstCardRef = useRef(null)
  const secondCardRef = useRef(null)

  const viewport = useElementSize(viewportRef)

  const [cardWidth, setCardWidth] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)
  const [cardStep, setCardStep] = useState(0)

  /*
   * Shared horizontal movement.
   *
   * Every card reads this same value.
   */
  const trackX = useMotionValue(0)

  /*
   * Measure the actual card dimensions and gap.
   */
  useEffect(() => {
    if (!firstCardRef.current) return

    const updateMeasurements = () => {
      const first = firstCardRef.current

      const rect =
        first.getBoundingClientRect()

      setCardWidth(rect.width)
      setCardHeight(rect.height)

      if (secondCardRef.current) {
        const firstRect =
          first.getBoundingClientRect()

        const secondRect =
          secondCardRef.current.getBoundingClientRect()

        setCardStep(
          secondRect.left -
          firstRect.left
        )
      }
    }

    updateMeasurements()

    const observer =
      new ResizeObserver(updateMeasurements)

    observer.observe(firstCardRef.current)

    return () => observer.disconnect()
  }, [])

  /*
   * One complete set of cards.
   *
   * The animation repeats after exactly this distance.
   */
  const total = showcaseImages.length

  const setWidth =
    cardStep > 0
      ? cardStep * total
      : 1

  /*
   * Start with the middle of the collection
   * around the center of the viewport.
   */
  const startingPosition =
    viewport.width > 0 && cardWidth > 0
      ? viewport.width / 2 -
        cardWidth / 2 -
        ((total - 1) / 2) * cardStep
      : 0

  /*
   * Continuous marquee.
   *
   * Using modulo instead of Framer Motion's repeat:
   * - no visible jump
   * - no accumulated animation error
   * - genuinely infinite
   */
  useAnimationFrame((time) => {
    if (!viewport.width || !cardStep) {
      return
    }

    /*
     * Speed in pixels per second.
     *
     * Lower = slower / more premium.
     */
    const speed =
      viewport.width < 640
        ? 22
        : 30

    const elapsed =
      (time / 1000) * speed

    const progress =
      elapsed % setWidth

    trackX.set(
      startingPosition - progress
    )
  })

  /*
   * Duplicate the collection.
   *
   * We need enough content on both sides of the viewport
   * so the user never sees an empty area.
   */
  const sets = [0, 1, 2]

  return (
    <section
      className="
        w-full
        bg-bg
        py-24
        md:py-32
        overflow-hidden
      "
    >
      {/* =========================================================
          ARC GALLERY
      ========================================================== */}

      <div
        ref={viewportRef}
        className="
          relative
          w-full

          h-[270px]
          sm:h-[310px]
          md:h-[370px]
          lg:h-[420px]

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
            z-30

            w-[8%]
            min-w-[24px]
            max-w-[100px]

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
            z-30

            w-[8%]
            min-w-[24px]
            max-w-[100px]

            bg-gradient-to-l
            from-bg
            to-transparent
          "
        />

        {/*
         * The cards are absolutely positioned.
         *
         * Their X movement is controlled by trackX.
         * Their Y/rotation are derived from their current X.
         */}
        <div className="absolute inset-0">
          {sets.map((setIndex) =>
            showcaseImages.map((image, index) => {
              const baseX =
                setIndex * setWidth +
                index * cardStep

              const isFirstCard =
                setIndex === 0 &&
                index === 0

              const isSecondCard =
                setIndex === 0 &&
                index === 1

              return (
                <div
                  key={`${setIndex}-${index}`}
                  ref={
                    isFirstCard
                      ? firstCardRef
                      : isSecondCard
                        ? secondCardRef
                        : undefined
                  }
                  className="
                    absolute
                    top-0
                    left-0

                    w-[34vw]
                    h-[44vw]

                    min-w-[125px]
                    min-h-[160px]

                    max-w-[270px]
                    max-h-[350px]

                    sm:w-[190px]
                    sm:h-[245px]

                    md:w-[235px]
                    md:h-[305px]

                    lg:w-[270px]
                    lg:h-[350px]
                  "
                >
                  <ArcCard
                    image={image}
                    baseX={baseX}
                    trackX={trackX}
                    viewportWidth={viewport.width}
                    cardWidth={cardWidth}
                    cardHeight={cardHeight}
                    viewportCenter={
                      viewport.width / 2
                    }
                  />
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* =========================================================
          HEADING
      ========================================================== */}

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
          A selection of logos, brand identities, and
          graphic design work — a taste of the visual
          side of what I do.
        </p>
      </motion.div>
    </section>
  )
}
