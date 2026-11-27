import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  { title: ["Brand &", "Visual Design"], bg: "#16191d", accent: false,
    tags: ["Logo Design", "Brand Identity Design", "Promotional Graphics", "Social Media Design", "Marketing Materials", "Brand Applications"],
    text: "I design logos, brand identities and the graphics that carry them across print and social media." },
  { title: ["Frontend", "Development"], bg: "#c6f04d", accent: true,
    tags: ["Business Websites", "Portfolio Websites", "Landing Pages", "Website Redesigns", "Responsive Web Development", "Waitlist Pages"],
    text: "I build clean, responsive websites that load fast and work well on every screen." },
];

function Card({ s, i, n, progress }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.05]);
  return (
    <div className="sticky top-0 flex h-svh items-center justify-center px-5 md:px-12">
      <motion.div
        style={{ scale, backgroundColor: s.bg, top: `calc(-4vh + ${i * 26}px)` }}
        className={`relative flex h-[68svh] min-h-[430px] w-full max-w-[1200px] origin-top flex-col justify-between rounded-[28px] p-6 md:p-10 ${s.accent ? "text-black" : ""}`}
      >
        <div className="flex items-start justify-between">
          <h3 className="font-mono text-[length:clamp(2.2rem,6vw,4.5rem)] leading-[1.1] font-bold">
            {s.title[0]}
            <br />
            <span className={s.accent ? "text-black/55" : "text-white/45"}>{s.title[1]}</span>
          </h3>
        </div>
        <div>
          <ul className="mb-6 flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <li key={t} className={`rounded-full px-3 py-1 font-mono text-xs md:text-sm ${s.accent ? "bg-black/10" : "bg-white/10"}`}>{t}</li>
            ))}
          </ul>
          <p className="flex max-w-xl gap-3 text-base leading-snug md:text-lg">
            <Icon icon="ph:asterisk-bold" className={`mt-1 shrink-0 text-xl ${s.accent ? "text-black" : "text-acid"}`} />
            {s.text}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="services" className="bg-black pt-24 md:pt-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 lg:px-[78px]">
        <p className="font-mono text-sm text-acid">What I do</p>
        <h2 className="mt-3 font-mono text-[length:clamp(2.2rem,4.5vw,3.75rem)] leading-[1.2] font-bold">Services</h2>
      </div>
      <div ref={ref} className="relative mt-6">
        {services.map((s, i) => (
          <Card key={s.title[0]} s={s} i={i} n={services.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
