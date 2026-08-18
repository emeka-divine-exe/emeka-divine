import { motion } from "framer-motion";

export default function PageLoader() {
  const panels = Array.from({ length: 4 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {panels.map((_, index) => (
        <motion.div
          key={index}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1,
            delay: 1.5 + index * 0.12,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="absolute top-0 h-full bg-orange-500"
          style={{
            left: `${index * 25}%`,
            width: "25%",
          }}
        />
      ))}
    </div>
  );
}
