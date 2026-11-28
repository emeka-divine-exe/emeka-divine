import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { site } from "./siteData.js";
const portrait = "/hero-portrait.webp";

const links = [
  ["mdi:linkedin", "LinkedIn", site.linkedin],
  ["ri:twitter-x-fill", "Twitter", site.twitter],
  ["mdi:github", "Github", site.github],
  ["ic:baseline-whatsapp", "WhatsApp", site.whatsapp],
  ["mdi:email-outline", site.email, `mailto:${site.email}`],
  ["mdi:phone-outline", site.phone, `tel:${site.phone.replace(/\s/g, "")}`],
];

export default function Footer() {
  return (
    <footer className="bg-black p-3 md:p-5">
      <div className="relative flex min-h-[740px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-black md:min-h-[600px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-[0.12em] select-none text-center font-mono text-[clamp(3.2rem,12.5vw,13rem)] leading-none font-bold whitespace-nowrap text-white/[0.06]"
        >
          EMEKA DIVINE
        </span>
        <img
          src={portrait}
          alt="Emeka Divine, black-and-white portrait"
          className="pointer-events-none absolute bottom-0 left-1/2 block h-auto w-[115%] max-w-[560px] -translate-x-1/2 md:left-0 md:w-[48%] md:max-w-none md:translate-x-0 lg:w-[44%]"
        />
        <div className="relative z-10 ml-auto w-full max-w-sm p-7 md:p-14">
          <p className="font-mono text-sm text-white/50">Find me online</p>
          <ul className="mt-5 space-y-3 font-mono">
            {links.map(([icon, label, href], i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-3 border-b border-white/15 pb-3 transition-colors hover:text-acid"
                >
                  <Icon icon={icon} className="text-xl" />
                  <span className="flex-1 break-all text-sm md:text-base">{label}</span>
                  <Icon icon="ph:arrow-up-right-bold" className="opacity-0 transition group-hover:opacity-100" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <p className="px-4 pt-5 pb-2 text-center font-mono text-xs text-white/40">© 2026 Emeka Divine. All rights reserved.</p>
    </footer>
  );
}
