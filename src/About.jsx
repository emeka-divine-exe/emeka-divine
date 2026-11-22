import { motion } from "framer-motion";
const portrait = "/about-portrait.webp";

const stats = [["3+", "Years of experience"], ["10–15", "People I’ve worked with"], ["98%", "Client satisfaction"]];
const story = [
  "I started with graphic design in junior secondary school, picked up the basics at two learning centres, then kept learning on my own.",
  "At some point I wanted my designs to actually work on a screen, so I moved into web: HTML, CSS, JavaScript, Tailwind and React, which I’m still mastering. TypeScript is next, then Next.js.",
  "The goal is software engineering. To me that means design and development together, and I want to be strong at both.",
  "I genuinely love this work. When I’m stressed or confused, I build or design something. If you ask for my hobby, it’s probably Pinterest, scrolling other people’s work until I want to make my own.",
];

export default function About() {
  return (
    <section id="meet-me" className="bg-black px-5 py-24 md:px-12 md:py-32 lg:px-[78px]">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[28px] bg-[#101010] bg-[radial-gradient(circle_at_50%_38%,rgba(198,240,77,0.28),transparent_62%)] lg:aspect-auto lg:min-h-[640px]"
        >
          <img src={portrait} alt="Emeka Divine holding a teal phone in front of his face" className="h-[92%] w-auto max-w-none object-contain object-bottom" />
        </motion.div>
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm text-acid">04 / Meet me</p>
          <h2 className="mt-3 font-mono text-[length:clamp(2.2rem,4.5vw,3.75rem)] leading-[1.2] font-bold">I’m Emeka.</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/80 md:text-lg">
            {story.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3">
            {stats.map(([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 md:p-5"
              >
                <dt className="font-mono text-2xl font-bold text-acid md:text-4xl">{n}</dt>
                <dd className="mt-2 font-mono text-[11px] leading-snug text-white/60 md:text-sm">{l}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
