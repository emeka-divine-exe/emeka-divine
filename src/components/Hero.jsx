import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "../data/content";
import heroBg from "../assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[820px]
        w-full
        overflow-hidden
        bg-[#181818]
        text-white

        sm:h-[780px]
        md:h-[720px]
        lg:h-[760px]
        xl:h-[780px]
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="
            absolute
            inset-x-0
            top-[-170px]
            h-[calc(100%+170px)]
            w-full
            object-cover
            object-[46%_center]

            sm:top-[-140px]
            sm:h-[calc(100%+140px)]
            sm:object-[48%_center]

            md:static
            md:h-full
            md:w-full
            md:object-center
          "
        />
      </div>

      {/* Hero content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          flex-col
          justify-end
          px-5
          pb-8

          sm:px-7
          sm:pb-9

          md:px-10
          md:pb-8

          lg:px-12
          lg:pb-9

          xl:px-16
        "
      >
        {/* Upper content */}
        <div
          className="
            grid
            item start
            gap-7

            md:grid-cols-[minmax(0,1fr)_minmax(260px,400px)]
            md:gap-8

            lg:grid-cols-[minmax(0,1fr)_minmax(300px,430px)]
            lg:gap-12

            xl:gap-16
          "
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              min-w-0
              md:-translate-y-6
              lg:-translate-y-8
            "
          >
            {profile.available && (
              <div
                className="
                  mb-1.5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-black/40
                  px-4
                  py-2
                  backdrop-blur-md

                  md:mb-2
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-orange-500
                    shadow-[0_0_12px_rgba(249,115,22,0.8)]
                  "
                />

                <span
                  className="
                    font-body
                    text-xs
                    font-medium
                    text-white/90
                    md:text-sm
                  "
                >
                  Available for Work
                </span>
              </div>
            )}

            <h1
              className="
                font-display
                max-w-[280px]
                text-4xl
                font-medium
                leading-[0.96]
                tracking-[-0.055em]

                md:max-w-[300px]
                md:text-3xl
              "
            >
              {profile.heroTagline}
            </h1>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              min-w-0
              max-w-[330px]
              md:ml-auto
            "
          >
            <p
              className="
                font-body
                text-sm
                leading-[1.55]
                text-white/85
                md:text-base
              "
            >
              {profile.heroSubcopy}
            </p>

            <a
              href="#work"
              className="
                group
                mt-5
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-orange-500
                py-2
                pl-2
                pr-6
                font-body
                text-sm
                font-medium
                transition-colors
                duration-300
                hover:bg-orange-400

                md:mt-6
                md:pr-7
                md:text-base
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-orange-500
                  transition-transform
                  duration-300
                  group-hover:translate-x-1

                  md:h-11
                  md:w-11
                "
              >
                <ArrowRight
                  size={20}
                  strokeWidth={1.8}
                />
              </span>

              <span>See my works</span>
            </a>
          </motion.div>
        </div>

        {/* Giant name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-8
            w-full
            overflow-hidden

            sm:mt-9
            md:mt-10
            lg:mt-8
          "
        >
          <div
            className="
              font-display
              whitespace-nowrap
              text-[clamp(5rem,17vw,16rem)]
              font-medium
              leading-[0.72]
              tracking-[-0.08em]
            "
          >
            {profile.name}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
