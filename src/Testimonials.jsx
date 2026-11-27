import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { testimonials } from "./testimonialsData.js";

function Avatar({ t, size = "size-12" }) {
  return t.avatar ? (
    <img src={t.avatar} alt={t.name} className={`${size} rounded-full object-cover`} />
  ) : (
    <span className={`${size} flex items-center justify-center rounded-full bg-white/10`}>
      <Icon icon="ph:user-fill" className="text-2xl text-white/50" />
    </span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section id="testimonials" className="overflow-hidden bg-black px-5 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px] lg:px-[78px]">
        <p className="font-mono text-sm text-acid">Kind words</p>
        <h2 className="mt-3 font-mono text-[length:clamp(2.2rem,4.5vw,3.75rem)] leading-[1.2] font-bold">Testimonials</h2>
      </div>
      <div className="mt-12 grid">
        {testimonials.map((t, i) => {
          const o = i - active;
          return (
            <motion.article
              key={i}
              onClick={() => setActive(i)}
              animate={{ x: `${o * 108}%`, scale: o === 0 ? 1 : 0.88, opacity: o === 0 ? 1 : Math.abs(o) === 1 ? 0.35 : 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              style={{ pointerEvents: Math.abs(o) > 1 ? "none" : "auto" }}
              className="col-start-1 row-start-1 flex w-[min(88vw,560px)] cursor-pointer flex-col gap-5 justify-self-center rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 md:p-8"
            >
              <div className="flex items-center gap-4">
                <Avatar t={t} size="size-14" />
                <div className="font-mono">
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-white/55">{t.role}</p>
                </div>
              </div>
              {t.quote && <p className="text-lg leading-snug">{t.quote}</p>}
              {t.shot ? (
                <img src={t.shot} alt={`WhatsApp message from ${t.name}`} className="w-full rounded-xl border border-white/10" />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-white/15 font-mono text-xs text-white/35">
                  WhatsApp screenshot
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((t, i) => (
          <button
            key={i}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setActive(i)}
            className={`cursor-pointer rounded-full p-0.5 transition ${i === active ? "ring-2 ring-acid" : "opacity-50 hover:opacity-100"}`}
          >
            <Avatar t={t} size="size-11" />
          </button>
        ))}
      </div>
    </section>
  );
}
