import { motion } from "framer-motion";

export default function PageLoader() {
  const panels = Array.from({ length: 6 });

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        pointer-events-none
        overflow-hidden
      "
    >
      {panels.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 0.9,
            delay: index * 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            absolute
            left-0
            w-full
            bg-accent
          "
          style={{
            height: "16.6667vh",
            top: `${index * 16.6667}vh`,
          }}
        />
      ))}
    </div>
  );
}
