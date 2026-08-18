import { motion } from "framer-motion";

export default function PageLoader() {
  const panels = Array.from({ length: 6 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {panels.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1,
            delay: index * 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute top-0 h-full bg-orange-500"
          style={{
            left: `${index * 16.6667}%`,
            width: "16.6667%",
          }}
        />
      ))}
    </div>
  );
}
