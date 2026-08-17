import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { profile } from "../data/content";
import heroBg from "../assets/images/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#181818] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Bottom fade into page background */}
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#181818] via-[#181818]/70 to-transparent" />
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 py-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">
        {/* ───────────────── NAV ───────────────── */}
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <button
            type="button"
            aria-label="Open navigation"
            className="flex items-center gap-3 rounded-full bg-black/35 px-4 py-3 backdrop-blur-md transition-colors duration-300 hover:bg-black/50 md:px-5"
          >
            {/* Simple logo mark */}
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-orange-500">
              <span className="absolute h-4 w-[2px] bg-orange-500" />
              <span className="absolute h-4 w-[2px] translate-x-[4px] bg-orange-500/70" />
            </span>

            <span className="font-body text-sm font-medium md:text-base">
              {profile.name}
            </span>

            <Menu
              size={21}
              strokeWidth={1.8}
              className="ml-2"
            />
          </button>
        </motion.nav>

        {/* ───────────────── HERO CONTENT ───────────────── */}
        <div className="mt-auto w-full pt-24 md:pt-32 lg:pt-20">
          <div className="grid items-end gap-8 md:grid-cols-12 md:gap-6 lg:gap-12">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-7 lg:col-span-6"
            >
              {/* Availability */}
              {profile.available && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-md md:mb-5">
                  <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />

                  <span className="font-body text-xs font-medium text-white/90 md:text-sm">
                    Available for Work
                  </span>
                </div>
              )}

              {/* Main heading */}
              <h1 className="font-display max-w-[650px] text-[clamp(2.8rem,6.2vw,6rem)] font-medium leading-[0.97] tracking-[-0.055em]">
                {profile.heroTagline}
              </h1>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-[400px] md:col-span-5 md:ml-auto lg:max-w-[430px]"
            >
              <p className="font-body text-sm leading-[1.55] text-white/80 md:text-base">
                {profile.heroSubcopy}
              </p>

              <a
                href="#work"
                className="group mt-5 inline-flex items-center gap-3 rounded-full bg-orange-500 py-2 pl-2 pr-6 font-body text-sm font-medium text-white transition-all duration-300 hover:bg-orange-400 md:mt-6 md:pr-7 md:text-base"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 transition-transform duration-300 group-hover:translate-x-1 md:h-11 md:w-11">
                  <ArrowRight
                    size={20}
                    strokeWidth={1.8}
                  />
                </span>

                <span>See my works</span>
              </a>
            </motion.div>
          </div>

          {/* ───────────────── GIANT NAME ───────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 overflow-hidden md:mt-10 lg:mt-8"
          >
            <div className="font-display whitespace-nowrap text-[clamp(5rem,17vw,16rem)] font-medium leading-[0.72] tracking-[-0.08em]">
              {profile.name}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
