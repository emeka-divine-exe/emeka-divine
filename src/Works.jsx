import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { designGroups } from "./worksData.js";

// DEVELOPMENT: `image` is optional (e.g. "/works/dev/divine-homes.jpg").
// Without it the card shows a scaled-down live view of the site.
const dev = [
  { name: "Divine Homes", url: "https://divine-homes.netlify.app", image: null },
  { name: "Audio Pro", url: "https://audio-pro.netlify.app", image: null },
  { name: "Taste Haven", url: "https://taste-haven-restaurant.vercel.app", image: null },
];

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay: (i % 4) * 0.06 },
});

function Design() {
  return (
    <div className="space-y-16">
      {designGroups.map((g) => (
        <div key={g.title}>
          <div className="mb-5 flex items-baseline justify-between border-b border-white/15 pb-3 font-mono">
            <h3 className="text-lg font-bold md:text-2xl">{g.title}</h3>
            <span className="text-sm text-acid">{String(g.items.length).padStart(2, "0")}</span>
          </div>
          <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
            {g.items.map((it, i) => (
              <motion.img
                key={it.src}
                {...reveal(i)}
                src={it.src}
                width={it.w}
                height={it.h}
                alt={`${g.title} ${i + 1}`}
                loading="lazy"
                className="mb-3 block h-auto w-full break-inside-avoid rounded-lg border border-white/10 md:mb-4"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Dev() {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-6">
      {dev.map((p, i) => (
        <motion.a
          key={p.name}
          {...reveal(i)}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0b] transition-colors group-hover:border-acid">
            {p.image ? (
              <img src={p.image} alt={`${p.name} preview`} className="h-full w-full object-cover object-top" />
            ) : (
              <iframe
                src={p.url}
                title={`${p.name} live preview`}
                loading="lazy"
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 h-[333.34%] w-[333.34%] origin-top-left scale-[0.3] border-0 bg-white"
              />
            )}
          </div>
          <div className="mt-4 flex items-start justify-between gap-4 font-mono">
            <div>
              <span className="text-sm text-acid">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-bold md:text-2xl">{p.name}</h3>
              <p className="text-sm text-white/50">{new URL(p.url).host}</p>
            </div>
            <Icon
              icon="ph:arrow-up-right-bold"
              className="mt-1 text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
}

export default function Works() {
  const [tab, setTab] = useState("Design");
  return (
    <section id="archive" className="bg-black px-5 py-24 md:px-12 md:py-32 lg:px-[78px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm text-acid">02 / Selected work</p>
            <h2 className="mt-3 font-mono text-[length:clamp(2.2rem,4.5vw,3.75rem)] leading-[1.2] font-bold">Archive</h2>
          </div>
          <div role="tablist" className="flex gap-8 font-mono text-lg">
            {["Design", "Development"].map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`relative cursor-pointer pb-2 transition-colors ${tab === t ? "text-white" : "text-white/45 hover:text-white"}`}
              >
                {t}
                {tab === t && <motion.span layoutId="tab-line" className="absolute inset-x-0 bottom-0 h-0.5 bg-acid" />}
              </button>
            ))}
          </div>
        </div>
        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {tab === "Design" ? <Design /> : <Dev />}
        </motion.div>
      </div>
    </section>
  );
}
