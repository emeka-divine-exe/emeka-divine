import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { designCollections } from "./worksData.js";
import { brandProjects, devProjects } from "./projectsData.js";

let lastTab = "Design";

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, delay: (i % 4) * 0.06 },
});

function ProjectCard({ p, i, ratio = "aspect-[4/3]" }) {
  const small = ratio === "aspect-square";
  const external = Boolean(p.behance);
  return (
    <motion.a
      {...reveal(i)}
      href={external ? p.behance : `#/work/${p.slug}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group block"
    >
      <div className={`relative ${ratio} overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0b] transition-colors group-hover:border-acid`}>
        {p.cover ? (
          <img src={p.cover} alt={`${p.title} cover`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <iframe
            src={p.url}
            title={`${p.title} live preview`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 h-[333.34%] w-[333.34%] origin-top-left scale-[0.3] border-0 bg-white"
          />
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 font-mono">
        <div>
          <h4 className={small ? "text-base font-bold md:text-lg" : "text-xl font-bold md:text-2xl"}>{p.title}</h4>
          {p.kind && <p className="mt-1 text-sm text-white/50">{p.kind}</p>}
        </div>
        <Icon icon="ph:arrow-up-right-bold" className="mt-1 shrink-0 text-2xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-acid" />
      </div>
    </motion.a>
  );
}

function Sub({ title, text }) {
  return (
    <div className="mb-8 border-b border-white/15 pb-4">
      <h3 className="font-mono text-2xl font-bold md:text-3xl">{title}</h3>
      {text && <p className="mt-2 text-sm text-white/50 md:text-base">{text}</p>}
    </div>
  );
}

function Design() {
  return (
    <div className="space-y-24">
      <div>
        <Sub title="Brand Design" text="Brand projects, presented in full." />
        <div className="grid gap-8 md:grid-cols-2">
          {brandProjects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
        </div>
      </div>
      <div>
        <Sub title="Visual Design" text="Logos, posters and social media graphics, grouped by collection." />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {designCollections.map((c, i) => <ProjectCard key={c.slug} p={c} i={i} ratio="aspect-square" />)}
        </div>
      </div>
    </div>
  );
}

function Dev() {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-6">
      {devProjects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
    </div>
  );
}

export default function Works() {
  const [tab, setTabState] = useState(lastTab);
  const setTab = (t) => { lastTab = t; setTabState(t); };
  return (
    <section id="archive" className="bg-black px-5 py-24 md:px-12 md:py-32 lg:px-[78px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-sm text-acid">Selected work</p>
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
