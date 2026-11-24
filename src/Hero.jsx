import { useState } from "react";
import { motion } from "framer-motion";
const portrait = "/hero-portrait.webp";

const links = [["Home", "#home"], ["Meet Me", "#meet-me"], ["Archive", "#archive"]];
const roles = ["Brand Designer", "Visual Designer", "Frontend Developer", "Graphics Designer"];

export function TalkButton({ href = "#contact", icon, children = "Let’s Talk" }) {
  const reach = {
    rest: { top: 0, left: 0, right: 0, bottom: 0 },
    hover: { top: -7, left: -7, right: -7, bottom: -7 },
  };
  const c = "absolute size-4 border-acid";
  return (
    <motion.a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.88 }}
      transition={{ type: "spring", stiffness: 520, damping: 11 }}
      className="relative inline-block p-3.5"
    >
      <motion.span
        variants={reach}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="pointer-events-none absolute inset-0"
      >
        <i className={`${c} top-0 left-0 rounded-tl-lg border-t-2 border-l-2`} />
        <i className={`${c} top-0 right-0 rounded-tr-lg border-t-2 border-r-2`} />
        <i className={`${c} bottom-0 left-0 rounded-bl-lg border-b-2 border-l-2`} />
        <i className={`${c} bottom-0 right-0 rounded-br-lg border-b-2 border-r-2`} />
      </motion.span>
      <span className="flex items-center gap-2 rounded-md bg-acid px-7 py-3 font-mono text-lg font-bold text-black">
        {icon}
        {children}
      </span>
    </motion.a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 grid grid-cols-[1fr_auto] items-center py-6 md:grid-cols-3 md:py-8">
      <a href="#home" className="font-mono text-2xl font-bold text-acid">edx</a>
      <nav className="hidden justify-self-center gap-8 font-mono text-lg md:flex">
        {links.map(([t, h]) => (
          <a key={t} href={h} className="transition-colors hover:text-acid">{t}</a>
        ))}
      </nav>
      <a href="#contact" className="hidden justify-self-end font-mono text-lg font-bold transition-colors hover:text-acid md:block">
        Let’s Talk
      </a>
      <button
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="-mr-2 p-2 md:hidden"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-full flex flex-col gap-5 rounded-2xl border border-white/15 bg-black/90 p-6 font-mono text-lg backdrop-blur md:hidden"
        >
          {links.map(([t, h]) => (
            <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="font-bold text-acid">Let’s Talk</a>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  const rise = (d) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] },
  });
  const pad = "mx-auto w-full max-w-[1440px] px-5 md:px-12 lg:px-[78px]";
  return (
    <section id="home" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none relative order-2 -mx-[15%] w-[130%] shrink-0 sm:mx-auto sm:w-[520px] md:absolute md:right-0 md:bottom-0 md:order-none md:mx-0 md:w-[62%] lg:right-[3%] lg:w-[56%]"
      >
        <img
          src={portrait}
          alt="Black-and-white portrait with a phone covering half the face"
          className="block h-auto w-full"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black to-transparent" />
      </motion.div>

      <div className={`${pad} relative z-10 order-1 flex flex-1 flex-col`}>
        <Nav />
        <div className="flex flex-1 flex-col justify-center py-10">
          <h1 className="font-mono text-[length:clamp(2.4rem,5.3vw,4.75rem)] leading-[1.4] font-bold">
            <motion.span {...rise(0.1)} className="block">
              Design{" "}
              <span className="relative inline-block">
                Beyond
                <svg
                  viewBox="0 0 340 28"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="absolute top-[78%] -left-[18%] h-[0.4em] w-[122%] overflow-visible text-acid"
                >
                  <motion.path d="M3 11C70 5 190 7 337 8" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.9 }} />
                  <motion.path d="M44 23C130 19 230 20 300 21" strokeWidth="6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.1 }} />
                </svg>
              </span>
            </motion.span>
            <motion.span {...rise(0.25)} className="block">Pixels...</motion.span>
          </h1>
          <motion.p {...rise(0.4)} className="mt-6 max-w-[34ch] font-sans text-lg leading-snug sm:text-xl md:max-w-lg">
            I create brand identities, logos, promotional designs, social media graphics, and websites that bring ideas to life.
          </motion.p>
          <motion.div {...rise(0.55)} className="mt-8">
            <TalkButton />
          </motion.div>
        </div>
      </div>

      <div className={`${pad} relative z-10 order-3 pb-6`}>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-center font-mono text-xs font-bold text-[#ccc] sm:text-sm md:grid-cols-4 lg:text-lg">
          {roles.map((r, i) => (
            <motion.li key={r} {...rise(0.8 + i * 0.1)}>{r}</motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
