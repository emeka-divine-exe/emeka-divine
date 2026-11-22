import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  { title: ["Web", "Development"], bg: "#0e1215", tags: ["Landing pages", "Portfolio websites", "Business websites", "Waitlist pages", "Responsive design"],
    text: "I build clean, responsive websites that load fast and feel good to use. Simple, well-made sites for brands that need a proper home online." },
  { title: ["Logo", "Design"], bg: "#1a1e23", tags: ["Logo concepts", "Mockup presentation", "Logo usage guide", "Source & export files", "Social profile mockups"],
    text: "I design logos that work everywhere, then show you how they look and how to use them on your website, your socials and your ads." },
  { title: ["Graphic", "Design"], bg: "#252a30", tags: ["Social media posts", "Church graphics", "Birthday flyers", "Event posters", "Ad creatives"],
    text: "Posters, flyers and social posts with clear hierarchy and a consistent look, so your message lands before anyone reads a word." },
  { title: ["Brand", "Identity Design"], bg: "#31373e", tags: ["Logo system", "Colour palette", "Typography", "Iconography", "Brand illustrations", "Brand mockups"],
    text: "I turn your brand strategy into a complete visual system. Already have a strategist? Hand me the brief and I design everything people see." },
];

function Card({ s, i, n, progress }) {
  const scale = useTransform(progress, [i / n, 1], [1, 1 - (n - 1 - i) * 0.05]);
  return (
    <div className="sticky top-0 flex h-svh items-center justify-center px-5 md:px-12">
      <motion.div
        style={{ scale, backgroundColor: s.bg, top: `calc(-4vh + ${i * 26}px)` }}
        className="relative flex h-[68svh] min-h-[430px] w-full max-w-[1200px] origin-top flex-col justify-between rounded-[28px] p-6 md:p-10"
      >
        <div className="flex items-start justify-between">
          <h3 className="font-mono text-[length:clamp(2.2rem,6vw,4.5rem)] leading-[1.1] font-bold">
            {s.title[0]}
            <br />
            <span className="text-white/45">{s.title[1]}</span>
          </h3>
          <span className="font-mono text-sm text-acid">{String(i + 1).padStart(2, "0")}</span>
        </div>
        <div>
          <ul className="mb-6 flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <li key={t} className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs md:text-sm">{t}</li>
            ))}
          </ul>
          <p className="flex max-w-xl gap-3 text-base leading-snug md:text-lg">
            <Icon icon="ph:asterisk-bold" className="mt-1 shrink-0 text-xl text-acid" />
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
        <p className="font-mono text-sm text-acid">03 / What I do</p>
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
