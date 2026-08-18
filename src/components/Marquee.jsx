import { motion } from "framer-motion";

const items = [
  "FRONTEND DEVELOPMENT",
  "VISUAL DESIGN",
  "RESPONSIVE WEBSITES",
  "LANDING PAGES",
  "REACT APPS",
  "BRAND IDENTITY",
  "DESIGN TO CODE",
  "UI DESIGN",
  "JAVASCRIPT",
  "TAILWIND CSS",
];

export default function Marquee() {
  return (
    <section className="w-full overflow-hidden bg-bg py-6">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center"
          >
            <span
              className="
                font-display
                whitespace-nowrap
                text-lg
                text-surface/90
                font-medium
                tracking-[-0.03em]
              "
            >
              {item}
            </span>

            <span
              className="
                mx-6
                text-orange-500
                sm:mx-8
                md:mx-10
              "
            >
              •
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
