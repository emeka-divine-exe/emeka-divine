import { Icon } from "@iconify/react";
import Footer from "./Footer";
import { brandProjects, devProjects } from "./projectsData.js";
import { designCollections } from "./worksData.js";

const all = [...brandProjects, ...devProjects, ...designCollections];

function Block({ label, children }) {
  if (!children) return null;
  return (
    <div>
      <h2 className="font-mono text-sm text-acid">{label}</h2>
      <div className="mt-3 text-base leading-relaxed text-white/80 md:text-lg">{children}</div>
    </div>
  );
}

export default function ProjectPage({ slug }) {
  const p = all.find((x) => x.slug === slug);
  const btn = "inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono font-bold transition-colors";
  return (
    <>
      <main className="min-h-svh bg-black px-5 py-8 md:px-12 lg:px-[78px]">
        <div className="mx-auto max-w-[1100px]">
          <a href="#archive" className="inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-acid">
            <Icon icon="ph:arrow-left-bold" /> Back to archive
          </a>
          {!p ? (
            <p className="mt-16 font-mono">Project not found.</p>
          ) : (
            <>
              <h1 className="mt-10 font-mono text-[length:clamp(2.2rem,5vw,4rem)] leading-[1.15] font-bold">{p.title}</h1>
              {p.kind && <p className="mt-3 font-mono text-sm text-white/50">{p.kind}</p>}
              {(p.brief || p.deliverables || p.tools) && (
                <div className="mt-10 grid gap-10 md:grid-cols-2">
                  <div className="space-y-8">
                    <Block label="Overview">{p.brief}</Block>
                    <Block label="Tools">
                      {p.tools?.length ? (
                        <ul className="flex flex-wrap gap-2">
                          {p.tools.map((t) => <li key={t} className="rounded-full bg-white/10 px-3 py-1 font-mono text-sm">{t}</li>)}
                        </ul>
                      ) : null}
                    </Block>
                  </div>
                  <Block label="Deliverables">
                    {p.deliverables?.length ? (
                      <ul className="space-y-3">
                        {p.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <Icon icon="ph:check-circle-fill" className="mt-1 shrink-0 text-xl text-acid" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Block>
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className={`${btn} bg-acid text-black hover:bg-white`}>
                    Visit live site <Icon icon="ph:arrow-up-right-bold" />
                  </a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/25 hover:border-acid hover:text-acid`}>
                    View source code
                  </a>
                )}
                {p.behance && (
                  <a href={p.behance} target="_blank" rel="noopener noreferrer" className={`${btn} border border-white/25 hover:border-acid hover:text-acid`}>
                    See it on Behance
                  </a>
                )}
              </div>
              {p.images ? (
                <div className={`mt-12 grid items-start gap-4 ${p.images.length > 4 ? "grid-cols-2 md:grid-cols-3" : "md:grid-cols-2"}`}>
                  {p.images.map((im, i) => (
                    <img key={im.src} src={im.src} width={im.w} height={im.h} alt={`${p.title} ${i + 1}`} loading="lazy" className="block h-auto w-full rounded-lg border border-white/10" />
                  ))}
                </div>
              ) : (
                <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0b]">
                  <iframe
                    src={p.url}
                    title={`${p.title} live preview`}
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 h-[300%] w-[300%] origin-top-left scale-[0.3334] border-0 bg-white"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
