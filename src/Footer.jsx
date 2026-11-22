import { Icon } from "@iconify/react";
const portrait = "/hero-portrait.webp";
import { site } from "./siteData.js";

const links = [
  ["mdi:linkedin", "LinkedIn", site.linkedin],
  ["ri:twitter-x-fill", "Twitter", site.twitter],
  ["ic:baseline-whatsapp", "WhatsApp", site.whatsapp],
  ["mdi:email-outline", site.email, `mailto:${site.email}`],
  ["mdi:phone-outline", site.phone, `tel:${site.phone.replace(/\s/g, "")}`],
];

export default function Footer() {
  return (
    <footer className="bg-black p-3 md:p-5">
      <div className="relative flex min-h-[620px] flex-col overflow-hidden rounded-[28px] bg-white text-black md:min-h-[600px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-[0.12em] select-none text-center font-mono text-[clamp(3.2rem,12.5vw,13rem)] leading-none font-bold whitespace-nowrap text-black/[0.07]"
        >
          EMEKA DIVINE
        </span>
        <img
          src={portrait}
          alt=""
          className="pointer-events-none absolute bottom-0 left-0 h-[58%] w-auto max-w-none object-contain object-bottom-left md:h-[96%]"
        />
        <div className="relative z-10 ml-auto w-full max-w-sm p-7 md:p-14">
          <p className="font-mono text-sm text-black/50">Find me online</p>
          <ul className="mt-5 space-y-3 font-mono">
            {links.map(([icon, label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-3 border-b border-black/10 pb-3 transition-colors hover:text-black/60"
                >
                  <Icon icon={icon} className="text-xl" />
                  <span className="flex-1 break-all text-sm md:text-base">{label}</span>
                  <Icon icon="ph:arrow-up-right-bold" className="opacity-0 transition group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="relative z-10 mt-auto p-7 text-right font-mono text-xs text-black/50 md:px-14 md:pb-8">
          © 2026 Emeka Divine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
